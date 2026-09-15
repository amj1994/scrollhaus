import { useEffect, useRef, useState } from 'react'

// Shared by Templates.tsx and Effects.tsx: a live, non-interactive preview of
// a page rendered at a fixed design size and scaled down to fill whatever
// box it's dropped into. There's no captured asset behind this — the iframe
// itself is the preview, so it's always current and (for /effects entries)
// costs nothing to host since it's a same-origin static file, not a network
// fetch of someone else's page.
export const PREVIEW_DESIGN_W = 1280
export const PREVIEW_DESIGN_H = 800

export function LivePreview({ src, title }: { src: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.28)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      if (w > 0) setScale(w / PREVIEW_DESIGN_W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-neutral-950">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        // Decorative only: the card itself is the click target, not the frame.
        sandbox="allow-scripts allow-same-origin"
        style={{
          width: PREVIEW_DESIGN_W,
          height: PREVIEW_DESIGN_H,
          border: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
