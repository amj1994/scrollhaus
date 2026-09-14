import { motion } from 'framer-motion'
import ContactButton from './ContactButton'
import Magnet from './Magnet'

const PORTRAIT_URL =
  'https://hanbitkorea.gumlet.io/fetch/https://pub.hyperagent.com/api/published/pbf01M2GT5MFB_ZM7SXWFBASFDCZA5/portrait.png?w=1000&format=webp'

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact']

function fadeProps(delay: number, y = 0, x = 0) {
  return {
    initial: { opacity: 0, y, x },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: { delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  }
}

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <motion.nav
        {...fadeProps(0, -20)}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#D7E2EA', textDecoration: 'none' }}
          >
            {link}
          </a>
        ))}
      </motion.nav>

      {/* Heading */}
      <div className="overflow-hidden">
        <motion.h1
          {...fadeProps(0.15, 40)}
          className="hero-heading font-black uppercase leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw] mt-6 sm:mt-4 md:-mt-5"
          style={{ trackingAdjust: 'none', letterSpacing: '-0.03em' }}
        >
          Hey, i&apos;m rune
        </motion.h1>
      </div>

      {/* Portrait — centred absolutely */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <motion.img
          {...fadeProps(0.6, 30)}
          src={PORTRAIT_URL}
          alt="Rune — 3D Creator"
          className="w-full h-auto"
          style={{ display: 'block' }}
        />
      </Magnet>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
        {/* Left paragraph */}
        <motion.p
          {...fadeProps(0.35, 20)}
          style={{
            color: '#D7E2EA',
            fontWeight: 300,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            lineHeight: 1.35,
            fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
            maxWidth: 'min(160px, 28vw)',
          }}
          className="sm:max-w-[220px] md:max-w-[260px]"
        >
          a 3d creator building work that lands hard and lingers longer
        </motion.p>

        {/* Contact button */}
        <motion.div {...fadeProps(0.5, 20)}>
          <ContactButton />
        </motion.div>
      </div>
    </section>
  )
}
