// ── Preview playback governor ───────────────────────────────────────────────
// The grid deliberately MOUNTS every card within 1500px of the viewport
// (lib/inview.ts) so that a fast flick never outruns the previews and reads as
// lazy loading. Letting all of those PLAY is a different matter, and it was the
// single biggest cause of stutter on the library page.
//
// Measured on the live site, scrolling the grid:
//   41 previews decoding at once ......... ~11 fps, 155ms p95 frame
//   every <video> deleted from the page ... ~19 fps
//   playback suppressed while scrolling ... ~19 fps
// The third row matching the second is the whole finding: decode — not layout,
// not paint, not the masonry ResizeObserver — was the entire video cost, and
// suppressing it during scroll recovers all of it.
//
// So mounting and playing are decoupled. A card can be mounted, warm and ready
// while staying paused, and only a handful of previews ever actually run:
//   • nothing decodes while the finger is moving, so the browser gets the whole
//     frame budget for the scroll itself
//   • once scrolling settles, only the previews nearest the viewport centre
//     resume, capped at MAX_CONCURRENT
//   • a hovered card always takes a slot, because that is the one the visitor
//     is actually looking at
//
// Everything here is centralised on purpose: one scroll listener and one
// rAF-coalesced reconcile for the entire grid, in the same spirit as the single
// IntersectionObserver in lib/inview.ts and the single ResizeObserver in
// lib/masonry.ts. Per-card scroll handlers would reintroduce the cost this
// module exists to remove.

type Slot = {
  el: HTMLVideoElement
  visible: boolean
  hovered: boolean
}

const slots = new Map<HTMLVideoElement, Slot>()

const reducedMotion =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// How many previews may decode simultaneously once the page is at rest.
// Phones and low-core laptops fall over long before a desktop does, and
// hardwareConcurrency is the only hint available without a benchmark.
const MAX_CONCURRENT = (() => {
  const cores =
    (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 8
  if (cores <= 4) return 2
  if (cores <= 8) return 4
  return 5
})()

// How long after the last scroll event playback is allowed to resume. Long
// enough that a continuous flick never restarts mid-gesture, short enough that
// stopping feels like the previews were always running.
const SETTLE_MS = 140

let scrolling = false
let settleTimer: number | undefined
let reconcileQueued = false

// Work that must not happen mid-gesture. Mounting a <video> is the expensive
// one: element creation, a network request and decoder init, all on the main
// thread. Measured on the live grid, a single scroll pass mounted ~30 previews
// (41 -> 71 elements), which is felt as friction even with decode suppressed.
const settleWaiters = new Set<() => void>()

function safePlay(el: HTMLVideoElement) {
  if (!el.paused) return
  // play() rejects for autoplay-policy reasons and on a torn-down element;
  // neither is actionable here.
  void el.play().catch(() => {})
}

function safePause(el: HTMLVideoElement) {
  if (el.paused) return
  try {
    el.pause()
  } catch {
    /* element already detached */
  }
}

function pauseEverything() {
  for (const slot of slots.values()) safePause(slot.el)
}

function reconcile() {
  reconcileQueued = false

  if (reducedMotion || scrolling || (typeof document !== 'undefined' && document.hidden)) {
    pauseEverything()
    return
  }

  const middle = window.innerHeight / 2

  // Rank the candidates by distance from the viewport centre. A hovered card is
  // forced to the front with a negative distance so it can never lose its slot
  // to something merely closer to the middle.
  const ranked: Array<{ slot: Slot; distance: number }> = []
  for (const slot of slots.values()) {
    if (!slot.visible) {
      safePause(slot.el)
      continue
    }
    const rect = slot.el.getBoundingClientRect()
    const centre = (rect.top + rect.bottom) / 2
    ranked.push({ slot, distance: slot.hovered ? -1 : Math.abs(centre - middle) })
  }
  ranked.sort((a, b) => a.distance - b.distance)

  for (let i = 0; i < ranked.length; i++) {
    if (i < MAX_CONCURRENT) safePlay(ranked[i].slot.el)
    else safePause(ranked[i].slot.el)
  }
}

function schedule() {
  if (reconcileQueued) return
  reconcileQueued = true
  requestAnimationFrame(reconcile)
}

if (typeof window !== 'undefined') {
  window.addEventListener(
    'scroll',
    () => {
      // Cut decode on the FIRST scroll event rather than waiting for a frame —
      // the point is to hand the very next frame to the scroll.
      if (!scrolling) {
        scrolling = true
        pauseEverything()
      }
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(() => {
        scrolling = false
        // Flush deferred mounts first, then re-pick playback slots.
        if (settleWaiters.size) {
          const waiting = Array.from(settleWaiters)
          settleWaiters.clear()
          for (const cb of waiting) cb()
        }
        schedule()
      }, SETTLE_MS)
    },
    { passive: true },
  )

  // A backgrounded tab should not be decoding anything, and coming back should
  // re-pick slots against the current scroll position.
  document.addEventListener('visibilitychange', schedule)
  window.addEventListener('resize', schedule, { passive: true })
}

/** Hand a mounted preview to the governor. Safe to call repeatedly. */
export function register(el: HTMLVideoElement, visible: boolean) {
  const existing = slots.get(el)
  if (existing) existing.visible = visible
  else slots.set(el, { el, visible, hovered: false })
  schedule()
}

/** Called as the card unmounts its <video>. */
export function unregister(el: HTMLVideoElement) {
  safePause(el)
  slots.delete(el)
  schedule()
}

/** Whether this preview is close enough to the viewport to be worth decoding. */
export function setVisible(el: HTMLVideoElement, visible: boolean) {
  const slot = slots.get(el)
  if (!slot || slot.visible === visible) return
  slot.visible = visible
  if (!visible) safePause(el)
  schedule()
}

/** Hover gives a card first claim on a playback slot. */
export function setHovered(el: HTMLVideoElement, hovered: boolean) {
  const slot = slots.get(el)
  if (!slot || slot.hovered === hovered) return
  slot.hovered = hovered
  schedule()
}

/** True while the user is actively scrolling. */
export function isScrolling() {
  return scrolling
}

/** Run `cb` once scrolling settles — or immediately if nothing is moving.
 *  Returns a cancel function so a card that unmounts first can withdraw. */
export function whenSettled(cb: () => void): () => void {
  if (!scrolling) {
    cb()
    return () => {}
  }
  settleWaiters.add(cb)
  return () => settleWaiters.delete(cb)
}

/** Exposed for tests and for the dev overlay. */
export function playbackStats() {
  let playing = 0
  for (const slot of slots.values()) if (!slot.el.paused) playing++
  return { registered: slots.size, playing, max: MAX_CONCURRENT, scrolling }
}
