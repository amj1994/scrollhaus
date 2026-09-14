// ONE IntersectionObserver for the whole grid.
// A per-card observer costs an observer instance per entry; at a thousand cards
// that alone is enough to make scrolling stutter.
type Cb = (inView: boolean) => void
const cbs = new WeakMap<Element, Cb>()

let io: IntersectionObserver | null = null
function observer() {
  if (io) return io
  io = new IntersectionObserver(
    entries => {
      for (const e of entries) cbs.get(e.target)?.(e.isIntersecting)
    },
    // 1500px of runway each way: previews are re-encoded small now (avg well
    // under 1MB), so a much bigger prep radius is affordable and it's what
    // actually kills visible pop-in — 300px wasn't enough runway at normal
    // scroll speed and a fast flick would outrun it entirely, which read as
    // "lazy loading" even though the mount/unmount is really a memory bound,
    // not a deliberate defer.
    { rootMargin: '1500px 0px', threshold: 0 },
  )
  return io
}

export function observe(el: Element, cb: Cb) {
  cbs.set(el, cb)
  observer().observe(el)
  return () => {
    cbs.delete(el)
    io?.unobserve(el)
  }
}
