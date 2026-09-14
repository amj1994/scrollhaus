import { useEffect, useRef, useState } from 'react'
import { Facebook, Twitter, Linkedin, BarChart3, Aperture } from 'lucide-react'
import Lenis from 'lenis'
import { useScrollReveal } from './useScrollReveal'

// Smooth scroll — QAndA's and QuoteBanner's parallax effects read
// window.scrollY off native 'scroll' events, which Lenis keeps dispatching
// as it eases, so no downstream changes are needed. window.__lenis is
// exposed for capture/preview scripts, which must drive it directly
// (lenis.scrollTo) rather than a bare window.scrollTo.
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

/* Recreation of a pasted "Digital Archive" art-gallery spec. Rebranded as
   Silent Studios (and the profiled gallery within it as Hollow Light) —
   light touch, text only. Every asset URL, CSS rule, and animation
   constant is the source spec's own. */

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_130946_e6793cc7-6b6f-4035-9852-44290b781ae6.mp4'
const CLOUD_TRANSITION =
  'https://soft-zoom-63098134.figma.site/_assets/v11/b4653ee7c7405b6d07f43fffdc3cbdd84d9dfc70.png'
const SHOWCASE_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_040223_98d314e9-b8b4-4218-bcbd-18ffc38032ac.png&w=1280&q=85'
const DOVE_IMG =
  'https://soft-zoom-63098134.figma.site/_assets/v11/779ed5f1e5b99d3fa582a54133271d32deee567e.png'
const QUOTE_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_042421_41f4fa0b-770c-4545-a416-73a809366e49.png&w=1280&q=85'
const CLOUD_PARALLAX = CLOUD_TRANSITION

const LOGO_PATH =
  'M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z'

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="white" aria-hidden="true">
      <path d={LOGO_PATH} />
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="liquid-glass fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full px-4 py-2.5 sm:top-6 sm:px-10 sm:py-3">
      <div className="flex items-center gap-4 sm:gap-12">
        <a href="#" className="font-inter text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 hover:text-white sm:text-xs sm:tracking-[0.2em]">Gallery</a>
        <a href="#" className="font-inter text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 hover:text-white sm:text-xs sm:tracking-[0.2em]">Talents</a>
        <Logo className="h-5 w-5 transition-transform hover:scale-110 sm:h-7 sm:w-7" />
        <a href="#" className="font-inter text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 hover:text-white sm:text-xs sm:tracking-[0.2em]">Journal</a>
        <a href="#" className="font-inter text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 hover:text-white sm:text-xs sm:tracking-[0.2em]">Story</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="hero-fade-up font-inter text-xs font-medium uppercase tracking-[0.35em] text-white/90 sm:text-sm" style={{ animationDelay: '0.1s' }}>
          Curatorial
        </p>
        <p className="hero-fade-up font-inter text-[10px] font-light uppercase tracking-[0.4em] text-white/70 sm:text-xs" style={{ animationDelay: '0.1s' }}>
          Presents
        </p>
        <h1
          className="hero-fade-up leading-[1.05] tracking-wide drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)]"
          style={{ animationDelay: '0.25s' }}
        >
          <span className="font-arsenica block text-5xl sm:text-6xl md:text-7xl lg:text-[7rem]">SILENT</span>
          <span className="font-inter block text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-[7rem]">STUDIOS</span>
        </h1>
        <p className="hero-fade-up font-arsenica mt-4 max-w-xl text-sm text-white/90 sm:text-base md:text-xl" style={{ animationDelay: '0.4s' }}>
          A tribute to the artists, dreamers, and makers who turned an impossible season into something extraordinary.
        </p>
        <button
          className="liquid-glass hero-fade-up font-inter mt-8 rounded-[50%] px-10 py-5 text-[10px] uppercase tracking-[0.25em] text-white transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.98] sm:px-12 sm:py-6 sm:text-xs"
          style={{ animationDelay: '0.55s' }}
        >
          Enter Gallery
        </button>
      </div>
    </section>
  )
}

function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)
  return (
    <div ref={ref} className="relative -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64">
      <section className="relative min-h-screen w-full overflow-hidden">
        <img src={SHOWCASE_BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative z-10 flex flex-col items-center px-4 py-32 text-center text-white">
          <h2 className="reveal font-arsenica text-4xl tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl lg:text-7xl">
            Hollow Light
          </h2>
          <p
            className="reveal font-arsenica mt-4 text-xl tracking-wide text-white/90 drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)] sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ animationDelay: '0.15s' }}
          >
            gave the world beauty
            <br />
            born from the silence
            <br />
            of empty studios.
          </p>
          <button
            className="reveal font-inter mt-8 rounded-[50%] border border-white/50 bg-transparent px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition-all hover:scale-[1.03] hover:border-white hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] sm:px-12 sm:py-5 sm:text-xs"
            style={{ animationDelay: '0.3s' }}
          >
            View Their Archive
          </button>
        </div>
        <div
          className="absolute bottom-0 left-0 h-48 w-full"
          style={{ background: 'linear-gradient(to top, #410C01, transparent)' }}
        />
      </section>
      <img
        src={DOVE_IMG}
        alt=""
        className="pointer-events-none absolute -bottom-12 right-0 z-20 w-24 sm:w-40 md:w-52 lg:w-64"
      />
    </div>
  )
}

