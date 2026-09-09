import { useEffect, useRef, useState } from 'react'
import { githubOf, previewOf, specOf, thumbOf, type Site } from '@/data/sites'
import { observe } from '@/lib/inview'

// Specs are fetched once and kept for the session. Copying the same card twice
// costs one request, not two.
const specCache = new Map<string, Promise<string>>()
function loadSpec(id: string) {
  let p = specCache.get(id)
  if (!p) {
    p = fetch(specOf(id)).then(r => {
      if (!r.ok) throw new Error(`spec ${id}: ${r.status}`)
      return r.text()
    })
    specCache.set(id, p)
  }
  return p
}

export default function SiteCard({ site }: { site: Site }) {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'err'>('idle')
  const [near, setNear] = useState(false)   // within 300px of the viewport
  const [ready, setReady] = useState(false) // first video frame painted
  const inViewRef = useRef(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  // The <video> element does not exist until the card is near the viewport, and
  // it is torn down again once the card has been away for a while. Without the
  // teardown, scrolling to the bottom of a thousand-card library leaves a
  // thousand mounted media elements behind — measured at 959 before this fix.
  // The 4s grace period means flicking back and forth across the boundary does
  // not thrash, and the card is >300px offscreen when the swap happens, so the
  // poster coming back is never visible.
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let release: number | undefined
    const stop = observe(box, inView => {
      inViewRef.current = inView
      const v = videoRef.current
      if (inView) {
        window.clearTimeout(release)
        setNear(true)
        // v is still null on the FIRST intersection - the element has not been
        // rendered yet. The effect below is what actually starts playback then.
        v?.play().catch(() => {})
      } else {
        v?.pause()
        window.clearTimeout(release)
        release = window.setTimeout(() => { setNear(false); setReady(false) }, 4000)
      }
    })
    return () => { window.clearTimeout(release); stop() }
  }, [])

  // Start playback once the <video> actually exists. Without this the first
  // intersection calls play() on a null ref, the element mounts a tick later,
  // and every card sits frozen on frame 0 forever.
  useEffect(() => {
    if (!near) return
    const v = videoRef.current
    if (v && inViewRef.current) v.play().catch(() => {})
  }, [near])

  // Warm the spec on hover / touch-down, so the click itself is synchronous and
  // never loses its user-gesture activation on the clipboard write.
  const warm = () => { loadSpec(site.id).catch(() => {}) }

  const copy = async () => {
    try {
      const text = await loadSpec(site.id)
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.cssText = 'position:fixed;opacity:0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied('ok')
    } catch {
      specCache.delete(site.id) // let a retry actually retry
      setCopied('err')
    }
    window.setTimeout(() => setCopied('idle'), 1600)
  }

  return (
    <div className="group card-cv">
      <div
        ref={boxRef}
        className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-white/10"
      >
        <img
          src={thumbOf(site.id)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${ready ? 'opacity-0' : 'opacity-100'}`}
        />
        {near && (
          <video
            ref={videoRef}
            src={previewOf(site.id)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={`Scroll-through preview of ${site.title}`}
            onPlaying={() => setReady(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute right-2 top-2 flex items-center gap-1.5 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 focus-within:opacity-100 focus-within:translate-y-0">
          <a
            href={githubOf(site.id)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm ring-1 ring-white/15 transition-colors hover:bg-black/90 hover:text-white"
            title={`View the source for ${site.title} on GitHub`}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.44-2.43-.97-2.43-.97-.33-.83-.8-1.05-.8-1.05-.66-.45.05-.44.05-.44.72.05 1.1.74 1.1.74.64 1.1 1.68.78 2.1.6.06-.47.25-.78.46-.96-1.6-.18-3.29-.8-3.29-3.57 0-.79.28-1.43.74-1.93-.07-.18-.32-.92.07-1.92 0 0 .61-.2 1.99.73a6.9 6.9 0 0 1 3.62 0c1.38-.93 1.99-.73 1.99-.73.39 1 .14 1.74.07 1.92.46.5.74 1.14.74 1.93 0 2.78-1.69 3.39-3.3 3.57.26.22.49.66.49 1.33l-.01 1.97c0 .21.14.45.55.38A8 8 0 0 0 8 0Z" />
            </svg>
            GitHub
          </a>
          <button
            type="button"
            onClick={copy}
            onPointerEnter={warm}
            onPointerDown={warm}
            onFocus={warm}
            aria-label={`Copy the build code for ${site.title}`}
            className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[11px] font-semibold text-black transition-colors hover:bg-white/85"
          >
            {copied === 'ok' ? (
              <>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Copied
              </>
            ) : copied === 'err' ? (
              <>Retry</>
            ) : (
              <>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-semibold tracking-tight text-white">{site.title}</div>
          <div className="mt-0.5 text-[11px] text-white/35">{site.category}</div>
        </div>
        <div className="shrink-0 text-[10px] tabular-nums text-white/20">{site.added}</div>
      </div>
    </div>
  )
}
