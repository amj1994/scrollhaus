// Decode-once WebCodecs scrub, native currentTime fallback.
//
// video.currentTime seeking has real per-seek decode cost no matter how
// dense the keyframe interval is — under fast continuous scrubbing (many
// seeks per second, the normal case for a real mouse sweep or trackpad
// scroll) that cost piles up and visibly steps between frames. Decoding
// every sample once into an in-memory bank and drawing whichever frame is
// nearest the target position is nearly free by comparison — no seek, no
// decode-on-demand, just a canvas draw. Same engine DRIFT/Briar/Axiom/
// Helixway/Mirage/KILN use.
//
// The <video> element is never removed — canvas is invisible until the
// bank paints for real, so any failure (no VideoDecoder, no CORS, bad
// fetch) just leaves the page on the original currentTime scrub.

declare const MP4Box: any
declare const DataStream: any

export type Clip = {
  ready: boolean
  building: boolean
  reverted: boolean
  bank: { ts: number; blob: Blob }[]
  drawnIndex: number
  current: number
  nearestIndex: (t: number) => number
  render: (t: number) => void
  build: (soft?: boolean) => Promise<void>
}

export function createClip(V: HTMLVideoElement, C: HTMLCanvasElement, onLive?: () => void): Clip {
  const ctx = C.getContext('2d', { alpha: false }) as CanvasRenderingContext2D
  const url = V.getAttribute('src') || ''
  const LEAD = 24
  const LRU_MAX = 24
  const WATCHDOG = 60000

  const clip: Clip = {
    ready: false,
    building: false,
    reverted: false,
    bank: [],
    drawnIndex: -1,
    current: 0,
    nearestIndex: () => -1,
    render: () => {},
    build: () => Promise.resolve(),
  }

  const lru = new Map<number, ImageBitmap | null>()
  let buildRun = 0
  let painted = false

  clip.nearestIndex = (t: number) => {
    const b = clip.bank
    if (!b.length) return -1
    const us = t * 1e6
    let lo = 0
    let hi = b.length - 1
    while (lo < hi) {
      const m = (lo + hi) >> 1
      if (b[m].ts < us) lo = m + 1
      else hi = m
    }
    return lo
  }

  function decodeInto(idx: number) {
    const b = clip.bank
    if (idx < 0 || idx >= b.length || lru.has(idx)) return
    lru.set(idx, null)
    createImageBitmap(b[idx].blob)
      .then((bm) => {
        lru.set(idx, bm)
        if (lru.size > LRU_MAX) {
          const it = lru.keys()
          for (let n = 0; n < lru.size - LRU_MAX; n++) {
            const key = it.next().value as number
            const old = lru.get(key)
            if (old && (old as any).close) (old as any).close()
            lru.delete(key)
          }
        }
        // A scroll/mouse sweep fast enough to jump several frames per tick
        // can outrun a narrow neighbor-only prefetch (warm() below) —
        // redraw at whatever the LATEST requested time is once this decode
        // lands, instead of leaving the canvas frozen on the last frame
        // that happened to already be cached.
        if (!clip.reverted) drawFromBank(clip.current)
      })
      .catch(() => lru.delete(idx))
  }

  function warm(i: number) {
    for (let k = -1; k <= 2; k++) decodeInto(i + k)
  }

  function drawFromBank(t: number) {
    clip.current = t
    const i = clip.nearestIndex(t)
    const bm = i >= 0 ? lru.get(i) : null
    if (bm && i !== clip.drawnIndex) {
      ctx.drawImage(bm, 0, 0, C.width, C.height)
      clip.drawnIndex = i
      if (!painted && !clip.reverted) {
        painted = true
        C.classList.add('is-live')
        onLive?.()
      }
    }
    if (i >= 0) {
      if (!bm) decodeInto(i)
      warm(i)
    }
  }

  clip.render = (t: number) => {
    if (clip.ready) {
      drawFromBank(t)
      return
    }
    if (!V.seeking && Math.abs(V.currentTime - t) > 0.01) {
      try {
        V.currentTime = t
      } catch {
        /* ignore */
      }
    }
  }

  function revert() {
    clip.reverted = true
    clip.ready = false
    C.classList.remove('is-live')
  }

  clip.build = (soft?: boolean) => {
    return new Promise<void>((done) => {
      if (clip.building || matchMedia('(prefers-reduced-motion: reduce)').matches) return done()
      if (typeof VideoDecoder === 'undefined' || typeof MP4Box === 'undefined') return done()
      if (typeof DataStream === 'undefined') return done()
      clip.building = true

      let settled = false
      const watchdog = setTimeout(() => {
        revert()
        finish()
      }, WATCHDOG)
      function finish() {
        if (settled) return
        settled = true
        clearTimeout(watchdog)
        done()
      }
      function fail() {
        if (settled) return
        revert()
        finish()
      }
      function failDecode() {
        if (settled) return
        if (!soft) {
          settled = true
          clearTimeout(watchdog)
          try {
            decoder.close()
          } catch {
            /* ignore */
          }
          clip.building = false
          clip.bank.length = 0
          lru.clear()
          clip.drawnIndex = -1
          clip.build(true).then(done)
          return
        }
        fail()
      }

      const off = document.createElement('canvas')
      let octx: CanvasRenderingContext2D | null = null
      let chain = Promise.resolve()
      const samples: any[] = []
      let decoder: any
      let file: any
      const run = ++buildRun

      let cnt = 0
      const waiters: { n: number; res: () => void }[] = []
      function tickDone() {
        cnt++
        for (let i = waiters.length - 1; i >= 0; i--) {
          if (cnt >= waiters[i].n) {
            waiters[i].res()
            waiters.splice(i, 1)
          }
        }
      }
      function until(n: number) {
        if (cnt >= n) return Promise.resolve()
        return new Promise<void>((res) => waiters.push({ n, res }))
      }

      try {
        file = MP4Box.createFile()
      } catch {
        return fail()
      }

      decoder = new (window as any).VideoDecoder({
        output: (vf: any) => {
          const ts = vf.timestamp
          chain = chain.then(() => {
            if (clip.reverted) {
              vf.close()
              tickDone()
              return
            }
            if (!octx) {
              off.width = vf.codedWidth || 1280
              off.height = vf.codedHeight || 720
              octx = off.getContext('2d', { alpha: false })
            }
            octx!.drawImage(vf, 0, 0, off.width, off.height)
            vf.close()
            return new Promise<void>((res) => {
              off.toBlob(
                (blob) => {
                  if (blob && run === buildRun) clip.bank.push({ ts, blob })
                  tickDone()
                  res()
                },
                'image/webp',
                0.82,
              )
            })
          })
        },
        error: failDecode,
      })

      function description(track: any) {
        const trak = file.getTrackById(track.id)
        const entries = trak.mdia.minf.stbl.stsd.entries
        for (let i = 0; i < entries.length; i++) {
          const box = entries[i].avcC || entries[i].hvcC || entries[i].vpcC || entries[i].av1C
          if (box) {
            const s = new DataStream(undefined, 0, DataStream.BIG_ENDIAN)
            box.write(s)
            return new Uint8Array(s.buffer, 8)
          }
        }
        return null
      }

      file.onError = fail
      file.onReady = (info: any) => {
        const track = info.videoTracks && info.videoTracks[0]
        if (!track) return fail()
        const desc = description(track)
        const cfg: any = { codec: track.codec, codedWidth: track.video.width, codedHeight: track.video.height }
        if (desc) cfg.description = desc
        if (soft) cfg.hardwareAcceleration = 'prefer-software'
        try {
          decoder.configure(cfg)
        } catch {
          return failDecode()
        }
        file.setExtractionOptions(track.id, null, { nbSamples: Infinity })
        file.start()
      }
      file.onSamples = (_id: any, _user: any, list: any[]) => {
        for (let i = 0; i < list.length; i++) samples.push(list[i])
      }

      function pump(): Promise<void> {
        let i = 0
        function step(): Promise<void> {
          if (clip.reverted) return Promise.resolve()
          while (i < samples.length) {
            const s = samples[i]
            try {
              decoder.decode(
                new (window as any).EncodedVideoChunk({
                  type: s.is_sync ? 'key' : 'delta',
                  timestamp: (s.cts * 1e6) / s.timescale,
                  duration: (s.duration * 1e6) / s.timescale,
                  data: s.data,
                }),
              )
            } catch {
              failDecode()
              return Promise.resolve()
            }
            i++
            if (i - cnt > LEAD) return until(i - LEAD).then(step)
          }
          return Promise.resolve()
        }
        return step()
      }

      fetch(url)
        .then((r) => {
          if (!r.ok) throw new Error('http ' + r.status)
          return r.arrayBuffer()
        })
        .catch(fail)
        .then((buf) => {
          if (!buf || clip.reverted) return
          try {
            ;(buf as any).fileStart = 0
            file.appendBuffer(buf)
            file.flush()
          } catch {
            return fail()
          }
          if (!samples.length) return fail()

          pump()
            .then(() => (clip.reverted ? null : decoder.flush()))
            .then(() => chain)
            .then(() => {
              if (clip.reverted || !clip.bank.length) return finish()
              clip.bank.sort((a, b) => a.ts - b.ts)
              const i0 = clip.nearestIndex(clip.current)
              return createImageBitmap(clip.bank[i0].blob)
                .then((bm) => {
                  if (clip.reverted) return
                  lru.set(i0, bm)
                  clip.ready = true
                  drawFromBank(clip.current)
                })
                .then(finish)
            })
            .catch(failDecode)
        })
    })
  }

  return clip
}