const QA_LEFT = [
  {
    q: 'Welcome Elin. So how did Hollow Light begin its journey?',
    a: "Less than a year into launching the gallery, everything shut down. I had to close our doors, cancel every exhibit, and rethink it all. But I never stopped curating because I was so determined not to let the artists' momentum die. We hit the ground running to build a digital space, and we've been evolving since.",
  },
  {
    q: 'How did you know where to begin?',
    a: "I didn't wait until we had the perfect platform. I saw artists struggling, isolated, uninspired, overwhelmed, and set to the task of creating ways to share their work with the world as quickly as possible.",
  },
  {
    q: 'So what was the first exhibit?',
    a: 'We were one of the first galleries to launch a virtual exhibition after the shutdown. I think our artists were really grateful for that, they saw how hard we worked to honor their craft, and they trusted us while we continued to refine the digital experience.',
  },
]
const QA_RIGHT = [
  {
    q: 'What was the initial reaction?',
    a: 'We had so many people writing and reaching out that the online exhibits and archived works saved them in isolation. The atmosphere was so intimate, and it was really powerful to have people connecting through art, even though we were all in our own rooms, in different cities.',
  },
  {
    q: 'Where did you evolve from there?',
    a: 'The in-person pop-ups have been really special too, recently, now that enough people feel comfortable to gather. We had our first open-air exhibit in the courtyard last month, and I was basically in tears it was so beautiful.',
  },
  {
    q: "Do you find there's a new appreciation for art?",
    a: "There's a feeling of urgency like -- this is our one life, our one chance, we don't have time to be indifferent anymore. We're gonna create like there's no tomorrow, we're gonna create for a better world, we're gonna create to reclaim our voice in this life, and we're gonna create because we deserve to feel beauty and wonder.",
  },
]

function QAndA() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (vh + rect.height)))
      setOffset(progress * 30)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  let delayCounter = 0

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#410C01] px-4 pt-20 sm:px-10 md:px-16 lg:px-28 lg:pt-32"
      style={{ paddingBottom: '50vh' }}
    >
      <h2 className="reveal relative z-20 flex items-baseline justify-center gap-1 font-arsenica text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
        <span>Q</span>
        <span className="text-xl italic text-white/80 sm:text-2xl md:text-3xl lg:text-4xl">&amp;</span>
        <span>A</span>
      </h2>

      <div className="relative z-20 mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-10">
          {QA_LEFT.map((item, i) => {
            delayCounter += 1
            return (
              <div key={i} className="reveal" style={{ animationDelay: `${delayCounter * 0.12}s` }}>
                <p className="font-arsenica text-xs uppercase tracking-wide text-white sm:text-base">{item.q}</p>
                <p className="font-inter mt-3 text-[11px] leading-relaxed text-white/60 sm:text-sm">{item.a}</p>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-10 md:mt-24">
          {QA_RIGHT.map((item, i) => {
            delayCounter += 1
            return (
              <div key={i} className="reveal" style={{ animationDelay: `${delayCounter * 0.12}s` }}>
                <p className="font-arsenica text-xs uppercase tracking-wide text-white sm:text-base">{item.q}</p>
                <p className="font-inter mt-3 text-[11px] leading-relaxed text-white/60 sm:text-sm">{item.a}</p>
              </div>
            )
          })}
        </div>
      </div>

      <img
        src={CLOUD_PARALLAX}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
        style={{ transform: `translateY(${60 - offset}%)` }}
      />
    </section>
  )
}

function QuoteBanner() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (vh + rect.height)))
      setOffset(progress * 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center px-4 lg:items-start lg:justify-start lg:pt-[25vh] lg:px-16"
      style={{ backgroundImage: `url(${QUOTE_BG})` }}
    >
      <p className="reveal-scale font-arsenica max-w-xs text-xl leading-snug text-white sm:max-w-md sm:text-2xl md:max-w-lg md:text-3xl lg:max-w-2xl lg:text-5xl lg:leading-tight">
        &ldquo;Art, resilience, and imagination <span className="font-light italic">matter more than ever.&rdquo;</span>
      </p>
      <img
        src={CLOUD_PARALLAX}
        alt=""
        className="pointer-events-none absolute -bottom-16 left-0 z-10 w-full"
        style={{ transform: `translateY(${-offset}px)` }}
      />
    </section>
  )
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-gradient-to-t from-black/40 to-transparent px-3 py-2.5 sm:px-10 sm:py-4">
      <div className="flex items-center gap-4">
        <a href="#" className="text-white/80 hover:text-white"><Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
        <a href="#" className="text-white/80 hover:text-white"><Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
        <a href="#" className="text-white/80 hover:text-white"><Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
        <a href="#" className="hidden font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 hover:text-white sm:inline">Privacy Notice</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hidden font-inter text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 hover:text-white sm:inline">Terms &amp; Policies</a>
        <a href="#" className="text-white/80 hover:text-white"><BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
        <a href="#" className="text-white/80 hover:text-white"><Aperture className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></a>
      </div>
    </footer>
  )
}

export default function App() {
  useLenis()
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative z-20 -mt-64 sm:-mt-72 md:-mt-80 lg:-mt-96">
        <img src={CLOUD_TRANSITION} className="pointer-events-none w-full" alt="" />
      </div>
      <Showcase />
      <QAndA />
      <QuoteBanner />
      <Footer />
    </div>
  )
}
