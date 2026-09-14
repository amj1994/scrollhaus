import { lazy, Suspense } from 'react'

const GUMLET_URL =
  'assets/video/aegis-hero.mp4'

const VideoBackground = lazy(() =>
  Promise.resolve({
    default: function VideoBackground() {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          src={GUMLET_URL}
          className="w-full h-full object-cover"
        />
      )
    },
  }),
)

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <VideoBackground />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        {/* Heading */}
        <h1
          className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-foreground mb-2 md:mb-4 uppercase"
          style={{ animationDelay: '0.2s' }}
        >
          AEGIS<span className="text-primary"> OPS</span>
        </h1>

        {/* Subheading */}
        <p
          className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
          style={{ animationDelay: '0.4s' }}
        >
          We deploy security that actually holds.
        </p>

        {/* Description */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8"
          style={{ animationDelay: '0.55s' }}
        >
          Enterprise-grade surveillance stood up in days, not quarters.
          Zero-trust access control across every door and every device.
          Monitoring that escalates to a human the moment it matters —
          engineered properly, not just quickly.
        </p>

        {/* Buttons */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold"
          style={{ animationDelay: '0.7s' }}
        >
          <button className="pointer-events-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]">
            Book a Walkthrough
          </button>
          <button className="pointer-events-auto bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]">
            See Deployments
          </button>
        </div>

        {/* Trust line */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground/60 text-xs font-light mt-4 md:mt-6"
          style={{ animationDelay: '0.85s' }}
        >
          Trusted security partner. Austin, TX. 18 systems deployed.
        </p>
      </div>
    </section>
  )
}
