import { useEffect } from 'react'

// A CSS-grid masonry: the container runs a fine-grained implicit row track,
// and every direct child spans however many of those rows its own rendered
// height needs. Because each card's height is driven by its own aspect
// ratio (see bento.ts) rather than a shared row height, the four columns
// settle at different lengths — that stagger is the whole point, not a bug
// to average out.
//
// Measuring is aimed at .masonry-content, NOT the grid item itself
// (.masonry-item): the grid item's own rendered height IS the row-span we're
// trying to compute, so reading it back is circular — it starts at the
// grid's 1-row minimum and, absent an unclamped child to measure instead,
// would stay locked there forever. .masonry-content is a normal, unclamped
// block child (just width-constrained by the grid column), so it always
// reports its true content height — box aspect-ratio plus the caption below.
//
// One ResizeObserver instance for the entire grid, matching the "one
// IntersectionObserver for the whole grid" discipline in lib/inview.ts —
// observing many targets on a single instance is what ResizeObserver is
// for; the cost is in the instance, not the target count.
export const ROW_UNIT = 8 // px — the grid's implicit row height
export const ROW_GAP = 16 // px — must match the grid's row-gap (gap-4)

export function useMasonry(containerRef: React.RefObject<HTMLElement | null>, deps: unknown[]) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const contents = Array.from(container.querySelectorAll<HTMLElement>(':scope > .masonry-item > .masonry-content'))
    if (contents.length === 0) return

    const apply = (el: HTMLElement, height: number) => {
      const item = el.parentElement as HTMLElement | null
      if (!item) return
      const span = Math.max(1, Math.ceil((height + ROW_GAP) / (ROW_UNIT + ROW_GAP)))
      item.style.gridRowEnd = `span ${span}`
    }

    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement
        const boxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize
        const height = boxSize?.blockSize ?? entry.contentRect.height
        apply(el, height)
      }
    })

    // The synchronous getBoundingClientRect() read below is normally safe (see
    // the file comment), but on a fresh remount of the whole grid — e.g.
    // returning from the detail view, where the grid section unmounts and
    // remounts rather than just being covered — the very first layout pass
    // can land before newly-inserted (even cache-hit) <img> elements have
    // finished contributing their intrinsic size, so this can read a
    // collapsed height and lock every card's row-span at the 1-row minimum.
    // ResizeObserver's own initial callback fires later with the correct
    // settled size, but that alone doesn't help: the *first* apply() call
    // already wrote a stale span, and nothing here re-reads it once it's
    // wrong. A rAF defer for this first pass only (observe() still happens
    // synchronously, so later real resizes are still caught immediately)
    // gives layout one frame to settle before the height is trusted.
    const raf = requestAnimationFrame(() => {
      for (const el of contents) {
        apply(el, el.getBoundingClientRect().height)
      }
    })
    for (const el of contents) {
      ro.observe(el, { box: 'border-box' })
    }

    // Same class of bug as the remount case above, different trigger: switching
    // browser tabs away and back was observed to collapse every card to a thin
    // sliver. ResizeObserver doesn't reliably re-fire just because the tab
    // regained focus — if nothing changed the box's *size* while hidden, there's
    // no resize to report, so a bad measurement taken right at the visibility
    // edge (or inherited from whatever the layout engine had cached for a
    // backgrounded document) can sit there uncorrected indefinitely. Re-running
    // the same rAF-deferred re-measure used on mount whenever the tab becomes
    // visible again costs nothing while hidden (visibilitychange only fires the
    // work on the transition, not on a timer) and self-heals regardless of the
    // exact underlying cause.
    const onVisible = () => {
      if (document.hidden) return
      requestAnimationFrame(() => {
        for (const el of contents) {
          apply(el, el.getBoundingClientRect().height)
        }
      })
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisible)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
