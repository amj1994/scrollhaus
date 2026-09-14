// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  } else {
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ===== SCROLL-SCRUBBED VIDEO =====
const video = document.getElementById('scrollVideo');
const canvas = document.getElementById('scrollCanvas');
const container = document.getElementById('scrollContainer');
const overlay = document.querySelector('.content-overlay');
const sections = document.querySelectorAll('.section-content');
const ctx = canvas.getContext('2d', { alpha: false });

const MAX_TIME = 7.5;
const LERP_TAU = 8;
const SNAP = 0.002;
const LEAD = 24;
const LRU_MAX = 30;

let duration = MAX_TIME;
let start = 0;
let end = 0;
let span = 1;
let p = 0;
let current = 0;
let target = 0;
let lastTime = performance.now();
let bankReady = false;
let bankFailed = false;
let bank = []; // [{ts, blob}]
let bitmapCache = new Map(); // index -> ImageBitmap (LRU)
let bitmapOrder = []; // LRU order of indices
let lastDrawnIndex = -1;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function clamp(v, lo, hi) {
  return Math.min(hi, Math.max(lo, v));
}

function measure() {
  start = container.offsetTop;
  end = start + container.offsetHeight - window.innerHeight;
  span = end - start || 1;
}

measure();

// Resize / orientation debounce
let resizeTimer;
function onResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    measure();
  }, 100);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);

// loadedmetadata
function onMetadata() {
  duration = Math.min(video.duration, MAX_TIME);
  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;
  video.pause();
}

video.addEventListener('loadedmetadata', onMetadata);
if (video.readyState >= 1) onMetadata();

