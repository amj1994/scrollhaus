// AXIOM R9 — main.js
// ES module, no imports, no classes, no async/await

var A = 0.2191, B = 0.4539, HOLD = 0.6261;
var WIPE_VH = 90;
var S1_OUT = [0.1565, 0.2035];
var S2_IN = [0.2348, 0.2817], S2_OUT = [0.3913, 0.4383];
var POL = [0.3052, 0.3443];
var S1_PAR = [0.0000, 0.2035], S2_PAR = [0.2348, 0.4383];
var CUT = [0.622, 0.646];
var VIDFADE = [0.646, 0.672];
var EXIT = [0.672, 1.000];
var FIN = [0.780, 0.862];
var TAIL = [0.856, 0.974];
var STAGE_FADE = [0.94, 1.00];
var LERP_TAU = 8, SNAP = 0.002, LRU_MAX = 24, LEAD = 24, WATCHDOG = 60000;

// ── helpers ──────────────────────────────────────────────────────────────────
function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
function smoothstep(a, b, x) {
  var t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}
function segT(p, lo, hi) { return clamp01((p - lo) / (hi - lo)); }
function r3(v) { return Math.round(v * 1000) / 1000; }

var _memo = {};
function setVar(el, key, name, v) {
  var rv = r3(v);
  var mk = key + name;
  if (_memo[mk] === rv) return;
  _memo[mk] = rv;
  el.style.setProperty(name, rv);
}

var _classMemo = {};
function setClass(el, key, cls, on) {
  var mk = key + cls;
  if (_classMemo[mk] === on) return;
  _classMemo[mk] = on;
  el.classList.toggle(cls, on);
}

var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
var mqNarrow = matchMedia('(max-width: 767px)');

// ── DOM refs ──────────────────────────────────────────────────────────────────
var v1 = document.getElementById('v1');
var c1 = document.getElementById('c1');
var v2 = document.getElementById('v2');
var c2 = document.getElementById('c2');
var v3 = document.getElementById('v3');
var c3 = document.getElementById('c3');
var stage = document.getElementById('stage');
var ra = document.getElementById('ra');
var rb = document.getElementById('rb');
var plateout = document.getElementById('plateout');
var cutwrap = document.getElementById('cutwrap');
var cutEl = document.getElementById('cut');
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var specEl = document.getElementById('spec');
var runway = document.querySelector('.runway');

// ── cutout ────────────────────────────────────────────────────────────────────
var hasCut = false;

function loadCutout() {
  cutEl.addEventListener('load', function () {
    hasCut = true;
    cutwrap.style.display = '';
  });
  cutEl.addEventListener('error', function () {
    hasCut = false;
  });
  cutEl.src = cutEl.dataset.src;
}

if (document.readyState === 'complete') {
  setTimeout(loadCutout, 1200);
} else {
  window.addEventListener('load', function () { setTimeout(loadCutout, 1200); });
}

// ── entrance ──────────────────────────────────────────────────────────────────
var shown = false;
var shownAt = 0;
var settled = false;

function settle() {
  if (settled) return;
  settled = true;
  document.documentElement.classList.add('is-settled');
}

function showPage() {
  if (shown) return;
  shown = true;
  shownAt = performance.now();
  requestAnimationFrame(function () {
    document.documentElement.classList.add('is-ready');
  });
  setTimeout(settle, 4000);
}

document.fonts.ready.then(showPage);
window.addEventListener('load', showPage);
setTimeout(function () {
  // failsafe — no rAF hop (hidden docs)
  if (!shown) {
    shown = true;
    shownAt = performance.now();
    document.documentElement.classList.add('is-ready');
    setTimeout(settle, 4000);
  }
}, 2500);

