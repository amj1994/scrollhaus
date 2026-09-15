// TWO IntersectionObservers for the whole grid — never one per card.
// A per-card observer costs an observer instance per entry; at a thousand cards
// that alone is enough to make scrolling stutter.
//
// The two radii answer two different questions, and conflating them was a real
// bug: with a single 1500px observer driving both mounting AND playback, ~41
// previews decoded simultaneously and pinned the scroll at ~11 fps.
//
//   observe()        1500px — should this card be MOUNTED and warm?
//                    Generous on purpose: a fast flick must never outrun the
//                    previews, or the grid reads as lazy loading. Mounting a
//                    paused <video> is cheap; the mount/unmount bound is memory
//                    (measured 959 live media elements before the teardown
//                    existed), not frame time.
//
//   observeVisible()  200px — should this card be allowed to DECODE?
//                    Tight on purpose: decode is the expensive part. Actual
//                    play/pause decisions are then arbitrated by lib/playback.ts,
//                    which also caps concurrency and stops everything while the
//                    finger is moving.
type Cb = (inView: boolean) => void

const nearCbs = new WeakMap<Element, Cb>()
const visibleCbs = new WeakMap<Element, Cb>()

let nearIo: IntersectionObserver | null = null
let visibleIo: IntersectionObserver | null = null

function nearObserver() {
  if (nearIo) return nearIo
  nearIo = new IntersectionObserver(
    entries => {
      for (const e of entries) nearCbs.get(e.target)?.(e.isIntersecting)
    },
    { rootMargin: '1500px 0px', threshold: 0 },
  )
  return nearIo
}

function visibleObserver() {
  if (visibleIo) return visibleIo
  visibleIo = new IntersectionObserver(
    entries => {
      for (const e of entries) visibleCbs.get(e.target)?.(e.isIntersecting)
    },
    { rootMargin: '200px 0px', threshold: 0 },
  )
  return visibleIo
}

/** Mount/teardown radius — big, so nothing pops in. */
export function observe(el: Element, cb: Cb) {
  nearCbs.set(el, cb)
  nearObserver().observe(el)
  return () => {
    nearCbs.delete(el)
    nearIo?.unobserve(el)
  }
}

/** Decode radius — tight, because decode is what costs frames. */
export function observeVisible(el: Element, cb: Cb) {
  visibleCbs.set(el, cb)
  visibleObserver().observe(el)
  return () => {
    visibleCbs.delete(el)
    visibleIo?.unobserve(el)
  }
}
