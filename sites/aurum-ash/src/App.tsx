import { useEffect, useRef, useState, useCallback } from 'react'
import { ArrowLeft, ShoppingBag, User } from 'lucide-react'
import Lenis from 'lenis'

function useLenis() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.0, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    ;(window as unknown as { __lenis: Lenis }).__lenis = lenis
    let raf = 0
    function tick(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
}

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const VIDEO_1 = 'assets/video/v1.mp4'
const VIDEO_2 = 'assets/video/v2.mp4'
const IMG_RING = 'https://res.cloudinary.com/dbfd996z4/image/upload/q_auto/f_auto/v1781009782/rng_awymkj.png'
const IMG_EARRINGS = 'https://res.cloudinary.com/dbfd996z4/image/upload/q_auto/f_auto/v1781017114/202606091756_msbh8b.jpg'
const IMG_RING2 = 'https://res.cloudinary.com/dbfd996z4/image/upload/q_auto/f_auto/v1781019866/2606091843_kfonxp.jpg'

// ─── Stagger helper ───────────────────────────────────────────────────────────
function getStaggerStyle(progress: number, start: number, end: number): React.CSSProperties {
  const ratio = Math.max(0, Math.min(1, (progress - start) / (end - start)))
  return {
    opacity: 1 - ratio,
    transform: `translateY(${-75 * ratio}px)`,
    filter: `blur(${ratio * 16}px)`,
    willChange: 'opacity, transform, filter',
    transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1), filter 0.35s cubic-bezier(0.16,1,0.3,1)',
    pointerEvents: ratio > 0.85 ? 'none' : 'auto',
  } as React.CSSProperties
}

