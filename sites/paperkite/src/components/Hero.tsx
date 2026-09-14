import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const GUMLET_VIDEO_URL =
  'assets/video/hero.mp4'

const NAV_LINKS = ['Home', 'Work', 'Studio', 'Contact']

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: '70% center' }}
      >
        <source src={GUMLET_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Bottom-left scrim. The paper plate is bright where the lower copy falls, and
          white/60 body text loses against it. A soft gradient beds the text without
          dimming the imagery the hero is selling. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.28) 45%, transparent)' }}
      />

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Paperkite
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right: desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block">
            Start A Project
          </button>
          {/* Mobile hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center text-white active:scale-90 md:hidden"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen
                  ? 'rotate-90 scale-0 opacity-0'
                  : 'rotate-0 scale-100 opacity-100'
              }`}
            >
              <Menu size={22} />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen
                  ? 'rotate-0 scale-100 opacity-100'
                  : '-rotate-90 scale-0 opacity-0'
              }`}
            >
              <X size={22} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'h-screen opacity-100'
            : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all duration-500 delay-100 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-3xl font-medium text-white/90 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
          <button
            className="mt-6 rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105 self-start"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start A Project
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        {/* Top section */}
        <div className="max-w-3xl">
          {/* Badge */}
          <p
            className="mb-4 text-xs text-white/90 sm:mb-6 sm:text-sm"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.2s both' }}
          >
            Identity & Motion Design
          </p>
          {/* Heading */}
          <h1
            className="text-3xl font-medium text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              lineHeight: '1.06',
              letterSpacing: '-0.035em',
              animation: 'fadeSlideUp 0.8s ease 0.4s both',
            }}
          >
            Folding ideas
            <br />
            into objects
            <br />
            people keep.
          </h1>
        </div>

        {/* Bottom section */}
        <div>
          <p
            className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.7s both' }}
          >
            Turning rough intent into work that earns a second look, and then a third.
          </p>
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.9s both' }}
          >
            See The Work
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
