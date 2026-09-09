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
    // 300px of runway: a card is prepared before it is ever visible, so nothing
    // ever visibly "pops in" while scrolling at a normal speed.
    { rootMargin: '300px 0px', threshold: 0 },
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