// ─── Brand crest SVG ─────────────────────────────────────────────────────────
function BrandCrest() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central circle */}
      <circle cx="24" cy="24" r="3" fill="white" />
      {/* Petal 1 — top */}
      <path d="M24 24 C22 18, 22 10, 24 8 C26 10, 26 18, 24 24Z" fill="white" opacity="0.9" />
      {/* Petal 2 — upper right */}
      <path d="M24 24 C29.5 20.5, 36.5 18, 38 20 C37 22.5, 30 23, 24 24Z" fill="white" opacity="0.9" />
      {/* Petal 3 — lower right */}
      <path d="M24 24 C30 28.5, 34 35, 32.5 37 C30 37.5, 26 31.5, 24 24Z" fill="white" opacity="0.9" />
      {/* Petal 4 — lower left */}
      <path d="M24 24 C18 29, 13.5 34.5, 15.5 37 C18 37.5, 22 31, 24 24Z" fill="white" opacity="0.9" />
      {/* Petal 5 — upper left */}
      <path d="M24 24 C18.5 20.5, 11 18, 10 20 C11 22.5, 18 23.5, 24 24Z" fill="white" opacity="0.9" />
    </svg>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  useLenis()
  const [progress, setProgress] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Refs for animation values
  const targetScrollFractionRef = useRef(0)
  const currentScrollFractionRef = useRef(0)
  const targetVideoRatioRef = useRef(0)
  const currentVideoTimeRef = useRef(0)
  const targetVideoSecondRatioRef = useRef(0)
  const currentVideoSecondTimeRef = useRef(0)
  const targetFrameRef = useRef(1)
  const currentFrameRef = useRef(1)
  const totalFrames = 480

  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  const prevProductTitle = useRef('')

  // Compute derived values from progress
  const isSecondCard = progress >= 0.90
  const sheetOpen = (progress >= 0.40 && progress < 0.50) || progress >= 0.90

  const productTitle = isSecondCard ? 'Atelier Core Edition' : 'Aura Fine Earrings'
  const productSubtitle = isSecondCard ? 'Sterling Silver Sculpture Ring' : '18K White Gold & Pink Sapphire'
  const productPrice = isSecondCard ? 1350 : 1850
  const productImg = isSecondCard ? IMG_RING2 : IMG_EARRINGS

  // Reset quantity when product changes
  useEffect(() => {
    if (prevProductTitle.current !== productTitle) {
      setQuantity(1)
      prevProductTitle.current = productTitle
    }
  }, [productTitle])

  // Video opacity
  const video1Opacity = progress < 0.48 ? 0.85 : 0
  const video2Opacity = progress < 0.48 ? 0 : 0.85

  // rAF loop
  const smoothUpdate = useCallback(() => {
    // 1. Lerp scroll fraction
    const target = targetScrollFractionRef.current
    let current = currentScrollFractionRef.current
    const diff = target - current
    if (Math.abs(diff) < 0.0001) {
      current = target
    } else {
      current += diff * 0.05
    }
    currentScrollFractionRef.current = current
    setProgress(current)

    const p = current

    // 2. Phase map
    let video1Ratio = 0
    let video2Ratio = 0
    let frameTarget = 1

    if (p <= 0.40) {
      const ratio = p / 0.40
      video1Ratio = ratio
      video2Ratio = 0
      frameTarget = 1 + ratio * 239
    } else if (p <= 0.50) {
      video1Ratio = 1.0
      video2Ratio = 0
      frameTarget = 240
    } else if (p <= 0.90) {
      const ratio = (p - 0.50) / 0.40
      video1Ratio = 1.0
      video2Ratio = ratio
      frameTarget = 241 + ratio * 239
    } else {
      video1Ratio = 1.0
      video2Ratio = 1.0
      frameTarget = 480
    }

    targetVideoRatioRef.current = video1Ratio
    targetVideoSecondRatioRef.current = video2Ratio
    targetFrameRef.current = Math.max(1, Math.min(totalFrames, frameTarget))

    // 3. Scrub video 1
    const v1 = video1Ref.current
    if (v1 && v1.duration && !isNaN(v1.duration)) {
      const targetTime = video1Ratio * v1.duration
      let currentTime = currentVideoTimeRef.current
      currentTime += (targetTime - currentTime) * 0.08
      currentVideoTimeRef.current = currentTime
      if (!v1.seeking) {
        v1.currentTime = currentTime
      }
    }

    // 4. Scrub video 2
    const v2 = video2Ref.current
    if (v2 && v2.duration && !isNaN(v2.duration)) {
      const targetTime2 = video2Ratio * v2.duration
      let currentTime2 = currentVideoSecondTimeRef.current
      currentTime2 += (targetTime2 - currentTime2) * 0.08
      currentVideoSecondTimeRef.current = currentTime2
      if (!v2.seeking) {
        v2.currentTime = currentTime2
      }
    }

    // 5. Lerp frame
    let cf = currentFrameRef.current
    cf += (targetFrameRef.current - cf) * 0.08
    cf = Math.max(1, Math.min(totalFrames, cf))
    currentFrameRef.current = cf

    rafRef.current = requestAnimationFrame(smoothUpdate)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      const fraction = scrollHeight > 0 ? Math.max(0, Math.min(1, scrollTop / scrollHeight)) : 0
      targetScrollFractionRef.current = fraction
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    const t = setTimeout(handleScroll, 500)

    rafRef.current = requestAnimationFrame(smoothUpdate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(t)
      cancelAnimationFrame(rafRef.current)
    }
  }, [smoothUpdate])

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const scrollToPercent = (pct: number) => {
    const el = document.documentElement
    const scrollHeight = el.scrollHeight - el.clientHeight
    window.scrollTo({ top: scrollHeight * pct, behavior: 'smooth' })
  }

  const overlayHidden = progress >= 0.45
  const overlayPointerEvents = progress > 0.45 ? 'none' : 'auto'

  return (
    <div className="h-[650vh] bg-[#020202] overflow-x-hidden antialiased font-sans">
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020202; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(233,255,107,0.4); }
        @media (max-height: 780px) and (min-width: 1024px) {
          #sculpted-title { margin-bottom: 8px !important; }
          #product-image-card { padding: 8px !important; }
        }
      `}</style>

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-50"
        style={{
          width: `${progress * 100}%`,
          background: '#E9FF6B',
          transition: 'width 75ms linear',
          pointerEvents: 'none',
        }}
      />

      {/* Fixed video stage */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        {/* Video 1 */}
        <video
          ref={video1Ref}
          src={VIDEO_1}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: video1Opacity,
            transition: 'opacity 700ms ease-in-out',
          }}
        />
        {/* Video 2 */}
        <video
          ref={video2Ref}
          src={VIDEO_2}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: video2Opacity,
            transition: 'opacity 700ms ease-in-out',
          }}
        />
        {/* Hidden canvas */}
        <canvas style={{ display: 'none' }} />
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-44" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-56" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90), transparent)' }} />
        <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-1/2" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.40), transparent)' }} />
      </div>

      {/* Editorial overlay */}
      <div
        className="fixed inset-0 z-10 flex flex-col justify-between p-6 md:p-10 lg:p-12"
        style={{
          pointerEvents: overlayPointerEvents as React.CSSProperties['pointerEvents'],
          visibility: overlayHidden ? 'hidden' : 'visible',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          {/* Left column */}
          <div className="flex flex-col gap-10">
            {/* Brand crest */}
            <div style={getStaggerStyle(progress, 0.00, 0.12)}>
              <BrandCrest />
            </div>
            {/* Sub-header */}
            <div style={getStaggerStyle(progress, 0.06, 0.18)}>
              <h3 className="text-white font-semibold tracking-[-0.03em] whitespace-pre-line" style={{ fontSize: '13px' }}>
                {'Quiet Luxury For The\nDeliberate Few'}
              </h3>
              <p className="text-white/50 max-w-[260px] mt-2" style={{ fontSize: '11px' }}>
                Made for those who need no announcement. We forge fewer pieces than we could, each one intended to outlast the person who chose it.
              </p>
            </div>
          </div>

          {/* Right nav */}
          <div style={getStaggerStyle(progress, 0.03, 0.15)}>
            <div className="flex items-center gap-5 lg:gap-8" style={{ fontSize: '13px' }}>
              {['Collections', 'Atelier', 'Our story', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/70 relative hover:scale-105 transition-transform duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/70 hover:after:w-full after:transition-all after:duration-300">
                    {link}
                  </span>
                </a>
              ))}
              <span className="text-white/20 select-none">|</span>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <User size={16} />
              </a>
              <button
                onClick={scrollToBottom}
                className="relative text-white/70 hover:text-white transition-colors"
              >
                <ShoppingBag size={16} />
                <span
                  className="absolute -top-1 -right-1 rounded-full animate-pulse"
                  style={{ width: '6.5px', height: '6.5px', background: '#E9FF6B' }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Hero main */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-0">
          {/* Left: headline + manifesto */}
          <div className="lg:col-span-7">
            <div id="sculpted-title" className="mb-6">
              <div
                className="font-serif uppercase text-[#E9FF6B]"
                style={{ lineHeight: '0.84', fontSize: 'clamp(2.5rem, 5.6vw, 7.5rem)' }}
              >
                <div style={getStaggerStyle(progress, 0.09, 0.20)}>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;SHAPED</em>
                </div>
                <div style={getStaggerStyle(progress, 0.12, 0.23)}>
                  BY SILENCE. WORN
                </div>
                <div style={getStaggerStyle(progress, 0.15, 0.26)}>
                  <em>BY YOU</em>
                </div>
              </div>
            </div>
            {/* Manifesto */}
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-white/50 w-[260px]" style={{ fontSize: '11px', ...getStaggerStyle(progress, 0.18, 0.29) }}>
                We make jewelry that argues nothing and settles everything.
              </p>
              <p className="text-white/50 w-[260px]" style={{ fontSize: '11px', ...getStaggerStyle(progress, 0.21, 0.32) }}>
                A piece should read like a decision you already made.
              </p>
            </div>
          </div>

          {/* Right: product caption + card */}
          <div className="lg:col-start-8 lg:col-span-5 flex flex-col items-end max-w-[240px] ml-auto">
            {/* Caption */}
            <div style={getStaggerStyle(progress, 0.14, 0.25)} className="text-right mb-3">
              <p className="text-white/50 uppercase tracking-[0.12em] mb-1" style={{ fontSize: '10px' }}>
                Ash Silver Signet
              </p>
              <h2 className="text-white font-serif" style={{ fontSize: '15px' }}>
                18K White Gold &amp; Raw Onyx
              </h2>
            </div>

            {/* Product card */}
            <div
              id="product-image-card"
              className="group relative w-full aspect-[4/5] border border-white/10 hover:scale-[1.04] transition-transform duration-500 cursor-pointer p-4"
              style={getStaggerStyle(progress, 0.18, 0.29)}
            >
              <img
                src={IMG_RING}
                alt="Ash Silver Signet Ring"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Price */}
            <div
              className="mt-3 font-serif text-white/70 group-hover:text-[#E9FF6B] transition-colors duration-300 text-center w-full"
              style={{ fontSize: '18px', ...getStaggerStyle(progress, 0.20, 0.31) }}
            >
              $1,850
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in product sheet */}
      <div
        className="fixed top-0 left-0 h-full w-full sm:w-[600px] lg:w-[648px] z-30 overflow-y-auto"
        style={{
          background: '#FAF9F5',
          color: '#121212',
          transform: sheetOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1100ms cubic-bezier(0.16,1,0.3,1)',
          boxShadow: '12px 0 45px rgba(0,0,0,0.22)',
        }}
      >
        <div className="p-8 lg:p-12 flex flex-col min-h-full">
          {/* Back button */}
          <button
            onClick={() => scrollToPercent(progress >= 0.90 ? 0.82 : 0.35)}
            className="flex items-center gap-2 text-[#8E8B84] uppercase tracking-[0.16em] text-xs hover:text-[#121212] transition-colors mb-10 self-start"
          >
            <ArrowLeft size={14} />
            Back to Series
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <p className="uppercase tracking-[0.15em] text-[#8E8B84] mb-3" style={{ fontSize: '11px' }}>
              {isSecondCard ? 'Atelier Core Edition' : 'Aura Fine Earrings'}
            </p>
            <h2 className="font-serif text-[#121212] mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              {productSubtitle}
            </h2>
            <p className="text-[#73716C]" style={{ fontSize: '12px', maxWidth: '340px', margin: '0 auto' }}>
              {isSecondCard
                ? 'Forged in sterling silver, this architectural ring distills form to its essential geometry. Each one hand-finished in the atelier.'
                : 'Articulated drops in 18K white gold, set with precision-cut pink sapphires. Engineered to catch light without demanding it.'}
            </p>
          </div>

          {/* Product image */}
          <div className="flex justify-center mb-8">
            <img
              src={productImg}
              alt={productTitle}
              className="max-w-[460px] w-full object-contain"
              style={{ maxHeight: '380px' }}
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Footer */}
          <div
            className="flex items-center gap-4 pt-6 -mx-8 lg:-mx-12 px-8 lg:px-12 border-t border-[#E5E5E2]"
            style={{ borderTop: '1px solid #E5E5E2' }}
          >
            <button
              className="flex-1 h-[50px] bg-[#121212] text-white uppercase tracking-[0.15em] text-xs hover:bg-black transition-colors"
            >
              Add to Atelier Bag
            </button>
            {/* Quantity stepper */}
            <div className="flex items-center gap-3 border border-[#E5E5E2] px-3 h-[50px]">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="text-[#121212] w-6 text-center hover:text-[#8E8B84] transition-colors text-lg leading-none"
              >
                −
              </button>
              <span className="text-[#121212] w-4 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="text-[#121212] w-6 text-center hover:text-[#8E8B84] transition-colors text-lg leading-none"
              >
                +
              </button>
            </div>
            {/* Total price */}
            <div className="font-serif text-[#121212]" style={{ fontSize: '22px' }}>
              ${(productPrice * quantity).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
