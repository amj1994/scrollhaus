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

// ── frame bank ────────────────────────────────────────────────────────────────
function createClip(video, canvas) {
  var ctx = canvas.getContext('2d', { alpha: false });
  var url = video.getAttribute('src');
  var dur = 0, current = 0, target = 0;
  var bank = [], lru = [], drawnIndex = -1;
  var ready = false, reverted = false, painted = false, building = false;
  var buildRun = 0;

  function prime() {
    dur = video.duration || 0;
    video.currentTime = 0.001;
    video.pause();
  }

  if (video.readyState >= 1) { prime(); }
  video.addEventListener('loadedmetadata', prime);

  function nearestIndex(t) {
    var us = t * 1e6;
    var lo = 0, hi = bank.length - 1;
    while (lo < hi) {
      var mid = (lo + hi) >> 1;
      if (bank[mid].ts < us) lo = mid + 1; else hi = mid;
    }
    return lo;
  }

  function evict(bmp) {
    if (bmp && bmp.close) bmp.close();
  }

  function warm(i) {
    for (var d = -1; d <= 2; d++) {
      var idx = i + d;
      if (idx < 0 || idx >= bank.length) continue;
      if (bank[idx].bmp) continue;
      (function (entry) {
        createImageBitmap(entry.blob).then(function (bmp) {
          if (lru.length >= LRU_MAX) { evict(lru.shift().bmp); }
          entry.bmp = bmp;
          lru.push(entry);
        });
      })(bank[idx]);
    }
  }

  function drawFromBank(t) {
    var i = nearestIndex(t);
    if (i === drawnIndex) return;
    drawnIndex = i;
    warm(i);
    var entry = bank[i];
    if (!entry || !entry.bmp) return;
    ctx.drawImage(entry.bmp, 0, 0, 1280, 720);
    if (!painted) {
      painted = true;
      canvas.classList.add('is-live');
    }
  }

  function drawFallback(t) {
    if (video.seeking) return;
    if (Math.abs(video.currentTime - t) > 0.01) {
      video.currentTime = t;
    }
    if (video.readyState >= 2) {
      ctx.drawImage(video, 0, 0, 1280, 720);
      if (!painted) {
        painted = true;
        canvas.classList.add('is-live');
      }
    }
  }

  function render(t) {
    if (ready) {
      drawFromBank(t);
    } else {
      drawFallback(t);
    }
  }

  function revert() {
    reverted = true;
    ready = false;
    canvas.classList.remove('is-live');
  }

  function build(soft) {
    if (building) return;
    if (reduced) return;
    if (typeof VideoDecoder === 'undefined') return;
    if (typeof MP4Box === 'undefined') return;
    if (typeof DataStream === 'undefined') return;

    building = true;
    reverted = false;
    var run = ++buildRun;
    var frames = [];
    var decoder, file, sampleQueue = [], pumping = false, done = false;
    var wdTimer = setTimeout(function () { fail('watchdog'); }, WATCHDOG);
    var hw = true;

    function finish() {
      if (!finish.called) {
        finish.called = true;
        clearTimeout(wdTimer);
        building = false;
      }
    }

    function fail(reason) {
      if (fail.called) return;
      fail.called = true;
      finish();
      if (hw) {
        hw = false;
        setTimeout(function () { build(true); }, 100);
      } else {
        revert();
      }
    }

    function failDecode(e) {
      fail('decode:' + (e && e.message || e));
    }

    var codecStr = '', descBytes = null;

    function configureDecoder() {
      try {
        decoder = new VideoDecoder({
          output: function (frame) {
            if (run !== buildRun) { frame.close(); return; }
            frames.push(frame);
            pump();
          },
          error: failDecode
        });
        decoder.configure({
          codec: codecStr,
          description: descBytes,
          hardwareAcceleration: hw ? 'prefer-hardware' : 'prefer-software'
        });
      } catch (e) { failDecode(e); }
    }

    function pump() {
      if (pumping || done) return;
      pumping = true;
      while (sampleQueue.length && decoder && decoder.decodeQueueSize < LEAD) {
        var s = sampleQueue.shift();
        try {
          decoder.decode(new EncodedVideoChunk({
            type: s.is_sync ? 'key' : 'delta',
            timestamp: s.cts * 1e6 / s.timescale,
            duration: s.duration * 1e6 / s.timescale,
            data: s.data
          }));
        } catch (e) { failDecode(e); return; }
      }
      pumping = false;
      if (sampleQueue.length === 0 && done) {
        try {
          decoder.flush().then(function () {
            if (run !== buildRun) return;
            // convert frames to blobs
            var pending = frames.length;
            if (pending === 0) { finish(); revert(); return; }
            frames.forEach(function (frame) {
              var offscreen = new OffscreenCanvas(frame.displayWidth, frame.displayHeight);
              var oc = offscreen.getContext('2d');
              oc.drawImage(frame, 0, 0);
              var ts = frame.timestamp;
              frame.close();
              offscreen.convertToBlob({ type: 'image/jpeg', quality: 0.85 }).then(function (blob) {
                if (run !== buildRun) return;
                bank.push({ ts: ts, blob: blob, bmp: null });
                pending--;
                if (pending === 0) {
                  bank.sort(function (a, b) { return a.ts - b.ts; });
                  // draw first frame
                  if (bank[0]) {
                    createImageBitmap(bank[0].blob).then(function (bmp) {
                      bank[0].bmp = bmp;
                      ctx.drawImage(bmp, 0, 0, 1280, 720);
                      ready = true;
                      finish();
                    }).catch(function () { ready = true; finish(); });
                  } else {
                    ready = true;
                    finish();
                  }
                }
              }).catch(function () { pending--; if (pending === 0) { ready = true; finish(); } });
            });
            frames = [];
          }).catch(failDecode);
        } catch (e) { failDecode(e); }
      }
    }

    file = MP4Box.createFile();
    file.onReady = function (info) {
      var track = info.videoTracks[0];
      if (!track) { fail('no-video-track'); return; }

      // extract codec description
      var trak = file.getTrackById(track.id);
      var entry = trak && trak.mdia && trak.mdia.minf && trak.mdia.minf.stbl &&
                  trak.mdia.minf.stbl.stsd && trak.mdia.minf.stbl.stsd.entries &&
                  trak.mdia.minf.stbl.stsd.entries[0];
      var boxNames = ['avcC', 'hvcC', 'vpcC', 'av1C'];
      var descBox = null;
      for (var bi = 0; bi < boxNames.length; bi++) {
        if (entry && entry[boxNames[bi]]) { descBox = entry[boxNames[bi]]; break; }
      }
      if (descBox) {
        var ds = new DataStream(undefined, 0, DataStream.BIG_ENDIAN);
        descBox.write(ds);
        descBytes = new Uint8Array(ds.buffer, 8);
      }

      codecStr = track.codec;
      configureDecoder();
      file.setExtractionOptions(track.id, null, { nbSamples: Infinity });
      file.start();
    };
    file.onSamples = function (id, user, samples) {
      for (var i = 0; i < samples.length; i++) {
        samples[i].data = samples[i].data.slice();
        sampleQueue.push(samples[i]);
      }
      pump();
    };
    file.onError = function (e) { fail('mp4box:' + e); };

    // fetch with range requests
    var offset = 0;
    function fetchChunk() {
      fetch(url, {
        headers: { Range: 'bytes=' + offset + '-' + (offset + 1024 * 1024 - 1) }
      }).then(function (res) {
        return res.arrayBuffer();
      }).then(function (buf) {
        if (run !== buildRun) return;
        buf.fileStart = offset;
        offset += buf.byteLength;
        var next = file.appendBuffer(buf);
        if (buf.byteLength > 0 && next !== null) {
          fetchChunk();
        } else if (buf.byteLength > 0) {
          done = true;
          pump();
        } else {
          done = true;
          pump();
        }
      }).catch(function (e) {
        if (run !== buildRun) return;
        done = true;
        pump();
      });
    }
    fetchChunk();
  }

  return {
    get dur() { return dur || (bank.length > 1 ? (bank[bank.length-1].ts - bank[0].ts + (bank[1].ts - bank[0].ts)) / 1e6 : 0); },
    get drawnIndex() { return drawnIndex; },
    get painted() { return painted; },
    get ready() { return ready; },
    render: render,
    build: build,
    revert: revert,
    prime: prime,
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
  createClip(v1, c1),
  createClip(v2, c2),
  createClip(v3, c3)
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
