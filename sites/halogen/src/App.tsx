import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createClip, type Clip } from './frameBank'

const VIDEO_SRC = 'assets/video/halogen-hero.mp4'
const SENSITIVITY = 0.8

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const clipRef = useRef<Clip | null>(null)
  const prevXRef = useRef<number | null>(null)
  const targetTimeRef = useRef(0)
  const isSeeking = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    // video.currentTime seeking has real per-seek decode cost no matter how
    // dense the keyframe interval is — under a fast continuous mouse sweep
    // (many seeks per second) that cost piles up and visibly steps between
    // frames. Decoding every sample once into an in-memory bank and drawing
    // whichever frame is nearest the target is nearly free by comparison.
    // The <video> element stays wired as the fallback if WebCodecs/MP4Box
    // aren't available.
    const onMeta = () => {
      canvas.width = video.videoWidth || 1920
      canvas.height = video.videoHeight || 1080
      const clip = createClip(video, canvas, () => {
        canvas.style.opacity = '1'
        video.style.opacity = '0'
      })
      clipRef.current = clip
      clip.build()
    }
    if (video.readyState >= 1) onMeta()
    else video.addEventListener('loadedmetadata', onMeta, { once: true })

    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }
      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      if (!video.duration || isNaN(video.duration)) return

      const timeShift = (delta / window.innerWidth) * SENSITIVITY * video.duration
      targetTimeRef.current = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeShift))

      const clip = clipRef.current
      if (clip?.ready) {
        clip.render(targetTimeRef.current)
        return
      }
      if (!isSeeking.current) {
        isSeeking.current = true
        video.currentTime = targetTimeRef.current
      }
    }

    const handleSeeked = () => {
      if (clipRef.current?.ready) return
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        video.currentTime = targetTimeRef.current
      } else {
        isSeeking.current = false
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('seeked', handleSeeked)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
      video.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
          transition: 'opacity 0.3s ease',
        }}
      />
      <canvas
        ref={canvasRef}
        className="frame-bank-canvas"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          background: 'rgba(0,0,0,0.45)',
        }}
      />

      {/* UI Layer */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%' }}>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
