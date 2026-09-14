import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

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

export default function App() {
  useLenis()
  return (
    <div className="bg-hero-bg min-h-screen font-sora antialiased">
      <Navbar />
      <HeroSection />
    </div>
  )
}