// ── frame sequence: progressive per-frame WebP fetch, one cache per clip ──
// Used to be: fetch the whole clip, decode via WebCodecs into a bank, then
// scrub. Same idea as Cortexa/Drift/KILN/Helixway, applied here per-clip
// since v1/v2/v3 are three genuinely different source videos (not one clip
// shown at three time offsets). No monolithic download blocks any layer's
// first paint; frames stream in as each layer's scroll position asks for
// them. dur is the source clip's real duration (ffprobe), matching the
// d1/d2/d3 fallback constants the render loop below already used.
function createClip(video, canvas, seqDir, seqCount, dur) {
  var ctx = canvas.getContext('2d', { alpha: false });
  var current = 0, target = 0;
  var cache = new Map(), pending = new Map(), drawnIndex = -1, painted = false;
  var LRU_MAX = 24;

  function seqUrl(i) { return seqDir + '/' + String(i + 1).padStart(3, '0') + '.webp'; }
  function nearestIndex(t) {
    return Math.max(0, Math.min(seqCount - 1, Math.round((t / dur) * (seqCount - 1))));
  }
  function evictFar(center) {
    if (cache.size <= LRU_MAX) return;
    var idxs = Array.from(cache.keys()).sort(function (a, b) { return Math.abs(b - center) - Math.abs(a - center); });
    while (cache.size > LRU_MAX && idxs.length) {
      var i = idxs.shift(), bm = cache.get(i);
      if (bm && bm.close) bm.close();
      cache.delete(i);
    }
  }
  function load(i) {
    if (i < 0 || i >= seqCount || cache.has(i) || pending.has(i)) return;
    pending.set(i, true);
    fetch(seqUrl(i))
      .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.blob(); })
      .then(function (b) { return createImageBitmap(b); })
      .then(function (bm) { pending.delete(i); cache.set(i, bm); })
      .catch(function () { pending.delete(i); });
  }
  function warm(i) { for (var d = -1; d <= 2; d++) load(i + d); }

  function drawFromBank(t) {
    var i = nearestIndex(t);
    if (i !== drawnIndex) {
      var bm = cache.get(i);
      if (bm) {
        drawnIndex = i;
        ctx.drawImage(bm, 0, 0, 1280, 720);
        if (!painted) { painted = true; canvas.classList.add('is-live'); }
      }
    }
    if (!cache.has(i)) load(i);
    warm(i);
    evictFar(i);
  }

  return {
    get dur() { return dur; },
    get drawnIndex() { return drawnIndex; },
    get painted() { return painted; },
    get ready() { return true; },
    render: drawFromBank,
    build: function () {},
    revert: function () {},
    prime: function () {},
    current: function () { return current; },
    setTarget: function (t) { target = t; },
    lerp: function (dt) {
      var decay = 1 - Math.exp(-dt * LERP_TAU);
      current += (target - current) * decay;
      if (Math.abs(current - target) < SNAP) current = target;
    }
  };
}

var clips = [
  createClip(v1, c1, 'assets/sequence-1', 96, 8),
  createClip(v2, c2, 'assets/sequence-2', 121, 10.041667),
  createClip(v3, c3, 'assets/sequence-3', 97, 8.041667)
];

// ── build sequentially ────────────────────────────────────────────────────────
function buildAll() {
  if (mqNarrow.matches || reduced) return;
  clips[0].build(false);
  // build 2 after 1 finishes — simplified: stagger with interval check
  var t1 = setInterval(function () {
    if (!mqNarrow.matches && clips[0].ready) {
      clearInterval(t1);
      clips[1].build(false);
      var t2 = setInterval(function () {
        if (clips[1].ready) {
          clearInterval(t2);
          clips[2].build(false);
        }
      }, 500);
    }
  }, 500);
}

window.addEventListener('load', buildAll);
mqNarrow.addEventListener('change', function (e) {
  if (!e.matches) buildAll();
});

// ── measure ───────────────────────────────────────────────────────────────────
var span = 0, wipe = 0, vw = 0, vh = 0;

function measure() {
  span = runway.offsetHeight - innerHeight;
  wipe = span > 0 ? Math.min(0.24, (WIPE_VH / 100 * innerHeight) / span) : 0;
  vw = innerWidth;
  vh = innerHeight;
}

measure();
window.addEventListener('load', measure);
var resizeTimer;
function onResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(measure, 120);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);

function progress() {
  return span > 0 ? clamp01(scrollY / span) : 0;
}

// ── polarity probe ────────────────────────────────────────────────────────────
var probe = document.createElement('canvas');
probe.width = 32; probe.height = 18;
var probCtx = probe.getContext('2d', { willReadFrequently: true, alpha: false });
var polEls = Array.from(document.querySelectorAll('.pol')).map(function (el) {
  return { el: el, pol: 0, cur: 0, memo: -1 };
});
var probeKey = '';
var probeRetired = false;
var dissolved = 0;

function blitCols(src, x0) {
  probCtx.drawImage(src, x0, 0, 32 - x0, 18, x0, 0, 32 - x0, 18);
}
function blitRows(src, y0) {
  probCtx.drawImage(src, 0, y0, 32, 18 - y0, 0, y0, 32, 18 - y0);
}