// Section switching
function updateSections(prog) {
  const idx = Math.min(2, Math.floor(prog * 3));
  sections.forEach((s, i) => {
    if (i === idx) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  const pastEnd = window.scrollY > start + span + window.innerHeight;
  overlay.style.display = pastEnd ? 'none' : '';
}

// Binary search nearest frame index in bank
function nearestIndex(t) {
  const tUs = t * 1e6;
  let lo = 0, hi = bank.length - 1;
  while (lo < hi) {
    const m = (lo + hi) >> 1;
    if (bank[m].ts < tUs) lo = m + 1;
    else hi = m;
  }
  if (lo > 0 && Math.abs(bank[lo - 1].ts - tUs) < Math.abs(bank[lo].ts - tUs)) {
    return lo - 1;
  }
  return lo;
}

// LRU bitmap cache
async function getBitmap(idx) {
  if (bitmapCache.has(idx)) {
    // Move to end (most recently used)
    bitmapOrder = bitmapOrder.filter(i => i !== idx);
    bitmapOrder.push(idx);
    return bitmapCache.get(idx);
  }

  const entry = bank[idx];
  if (!entry) return null;

  let bm;
  try {
    bm = await createImageBitmap(entry.blob);
  } catch (e) {
    return null;
  }

  // Evict if over LRU_MAX
  while (bitmapOrder.length >= LRU_MAX) {
    const evictIdx = bitmapOrder.shift();
    const evicted = bitmapCache.get(evictIdx);
    if (evicted) evicted.close();
    bitmapCache.delete(evictIdx);
  }

  bitmapCache.set(idx, bm);
  bitmapOrder.push(idx);
  return bm;
}

// Warm nearby frames
function warm(i) {
  for (let j = Math.max(0, i - 1); j <= Math.min(bank.length - 1, i + 2); j++) {
    if (!bitmapCache.has(j)) {
      getBitmap(j); // fire-and-forget
    }
  }
}

// Draw from bank
async function drawFromBank(t) {
  if (!bankReady || bank.length === 0) return false;

  const idx = nearestIndex(t);
  warm(idx);

  const bm = await getBitmap(idx);
  if (!bm) return false;

  if (idx !== lastDrawnIndex) {
    ctx.drawImage(bm, 0, 0, canvas.width, canvas.height);
    canvas.classList.add('is-live');
    lastDrawnIndex = idx;
  }
  return true;
}

// Render: bank first, fallback to video.currentTime
function render(t) {
  if (!bankFailed && bankReady && bank.length > 0) {
    drawFromBank(t); // async, updates canvas async
    return;
  }

  // Fallback: seek video element
  if (!video.seeking && Math.abs(video.currentTime - t) > 0.01) {
    try {
      video.currentTime = t;
    } catch (e) {
      // ignore
    }
  }
}

// rAF loop
function update(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;

  const raw = (window.scrollY - start) / span;
  target = clamp(raw, 0, 1) * Math.min(duration, MAX_TIME);
  p = clamp(raw, 0, 1);

  if (prefersReducedMotion) {
    current = target;
  } else {
    current += (target - current) * (1 - Math.exp(-dt * LERP_TAU));
    if (Math.abs(target - current) < SNAP) current = target;
  }

  render(current);
  updateSections(p);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

// ===== FRAME BANK (WebCodecs + MP4Box) =====
async function buildFrameBank() {
  if (prefersReducedMotion) return;
  if (typeof VideoDecoder === 'undefined' || typeof MP4Box === 'undefined' || typeof DataStream === 'undefined') {
    return;
  }

  const src = video.src;
  let arrayBuffer;
  try {
    const resp = await fetch(src, { mode: 'cors' });
    if (!resp.ok) throw new Error('Fetch failed: ' + resp.status);
    arrayBuffer = await resp.arrayBuffer();
  } catch (e) {
    // CORS or network failure — stay on video.currentTime fallback
    bankFailed = true;
    return;
  }

  let decoder;
  const samples = [];
  let decoderConfigured = false;

  try {
    const file = MP4Box.createFile();

    await new Promise((resolve, reject) => {
      file.onReady = (info) => {
        const track = info.videoTracks[0];
        if (!track) return reject(new Error('No video track'));

        const trakBox = file.getTrackById(track.id);
        const sampleEntry = trakBox?.mdia?.minf?.stbl?.stsd?.entries?.[0];

        let description;
        try {
          const descBox = sampleEntry?.avcC || sampleEntry?.hvcC || sampleEntry?.vpcC || sampleEntry?.av1C;
          if (descBox) {
            const s = new DataStream(undefined, 0, DataStream.BIG_ENDIAN);
            descBox.write(s);
            description = new Uint8Array(s.buffer, 8);
          }
        } catch (e) {
          // no description
        }

        let codec = track.codec;

        try {
          decoder = new VideoDecoder({
            output(vf) {
              // sequential promise chain: draw -> close -> toBlob -> push
              const ts = vf.timestamp;
              const offscreen = new OffscreenCanvas(vf.displayWidth, vf.displayHeight);
              const octx = offscreen.getContext('2d');
              octx.drawImage(vf, 0, 0);
              vf.close();
              offscreen.convertToBlob({ type: 'image/webp', quality: 0.82 }).then(blob => {
                bank.push({ ts, blob });
              }).catch(() => {});
            },
            error(e) {
              bankFailed = true;
              reject(e);
            }
          });

          decoder.configure({
            codec,
            codedWidth: track.video.width,
            codedHeight: track.video.height,
            ...(description ? { description } : {})
          });
          decoderConfigured = true;
        } catch (e) {
          bankFailed = true;
          return reject(e);
        }

        file.setExtractionOptions(track.id, null, { nbSamples: Infinity });
        file.start();
      };

      file.onSamples = (id, user, sampleList) => {
        for (const s of sampleList) {
          samples.push(s);
        }
      };

      file.onError = (e) => {
        bankFailed = true;
        reject(new Error('MP4Box error: ' + e));
      };

      const buf = arrayBuffer.slice(0);
      buf.fileStart = 0;
      file.appendBuffer(buf);
      file.flush();

      // Give onSamples time to fire
      setTimeout(resolve, 200);
    });

    if (bankFailed || !decoderConfigured) return;

    // Pump decode
    let cnt = 0;
    for (let i = 0; i < samples.length; i++) {
      const s = samples[i];

      // Back-pressure: wait if too many in-flight
      while (i - cnt > LEAD) {
        await new Promise(r => setTimeout(r, 16));
        cnt = decoder.decodeQueueSize !== undefined
          ? i - decoder.decodeQueueSize
          : cnt + 1;
      }

      try {
        decoder.decode(new EncodedVideoChunk({
          type: s.is_sync ? 'key' : 'delta',
          timestamp: s.cts * 1e6 / s.timescale,
          duration: s.duration * 1e6 / s.timescale,
          data: s.data
        }));
      } catch (e) {
        bankFailed = true;
        return;
      }
    }

    await decoder.flush();

    // Sort bank by timestamp
    bank.sort((a, b) => a.ts - b.ts);
    bankReady = true;

  } catch (e) {
    bankFailed = true;
  }
}

// Start bank build on load
if (document.readyState === 'complete') {
  buildFrameBank();
} else {
  window.addEventListener('load', buildFrameBank);
}
