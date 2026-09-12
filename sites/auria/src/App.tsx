import { useEffect, useRef } from "react";

// Original, live-drawn motion background — not a hosted video asset, not
// generated media. The source spec's hero video was hotlinked from another
// party's own CDN; this reproduces the same cinematic, ambient "AI voice"
// feeling as a canvas of slow breathing glow orbs and outward voice-pulse
// rings in Auria's own violet, rendered live instead of reusing anyone
// else's footage.
function AmbientVoice() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let t0 = performance.now();

    const orbs = [
      { x: 0.32, y: 0.42, r: 0.34, c: "146,90,255", speed: 0.6, phase: 0 },
      { x: 0.68, y: 0.56, r: 0.3, c: "160,104,255", speed: 0.45, phase: 2 },
      { x: 0.5, y: 0.32, r: 0.22, c: "120,70,220", speed: 0.7, phase: 4 },
    ];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);

      // Soft breathing gradient orbs.
      for (const o of orbs) {
        const breathe = 1 + Math.sin(t * o.speed + o.phase) * 0.14;
        const cx = w * (o.x + Math.sin(t * o.speed * 0.4 + o.phase) * 0.03);
        const cy = h * (o.y + Math.cos(t * o.speed * 0.35 + o.phase) * 0.03);
        const r = Math.max(0.01, Math.min(w, h) * o.r * breathe);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(${o.c},0.30)`);
        grad.addColorStop(0.6, `rgba(${o.c},0.10)`);
        grad.addColorStop(1, `rgba(${o.c},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Outward voice-pulse rings from center.
      const cx = w * 0.5;
      const cy = h * 0.46;
      const period = 3.2;
      for (let i = 0; i < 3; i++) {
        const tt = ((t + (i * period) / 3) % period) / period;
        const rr = Math.max(0.01, tt * Math.min(w, h) * 0.42);
        const alpha = (1 - tt) * 0.16;
        if (alpha <= 0.002) continue;
        ctx.strokeStyle = `rgba(160,104,255,${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function CloverMark() {
  return (
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="128" cy="76" r="52" fill="#fff" />
      <circle cx="128" cy="180" r="52" fill="#fff" />
      <circle cx="76" cy="128" r="52" fill="#fff" />
      <circle cx="180" cy="128" r="52" fill="#fff" />
      <circle cx="128" cy="128" r="30" fill="#080712" />
    </svg>
  );
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.7 12.7c-.03-2.1 1.72-3.1 1.8-3.16-1-1.44-2.53-1.64-3.08-1.66-1.31-.13-2.56.77-3.23.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.44 1.07 8.55.72 1.03 1.57 2.19 2.69 2.15 1.08-.04 1.49-.7 2.79-.7 1.3 0 1.67.7 2.81.68 1.16-.02 1.9-1.05 2.6-2.09.82-1.2 1.16-2.36 1.18-2.42-.03-.01-2.26-.87-2.32-3.52Z" />
      <path d="M14.65 6.52c.59-.72.99-1.71.88-2.7-.85.03-1.88.57-2.49 1.28-.55.63-1.03 1.65-.9 2.62.95.07 1.92-.48 2.51-1.2Z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#080712]">
      <div
        className="absolute left-0 right-0 top-[100px] overflow-hidden"
        style={{ height: "calc(100% - 100px)" }}
      >
        <AmbientVoice />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-4 sm:px-6 sm:pt-6">
        <nav className="flex w-full max-w-4xl items-center justify-between rounded-2xl">
          <a href="#" className="flex items-center gap-2.5 text-white/90">
            <span className="block h-6 w-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <CloverMark />
            </span>
            <span
              className="text-lg tracking-wide sm:text-xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Auria
            </span>
          </a>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-medium tracking-wide text-[#080712] transition-colors hover:bg-white/90 sm:text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <AppleGlyph className="h-4 w-4 text-black" />
            Get the App
          </button>
        </nav>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pt-10 text-center sm:pt-16 lg:pt-24">
        <div
          className="mb-6 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider sm:mb-8 sm:text-sm"
          style={{ color: "rgba(160,104,255,1)", fontFamily: "'Inter', sans-serif" }}
        >
          <AppleGlyph className="h-3.5 w-3.5" />
          Featured Pick
        </div>

        <h1
          className="max-w-4xl text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif", lineHeight: 0.95 }}
        >
          Speak with <em style={{ fontStyle: "italic" }}>voices</em> that once
          <br className="hidden sm:block" /> only lived in your imagination.
        </h1>

        <p
          className="mt-5 max-w-xl text-sm font-light leading-snug text-white/70 sm:mt-7 sm:text-base md:text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Meet AI guides, advisors, or friends whenever the moment calls.
          <br className="hidden sm:block" /> Simply pick the voice you need, and begin your dialogue.
        </p>
      </div>
    </div>
  );
}