var raNow = 0, rbNow = 0;

function paintProbe() {
  if (!clips[0].painted) return false;
  probCtx.fillStyle = '#030303';
  probCtx.fillRect(0, 0, 32, 18);
  probCtx.drawImage(c1, 0, 0, 32, 18);
  if (raNow > 0 && clips[1].painted) {
    blitCols(c2, Math.round((1 - raNow) * 32));
  }
  if (rbNow > 0 && clips[2].painted) {
    blitRows(c3, Math.round((1 - rbNow) * 18));
  }
  return true;
}

var lumData = new Float32Array(32 * 18);

function readProbe() {
  try {
    var id = probCtx.getImageData(0, 0, 32, 18);
    var d = id.data;
    for (var i = 0; i < 32 * 18; i++) {
      lumData[i] = (0.2126 * d[i*4] + 0.7152 * d[i*4+1] + 0.0722 * d[i*4+2]) / 255;
    }
  } catch (e) {
    probeRetired = true;
  }
}

function regionLum(q) {
  var r = q.el.getBoundingClientRect();
  if (r.width < 1 || r.height < 1) return -1;
  var x0 = Math.max(0, Math.min(31, Math.floor(r.left / vw * 32)));
  var x1 = Math.max(x0 + 1, Math.min(32, Math.ceil(r.right / vw * 32)));
  var y0 = Math.max(0, Math.min(17, Math.floor(r.top / vh * 18)));
  var y1 = Math.max(y0 + 1, Math.min(18, Math.ceil(r.bottom / vh * 18)));
  var sum = 0, n = 0;
  for (var y = y0; y < y1; y++) {
    for (var x = x0; x < x1; x++) {
      sum += lumData[y * 32 + x];
      n++;
    }
  }
  return n > 0 ? sum / n : -1;
}

function updatePolarity(p, dt) {
  var key = clips[0].drawnIndex + '|' + clips[1].drawnIndex + '|' + clips[2].drawnIndex + '|' + r3(raNow) + '|' + r3(rbNow);
  var needsPaint = key !== probeKey;
  if (needsPaint && !probeRetired) {
    if (paintProbe()) {
      probeKey = key;
      readProbe();
    }
  }
  var decay = 1 - Math.exp(-dt * 6);
  for (var i = 0; i < polEls.length; i++) {
    var q = polEls[i];
    var lum = regionLum(q);
    if (lum < 0) lum = q.cur;
    lum = lum * (1 - dissolved) + dissolved;
    var cur = q.cur;
    var tgt = cur >= 0.5 ? (lum >= 0.46 ? 1 : 0) : (lum > 0.54 ? 1 : 0);
    if (probeRetired) tgt = segT(p, POL[0], POL[1]);
    cur += (tgt - cur) * decay;
    if (Math.abs(cur - tgt) < 0.004) cur = tgt;
    q.cur = cur;
    if (Math.abs(cur - q.pol) > 0.001) {
      q.pol = cur;
      q.el.style.setProperty('--pol', r3(cur));
    }
  }
}

// ── writers ───────────────────────────────────────────────────────────────────
function screenWriter(el, key, IN_rng, OUT_rng, PAR_rng) {
  var callout = el.querySelector('.callout');
  var inV = IN_rng ? segT(progress(), IN_rng[0], IN_rng[1]) : 1;
  var outV = 0;
  return function (p) {
    inV = IN_rng ? segT(p, IN_rng[0], IN_rng[1]) : 1;
    outV = OUT_rng ? segT(p, OUT_rng[0], OUT_rng[1]) : 0;
    var parV = PAR_rng ? segT(p, PAR_rng[0], PAR_rng[1]) : 0.5;
    setVar(el, key, '--in', inV);
    setVar(el, key, '--out', outV);
    var live = inV > 0 && outV < 1;
    setClass(el, key, 'is-anim', live);
    setClass(el, key, 'is-hidden', !live && outV >= 1);
    if (callout) {
      setVar(callout, key + 'c', '--par', parV);
      setClass(callout, key + 'c', 'is-anim', live);
    }
  };
}

var writeS1 = screenWriter(s1, 's1', null, S1_OUT, S1_PAR);
var writeS2 = screenWriter(s2, 's2', S2_IN, S2_OUT, S2_PAR);

