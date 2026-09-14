import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

// Smooth scroll for the page's own vertical scroll (the marquee animates
// itself via its own rAF loop regardless — this is for the hero/bottom
// section flow around it). window.__lenis is exposed for capture/preview
// scripts, which must drive it directly (lenis.scrollTo) rather than a
// bare window.scrollTo.
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

/* Recreation of a pasted "Bespoke Architecture Studio" spec. Rebranded as
   Plinth — light touch, text only. Logo path, mask SVGs, image URLs, and
   marquee drag/inertia physics are the source spec's own; only copy and
   the brand name changed. Marquee speed nudged 0.8 -> 1.0 px/frame per
   the "scrolling should feel a little faster" standard. */

const LOGO_PATH =
  'M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z'

const IMAGES = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260725_120544_94be5de4-0f4f-494c-bb78-c532290040a6.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260725_120601_5c6e4705-b992-4227-9dff-9b000351c283.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260725_120619_7bc65416-a3d7-4e8c-9929-743f233378fe.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260725_120627_b40a97b0-c5fa-408c-a77e-dc8fa44f8584.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260725_120635_515cde41-2dc6-48ce-a236-088a5bc74ca8.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260725_120645_5a1170c6-145b-477b-abd2-f8620acccd8d.png&w=1920&q=85',
]

const SPEED = 1.0 // px/frame — was 0.8; "a little faster" per the fast-scroll standard

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="#1a1a1a" aria-hidden="true">
      <path d={LOGO_PATH} />
    </svg>
  )
}

const MENU_LINKS = ['Work', 'Index', 'Events', 'Projects']

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-10">
        <Logo className="h-7 w-7" />
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="group absolute left-1/2 flex -translate-x-1/2 flex-col gap-[5px]"
        >
          <span className="h-[1.5px] w-6 rounded-full bg-neutral-900 transition-all duration-300 group-hover:w-5" />
          <span className="h-[1.5px] w-6 rounded-full bg-neutral-900 transition-all duration-300 group-hover:w-5" />
        </button>
        <a
          href="#"
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:inline-block"
        >
          Book a meeting
        </a>
        <div className="w-7 sm:hidden" />
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:right-0 sm:left-auto sm:h-full sm:w-full sm:max-w-sm sm:p-10 ${
          open
            ? 'translate-y-0 opacity-100 sm:translate-x-0'
            : 'translate-y-full opacity-0 sm:translate-x-full sm:translate-y-0'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo className="h-7 w-7" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="relative h-10 w-10 rounded-full hover:bg-neutral-100"
          >
            <span
              className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 rounded-full bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: open ? 'translate(-50%,-50%) rotate(45deg)' : 'translate(-50%,-50%) translateY(-3px)' }}
            />
            <span
              className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 rounded-full bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: open ? 'translate(-50%,-50%) rotate(-45deg)' : 'translate(-50%,-50%) translateY(3px)' }}
            />
          </button>
        </div>

        <nav className="mt-12 flex flex-col">
          {MENU_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={() => setOpen(false)}
              className="py-3 text-3xl font-medium text-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-neutral-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(2rem)',
                transitionDelay: open ? `${150 + i * 60}ms` : '0ms',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="mt-12 w-fit rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-neutral-800"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(1rem)',
            transitionDelay: open ? '400ms' : '0ms',
          }}
        >
          Book a meeting
        </a>
      </div>
    </>
  )
}

function HeroContent() {
  return (
    <section className="px-4 pb-1 pt-24 text-center sm:px-6 sm:pt-28">
      <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-7xl lg:text-[5.5rem]">
        Plinth Architecture
        <br />
        Studio
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-900 sm:mt-6 sm:text-lg md:text-xl">
        The space you imagine has never been built before.
      </p>
    </section>
  )
}

function ImageMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)
  const draggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartOffsetRef = useRef(0)
  const lastXRef = useRef(0)
  const lastTRef = useRef(0)
  const [grabbing, setGrabbing] = useState(false)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      const track = trackRef.current
      if (track) {
        if (!draggingRef.current) {
          if (Math.abs(velocityRef.current) > 0.1) {
            offsetRef.current += velocityRef.current
            velocityRef.current *= 0.95
          } else {
            velocityRef.current = 0
            offsetRef.current -= SPEED
          }
        }
        const halfWidth = track.scrollWidth / 2
        if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth
        if (offsetRef.current > 0) offsetRef.current -= halfWidth
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    velocityRef.current = 0
    ;(e.target as Element).setPointerCapture(e.pointerId)
    dragStartXRef.current = e.clientX
    dragStartOffsetRef.current = offsetRef.current
    lastXRef.current = e.clientX
    lastTRef.current = performance.now()
    setGrabbing(true)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    const now = performance.now()
    const dt = now - lastTRef.current || 16
    const dx = e.clientX - lastXRef.current
    velocityRef.current = (dx / dt) * 16
    offsetRef.current = dragStartOffsetRef.current + (e.clientX - dragStartXRef.current)
    lastXRef.current = e.clientX
    lastTRef.current = now
  }
  const endDrag = () => {
    draggingRef.current = false
    setGrabbing(false)
  }

  return (
    <section className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[80px] sm:h-[100px]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 0H1440V50C1440 50 1200 100 720 100C240 100 0 50 0 50V0Z" fill="white" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[80px] sm:h-[100px]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 100H1440V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white" />
        </svg>
      </div>

      <div
        ref={trackRef}
        className={`flex w-max select-none gap-3 py-4 sm:gap-4 ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ willChange: 'transform' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {[...IMAGES, ...IMAGES].map((src, i) => (
          <div key={i} className="h-80 w-60 flex-shrink-0 overflow-hidden rounded-2xl sm:h-[32rem] sm:w-80">
            <img src={src} alt="" loading="lazy" draggable={false} className="pointer-events-none h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

function BottomSection() {
  return (
    <section className="mx-auto max-w-2xl px-4 pb-12 pt-2 text-center sm:px-6 sm:pb-16">
      <p className="text-base leading-relaxed text-neutral-900 sm:text-lg md:text-xl">
        We design private residences and commercial spaces starting from nothing. No templates, no repeated floorplans, no shortcuts.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-8">
        <a href="#" className="font-semibold text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-900">
          Book a meeting
        </a>
        <a href="#" className="font-semibold text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-900">
          See Projects
        </a>
      </div>
    </section>
  )
}

export default function App() {
  useLenis()
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <HeroContent />
      <ImageMarquee />
      <BottomSection />
    </div>
  )
}
