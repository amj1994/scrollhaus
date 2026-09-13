import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// One shared WebGL canvas for the whole page — not per-card. A soft, slow
// particle drift behind the chrome, the same "ONE IntersectionObserver for
// the whole grid" discipline applied to the render loop: one scene, one
// renderer, capped pixel ratio, paused when the tab is hidden or the visitor
// has asked for reduced motion. Never blocks pointer events — it sits behind
// everything, including the header's backdrop-blur, which samples it for a
// bit of depth for free.
export default function AmbientBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, reduced ? 1 : 1.75))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    // Soft round sprite, drawn once onto a canvas — no asset request.
    const spriteCanvas = document.createElement('canvas')
    spriteCanvas.width = 64
    spriteCanvas.height = 64
    const sctx = spriteCanvas.getContext('2d')!
    const grad = sctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.4, 'rgba(255,255,255,0.5)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    sctx.fillStyle = grad
    sctx.fillRect(0, 0, 64, 64)
    const sprite = new THREE.CanvasTexture(spriteCanvas)

    const COUNT = reduced ? 0 : 900
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const speeds = new Float32Array(COUNT)

    const white = new THREE.Color('#ffffff')
    const silver = new THREE.Color('#9fb0c4')
    const gold = new THREE.Color('#ffd98a')

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 42
      positions[i * 3 + 1] = (Math.random() - 0.5) * 26
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4

      const c = Math.random()
      const col = c < 0.08 ? gold : c < 0.5 ? silver : white
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b

      speeds[i] = 0.1 + Math.random() * 0.22
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.32,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let raf = 0
    let visible = !document.hidden
    const clock = new THREE.Clock()

    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    const onPointerMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const animate = () => {
      raf = requestAnimationFrame(animate)
      if (!visible) return

      const t = clock.getElapsedTime()
      const pos = geometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < COUNT; i++) {
        const y = pos.getY(i) + speeds[i] * 0.01
        pos.setY(i, y > 14 ? -14 : y)
      }
      pos.needsUpdate = true

      current.x += (target.x - current.x) * 0.035
      current.y += (target.y - current.y) * 0.035
      camera.position.x = current.x * 2.4
      camera.position.y = -current.y * 1.6
      camera.lookAt(0, 0, 0)

      points.rotation.y = t * 0.02

      renderer.render(scene, camera)
    }

    const onVisibility = () => { visible = !document.hidden }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    if (!reduced) window.addEventListener('pointermove', onPointerMove, { passive: true })

    if (reduced) {
      renderer.render(scene, camera)
    } else {
      animate()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      geometry.dispose()
      material.dispose()
      sprite.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
}