function updateReveals(p) {
  var raFrac = 0, rbFrac = 0;
  if (p >= A) {
    raFrac = Math.min(1, (p - A) / wipe);
  }
  if (p >= B) {
    rbFrac = Math.min(1, (p - B) / wipe);
  }
  raNow = raFrac;
  rbNow = rbFrac;

  setVar(ra, 'ra', '--reveal', raFrac);
  setVar(rb, 'rb', '--reveal', rbFrac);

  var stageOut = segT(p, STAGE_FADE[0], STAGE_FADE[1]);
  setVar(stage, 'st', '--stage-out', stageOut);

  var raEdge = raFrac > 0 && raFrac < 1 ? 1 : 0;
  var rbEdge = rbFrac > 0 && rbFrac < 1 ? 1 : 0;
  setVar(ra, 'rae', '--edge', raEdge);
  setVar(rb, 'rbe', '--edge', rbEdge);

  // is-covered: hide stage when fully revealed
  setClass(stage, 'st', 'is-covered', raFrac >= 1 && rbFrac >= 1);
  setClass(ra, 'ra', 'is-covered', rbFrac >= 1);
}

function updateHandoff(p) {
  var cut = hasCut ? smoothstep(CUT[0], CUT[1], p) : 0;
  var vidfade = smoothstep(VIDFADE[0], VIDFADE[1], p);
  var exit = hasCut ? segT(p, EXIT[0], EXIT[1]) : 0;
  var fin = smoothstep(FIN[0], FIN[1], p);
  var tail = segT(p, TAIL[0], TAIL[1]);

  dissolved = vidfade;

  setVar(cutEl, 'cut', '--cut', cut);
  setVar(rb, 'diss', '--dissolve', vidfade);
  setVar(plateout, 'pout', '--vidfade', vidfade);
  setVar(cutEl, 'exit', '--exit', exit);
  setClass(cutEl, 'cut', 'is-diving', exit > 0.5);

  setVar(specEl, 'fin', '--fin', fin);
  setVar(specEl, 'tail', '--tail', tail);

  var specLive = p > TAIL[0];
  setClass(specEl, 'spec', 'is-anim', specLive);
  setClass(specEl, 'spec', 'is-hidden', false);
}

function updateScrub(p, dt) {
  // clip 1: 0 → A
  var t1 = segT(p, 0, A);
  var d1 = clips[0].dur || 8;
  clips[0].setTarget(t1 * d1);
  clips[0].lerp(dt);
  var v1 = raNow >= 1 && rbNow >= 1;
  if (!v1) clips[0].render(clips[0].current());

  // clip 2: A → B
  var t2 = segT(p, A, B);
  var d2 = clips[1].dur || 10.04;
  clips[1].setTarget(t2 * d2);
  clips[1].lerp(dt);
  var v2vis = raNow > 0 && rbNow < 1;
  if (v2vis) clips[1].render(clips[1].current());

  // clip 3: B → HOLD
  var t3 = segT(p, B, HOLD);
  var d3 = clips[2].dur || 8.04;
  clips[2].setTarget(t3 * d3);
  clips[2].lerp(dt);
  if (rbNow > 0) clips[2].render(clips[2].current());
}

// ── main loop ─────────────────────────────────────────────────────────────────
var last = performance.now();
var lastVW = vw, lastVH = vh;
var settleTimer = null;

function drive(p, dt) {
  writeS1(p);
  writeS2(p);
  updateReveals(p);
  updateHandoff(p);
  updatePolarity(p, dt);
}

function tick() {
  var now = performance.now();
  var dt = Math.min(0.1, (now - last) / 1000);
  last = now;

  if (innerWidth !== lastVW || innerHeight !== lastVH) {
    measure();
    lastVW = vw;
    lastVH = vh;
  }

  if (shown && !settled && (now - shownAt) > 1600) {
    settle();
  }

  var p = progress();
  drive(p, dt);
  updateScrub(p, dt);

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

// ── diagnostics ───────────────────────────────────────────────────────────────
Object.defineProperty(window, '__axiom', {
  get: function () {
    return {
      get clips() { return clips; },
      get map() { return { A: A, B: B, HOLD: HOLD }; },
      get vars() { return { span: span, wipe: wipe }; },
      get pol() { return polEls.map(function (q) { return { el: q.el, pol: q.pol }; }); },
      get hasCut() { return hasCut; },
      get p() { return progress(); },
      drive: drive,
      seek: function (i, t) { clips[i].setTarget(t); clips[i].render(t); }
    };
  }
});
