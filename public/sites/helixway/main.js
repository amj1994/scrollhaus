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

// Used to run from the video's loadedmetadata event; that never fires now
// that the video has no src (frames come from the sequence cache instead).
duration = Math.min(8, MAX_TIME);
canvas.width = 1280;
canvas.height = 720;

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

// Progressive WebP frame sequence -- used to be a WebCodecs decode-once
// bank (fetch the whole hero.mp4, decode every sample), now on-demand
// per-frame fetches into a shared LRU cache. Same idea as Cortexa/Drift/
// KILN. SEQ_DUR is the source clip's real duration (8s); MAX_TIME above
// is a separate, pre-existing cap on how far into the clip scroll ever
// scrubs (7.5s) -- kept as-is, just no longer tied to video.duration.
const SEQ_COUNT = 96, SEQ_DUR = 8;
function seqUrl(i) { return 'assets/sequence/' + String(i + 1).padStart(3, '0') + '.webp'; }

function nearestIndex(t) {
  return Math.max(0, Math.min(SEQ_COUNT - 1, Math.round((t / SEQ_DUR) * (SEQ_COUNT - 1))));
}

function requestFrame(idx) {
  if (idx < 0 || idx >= SEQ_COUNT || bitmapCache.has(idx) || bitmapOrder.includes('pending:' + idx)) return;
  bitmapOrder.push('pending:' + idx);
  fetch(seqUrl(idx))
    .then(r => { if (!r.ok) throw new Error('http ' + r.status); return r.blob(); })
    .then(b => createImageBitmap(b))
    .then(bm => {
      bitmapOrder = bitmapOrder.filter(v => v !== 'pending:' + idx);
      while (bitmapOrder.length >= LRU_MAX) {
        const evictIdx = bitmapOrder.shift();
        const evicted = bitmapCache.get(evictIdx);
        if (evicted && evicted.close) evicted.close();
        bitmapCache.delete(evictIdx);
      }
      bitmapCache.set(idx, bm);
      bitmapOrder.push(idx);
      if (idx === nearestIndex(current)) drawFromBank(current);
    })
    .catch(() => { bitmapOrder = bitmapOrder.filter(v => v !== 'pending:' + idx); });
}

function warm(i) {
  for (let j = Math.max(0, i - 1); j <= Math.min(SEQ_COUNT - 1, i + 2); j++) requestFrame(j);
}

function drawFromBank(t) {
  const idx = nearestIndex(t);
  const bm = bitmapCache.get(idx);
  if (bm && idx !== lastDrawnIndex) {
    ctx.drawImage(bm, 0, 0, canvas.width, canvas.height);
    canvas.classList.add('is-live');
    lastDrawnIndex = idx;
  }
  if (!bm) requestFrame(idx);
  warm(idx);
}

function render(t) {
  drawFromBank(t);
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
