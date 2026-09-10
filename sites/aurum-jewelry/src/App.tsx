import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, User } from "lucide-react";

const ACCENT = "#FBFF8D";

const VIDEO_1 = "/video-1.mp4";
const VIDEO_2 = "/video-2.mp4";
const RING_HERO = "/ring-hero.png";
const EARRINGS_IMG = "/earrings.jpg";
const RING_2_IMG = "/ring-sculpture.jpg";

function getStaggerStyle(progress: number, start: number, end: number): CSSProperties {
  const ratio = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return {
    opacity: 1 - ratio,
    transform: `translateY(${-75 * ratio}px)`,
    filter: `blur(${ratio * 16}px)`,
    willChange: "opacity, transform, filter",
    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
    pointerEvents: ratio > 0.85 ? "none" : "auto",
  };
}

const BrandCrest = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4 C27 14 27 18 24 24 C21 18 21 14 24 4 Z" fill="white" />
    <path d="M44 24 C34 27 30 27 24 24 C30 21 34 21 44 24 Z" fill="white" />
    <path d="M24 44 C21 34 21 30 24 24 C27 30 27 34 24 44 Z" fill="white" />
    <path d="M4 24 C14 21 18 21 24 24 C18 27 14 27 4 24 Z" fill="white" />
    <circle cx="24" cy="24" r="4" fill="white" />
  </svg>
);

export default function App() {
  const [progress, setProgress] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const targetScrollFractionRef = useRef(0);
  const currentScrollFractionRef = useRef(0);
  const targetVideoRatioRef = useRef(0);
  const currentVideoTimeRef = useRef(0);
  const targetVideoSecondRatioRef = useRef(0);
  const currentVideoSecondTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const frac = max > 0 ? window.scrollY / max : 0;
      targetScrollFractionRef.current = Math.max(0, Math.min(1, frac));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const t = window.setTimeout(onScroll, 500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const smoothUpdate = () => {
      const target = targetScrollFractionRef.current;
      let cur = currentScrollFractionRef.current;
      cur += (target - cur) * 0.05;
      if (Math.abs(target - cur) < 0.0005) cur = target;
      currentScrollFractionRef.current = cur;
      setProgress(cur);

      let v1Target = 0;
      let v2Target = 0;
      if (cur <= 0.4) {
        v1Target = cur / 0.4;
        v2Target = 0;
      } else if (cur < 0.5) {
        v1Target = 1;
        v2Target = 0;
      } else if (cur <= 0.9) {
        v1Target = 1;
        v2Target = (cur - 0.5) / 0.4;
      } else {
        v1Target = 1;
        v2Target = 1;
      }
      targetVideoRatioRef.current = v1Target;
      targetVideoSecondRatioRef.current = v2Target;

      const v1 = video1Ref.current;
      if (v1 && v1.duration) {
        const targetTime = targetVideoRatioRef.current * v1.duration;
        currentVideoTimeRef.current += (targetTime - currentVideoTimeRef.current) * 0.08;
        if (!v1.seeking) v1.currentTime = currentVideoTimeRef.current;
      }
      const v2 = video2Ref.current;
      if (v2 && v2.duration) {
        const targetTime = targetVideoSecondRatioRef.current * v2.duration;
        currentVideoSecondTimeRef.current += (targetTime - currentVideoSecondTimeRef.current) * 0.08;
        if (!v2.seeking) v2.currentTime = currentVideoSecondTimeRef.current;
      }

      rafRef.current = requestAnimationFrame(smoothUpdate);
    };
    rafRef.current = requestAnimationFrame(smoothUpdate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const isSecondCard = progress >= 0.9;
  const isPanelOpen = (progress >= 0.4 && progress < 0.5) || progress >= 0.9;

  const product = isSecondCard
    ? {
        category: "Atelier Core Edition",
        title: "Sterling Silver Sculpture Ring",
        description:
          "Hand-forged from a single ingot of sterling silver, its organic surface catches light like carved stone — no two casts are ever identical.",
        price: 1350,
        image: RING_2_IMG,
      }
    : {
        category: "Aura Fine Earrings",
        title: "18K White Gold & Pink Sapphire",
        description:
          "A drop-stud silhouette in 18K white gold, each set with a hand-selected pink sapphire for a quiet, wearable glow.",
        price: 1850,
        image: EARRINGS_IMG,
      };

  useEffect(() => {
    setQuantity(1);
  }, [product.title]);

  const scrollToFraction = (fraction: number) => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    window.scrollTo({ top: max * fraction, behavior: "smooth" });
  };

  const goBack = () => scrollToFraction(isSecondCard ? 0.82 : 0.35);
  const goToEnd = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const editorialStyle: CSSProperties = {
    pointerEvents: progress > 0.45 ? "none" : "auto",
    visibility: progress >= 0.45 ? "hidden" : "visible",
  };

  return (
    <div
      ref={containerRef}
      className="h-[650vh] bg-[#020202] overflow-x-hidden antialiased font-sans text-white"
    >
      {/* Fixed background video stage */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Live fallback wash — sits under the two videos so the page still
            reads as a designed luxury scene even before/if a clip fails to
            load; once a real video frame paints, it opaquely covers this. */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: progress < 0.48 ? 1 : 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(251,255,141,0.10), transparent 60%), radial-gradient(ellipse 120% 90% at 50% 100%, rgba(120,90,30,0.22), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: progress >= 0.48 ? 1 : 0,
            background:
              "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(255,255,255,0.06), transparent 65%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(20,20,26,0.5), transparent 70%)",
          }}
        />
        <video
          ref={video1Ref}
          src={VIDEO_1}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: progress < 0.48 ? 0.85 : 0 }}
        />
        <video
          ref={video2Ref}
          src={VIDEO_2}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: progress >= 0.48 ? 0.85 : 0 }}
        />
        <canvas style={{ display: "none" }} />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-black/40 to-transparent lg:block" />
      </div>

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-50 pointer-events-none transition-all duration-75"
        style={{ width: `${progress * 100}%`, backgroundColor: ACCENT }}
      />

      {/* Editorial overlay */}
      <div className="fixed inset-0 z-10 flex flex-col justify-between p-6 md:p-10 lg:p-12" style={editorialStyle}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-10">
            <div style={getStaggerStyle(progress, 0.0, 0.12)} className="flex items-center gap-3">
              <BrandCrest />
              <span className="font-serif text-lg tracking-[0.08em] text-white/90">AURUM</span>
            </div>
            <div style={getStaggerStyle(progress, 0.06, 0.18)}>
              <h3 className="text-[12px] md:text-[13px] font-semibold tracking-[-0.03em] leading-snug">
                Contemporary Luxury For The
                <br />
                Discerning Minimalist
              </h3>
              <p className="mt-2 max-w-[260px] text-[11px] leading-relaxed text-white/50">
                Exclusive creations tailored for true aesthetes. We forge more than simple ornaments; we
                build tactile artifacts of your personal legacy.
              </p>
            </div>
          </div>

          <div
            style={getStaggerStyle(progress, 0.03, 0.15)}
            className="hidden items-center gap-5 text-[13px] text-white/70 md:flex md:gap-8"
          >
            {["Collections", "Atelier", "Our story", "Contact"].map(link => (
              <a
                key={link}
                href="#"
                className="relative transition-transform hover:scale-105 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            ))}
            <span className="h-4 w-px bg-white/20" />
            <button type="button" aria-label="Account" className="hover:text-white">
              <User size={16} />
            </button>
            <button
              type="button"
              onClick={goToEnd}
              aria-label="Open bag"
              className="relative hover:text-white"
            >
              <ShoppingBag size={17} />
              <span
                className="absolute -right-1 -top-1 h-[6.5px] w-[6.5px] animate-pulse rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1
              id="sculpted-title"
              className="font-serif uppercase leading-[0.88]"
              style={{ color: ACCENT, fontSize: "clamp(2.5rem, 5.6vw, 7.5rem)" }}
            >
              <div style={getStaggerStyle(progress, 0.09, 0.2)}>
                &nbsp;&nbsp;&nbsp;&nbsp;<em className="italic">SCULPTED</em>
              </div>
              <div style={getStaggerStyle(progress, 0.12, 0.23)}>BY TIME. WORN</div>
              <div style={getStaggerStyle(progress, 0.15, 0.26)}>
                BY <em className="italic">YOU</em>
              </div>
            </h1>
            <div className="mt-8 flex flex-col gap-4">
              <p style={getStaggerStyle(progress, 0.18, 0.29)} className="max-w-[260px] text-[11px] leading-relaxed text-white/50">
                We craft modern jewelry that speaks volumes through silence — every curve considered,
                every surface deliberate, nothing left to chance.
              </p>
              <p style={getStaggerStyle(progress, 0.21, 0.32)} className="max-w-[260px] text-[11px] leading-relaxed text-white/50">
                Every piece acts as a personal manifesto, worn quietly by those who need no validation
                but their own.
              </p>
            </div>
          </div>

          <div style={getStaggerStyle(progress, 0.14, 0.25)} className="lg:col-span-5 lg:max-w-[240px] lg:justify-self-end">
            <div style={getStaggerStyle(progress, 0.18, 0.29)}>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">Abyssal Silver Ring</span>
              <h2 className="mt-1 font-serif text-2xl">18K White Gold &amp; Rough Onyx</h2>
              <p className="mt-2 text-[10.5px] leading-relaxed text-white/45">
                A single rough-cut onyx set in hand-polished white gold, left deliberately unrefined to
                let the stone speak first.
              </p>
            </div>
            <div
              id="product-image-card"
              className="group relative mt-5 aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.03] transition-transform duration-500 hover:scale-[1.04]"
            >
              <img
                src={RING_HERO}
                alt=""
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-center font-serif text-xl text-white transition-colors group-hover:text-[color:var(--accent)]" style={{ ["--accent" as string]: ACCENT }}>
              $1,850
            </p>
          </div>
        </div>
      </div>

      {/* Slide-in product panel */}
      <div
        className="fixed top-0 left-0 z-30 h-full w-full overflow-y-auto bg-[#FAF9F5] text-[#121212] sm:w-[600px] lg:w-[648px]"
        style={{
          transform: isPanelOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 1100ms cubic-bezier(0.16,1,0.3,1)",
          boxShadow: "12px 0 45px rgba(0,0,0,0.22)",
        }}
      >
        <div className="flex min-h-full flex-col p-8 md:p-12">
          <button
            type="button"
            onClick={goBack}
            className="flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#73716C] hover:text-[#121212]"
          >
            <ArrowLeft size={14} />
            Back to series
          </button>

          <div className="mt-16 flex flex-1 flex-col items-center text-center">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#8E8B84]">{product.category}</span>
            <h2 className="mt-3 font-serif text-4xl">{product.title}</h2>
            <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-[#73716C]">{product.description}</p>
            <img src={product.image} alt={product.title} className="mt-10 max-w-[460px] rounded-2xl object-cover" />
          </div>

          <div className="-mx-8 md:-mx-12 mt-12 border-t border-[#E5E5E2] px-8 py-6 md:px-12">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
              <button
                type="button"
                className="h-[50px] w-full rounded-full bg-black text-[12px] font-semibold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-85 sm:w-auto sm:px-10"
              >
                Add to atelier bag
              </button>
              <div className="flex items-center gap-4 rounded-full bg-[#E5E5E2] px-4 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="text-[#121212] hover:opacity-60"
                >
                  <Minus size={14} />
                </button>
                <span className="w-4 text-center text-[13px]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                  className="text-[#121212] hover:opacity-60"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="font-serif text-3xl">${product.price * quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
