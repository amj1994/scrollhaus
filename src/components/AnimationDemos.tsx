import { useEffect, useRef, useState } from 'react'

// One real, working, hand-built interactive demo per animation category — not copied
// from TypeUI, not a screenshot. Each demo is self-contained (own local state) and
// represents the category, not any single one of the many named animations filed
// under it. Kept intentionally small: pure Tailwind + a few custom keyframes, no
// external animation library.

const box = 'relative flex h-full min-h-[180px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#0d0d0d] ring-1 ring-white/10'
const ORANGE = 'rgba(232,116,42,1)'

function Buttons() {
  return (
    <div className={box}>
      <button className="group/btn relative overflow-hidden rounded-md bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-transform active:scale-95">
        <span className="relative z-10">Hover me</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
      </button>
    </div>
  )
}

function Inputs() {
  const [focused, setFocused] = useState(false)
  return (
    <div className={box}>
      <div className="w-48">
        <label className={`block text-[10px] uppercase tracking-[0.1em] transition-colors ${focused ? 'text-[rgba(232,116,42,1)]' : 'text-white/40'}`}>Website</label>
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="yoursite.com"
          className="mt-1 w-full border-0 border-b bg-transparent pb-1.5 text-[13px] text-white placeholder:text-white/25 outline-none transition-colors"
          style={{ borderColor: focused ? ORANGE : 'rgba(255,255,255,0.15)' }}
        />
        <div className="mt-0.5 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300" style={{ background: ORANGE, transform: focused ? 'scaleX(1)' : undefined }} />
      </div>
    </div>
  )
}

function Typing() {
  const words = ['Build faster.', 'Ship sooner.', 'Type here…']
  const [text, setText] = useState('')
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false
    const id = setInterval(() => {
      const word = words[wi]
      if (!deleting) {
        ci++
        setText(word.slice(0, ci))
        if (ci === word.length) { deleting = true; return }
      } else {
        ci--
        setText(word.slice(0, ci))
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length }
      }
    }, 90)
    return () => clearInterval(id)
  }, [])
  return (
    <div className={box}>
      <div className="w-48 rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-[13px] text-white">
        {text}<span className="animate-pulse">|</span>
      </div>
    </div>
  )
}

function SelectionControls() {
  const [checked, setChecked] = useState(true)
  const [on, setOn] = useState(false)
  return (
    <div className={box}>
      <div className="flex items-center gap-6">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          onClick={() => setChecked(v => !v)}
          className="flex h-5 w-5 items-center justify-center rounded border transition-colors"
          style={{ background: checked ? ORANGE : 'transparent', borderColor: checked ? ORANGE : 'rgba(255,255,255,0.3)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ opacity: checked ? 1 : 0, transform: checked ? 'scale(1)' : 'scale(0.5)', transition: 'all .2s' }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          onClick={() => setOn(v => !v)}
          className="relative h-6 w-11 rounded-full transition-colors"
          style={{ background: on ? ORANGE : 'rgba(255,255,255,0.15)' }}
        >
          <span className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform" style={{ transform: `translateX(${on ? 22 : 2}px)` }} />
        </button>
      </div>
    </div>
  )
}

function Dropdowns() {
  const [open, setOpen] = useState(false)
  return (
    <div className={box}>
      <div className="relative">
        <button type="button" onClick={() => setOpen(v => !v)} className="flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white">
          Sort by
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform .25s' }}><polyline points="6 9 12 15 18 9" /></svg>
        </button>
        <div
          className="absolute left-0 top-full z-10 mt-1.5 w-32 origin-top rounded-md border border-white/10 bg-[#151515] py-1 shadow-xl transition-all duration-200"
          style={{ opacity: open ? 1 : 0, transform: open ? 'scaleY(1)' : 'scaleY(0.85)', pointerEvents: open ? 'auto' : 'none' }}
        >
          {['Newest', 'Popular', 'Price'].map(o => <div key={o} className="px-3 py-1.5 text-[12px] text-white/70 hover:bg-white/5 hover:text-white">{o}</div>)}
        </div>
      </div>
    </div>
  )
}

function Tooltips() {
  const [show, setShow] = useState(false)
  return (
    <div className={box}>
      <div className="relative">
        <button
          onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
          onFocus={() => setShow(true)} onBlur={() => setShow(false)}
          className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white"
        >
          Hover for info
        </button>
        <div
          className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-black transition-all duration-200"
          style={{ opacity: show ? 1 : 0, transform: `translate(-50%, ${show ? '0' : '4px'})` }}
        >
          Extra context here
        </div>
      </div>
    </div>
  )
}

function Toasts() {
  const [visible, setVisible] = useState(false)
  const fire = () => {
    setVisible(true)
    window.setTimeout(() => setVisible(false), 1800)
  }
  return (
    <div className={box}>
      <button onClick={fire} className="rounded-md bg-white px-4 py-2 text-[12px] font-semibold text-black">Trigger toast</button>
      <div
        className="absolute left-1/2 top-3 -translate-x-1/2 rounded-md border border-white/10 bg-[#151515] px-3 py-1.5 text-[11px] text-white shadow-xl transition-all duration-300"
        style={{ opacity: visible ? 1 : 0, transform: `translate(-50%, ${visible ? '0' : '-10px'})` }}
      >
        ✓ Saved successfully
      </div>
    </div>
  )
}

function Numbers() {
  const [n, setN] = useState(0)
  const play = () => {
    setN(0)
    const target = 2847, start = performance.now(), dur = 1100
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  useEffect(() => { play() }, [])
  return (
    <div className={box} onMouseEnter={play}>
      <div className="text-center">
        <div className="text-[32px] font-bold tabular-nums text-white">{n.toLocaleString()}</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/40">Active users</div>
      </div>
    </div>
  )
}

function Drawers() {
  const [open, setOpen] = useState(false)
  return (
    <div className={box}>
      <button type="button" onClick={() => setOpen(v => !v)} className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white">
        {open ? 'Close' : 'Open'} drawer
      </button>
      <div
        className="absolute inset-y-0 right-0 w-32 border-l border-white/10 bg-[#151515] p-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(${open ? '0' : '100%'})` }}
      >
        <div className="text-[11px] font-semibold text-white">Filters</div>
        <div className="mt-2 h-2 w-full rounded bg-white/10" />
        <div className="mt-1.5 h-2 w-3/4 rounded bg-white/10" />
      </div>
    </div>
  )
}

function Tabs() {
  const items = ['Overview', 'Pricing', 'FAQ']
  const [active, setActive] = useState(0)
  return (
    <div className={box}>
      <div className="relative flex gap-4 border-b border-white/10 px-2">
        {items.map((it, i) => (
          <button key={it} onClick={() => setActive(i)} className={`relative pb-2.5 text-[12px] font-medium transition-colors ${active === i ? 'text-white' : 'text-white/40'}`}>
            {it}
            {active === i && <span className="absolute -bottom-px left-0 right-0 h-[2px] transition-all" style={{ background: ORANGE }} />}
          </button>
        ))}
      </div>
    </div>
  )
}

function GridReveal() {
  const [hover, setHover] = useState(false)
  return (
    <div className={box} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-6 rounded transition-all"
            style={{
              background: 'rgba(255,255,255,0.08)',
              opacity: hover ? 1 : 0,
              transform: hover ? 'scale(1)' : 'scale(0.6)',
              transitionDelay: `${(i % 3) * 40 + Math.floor(i / 3) * 40}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function NavigationIndicator() {
  const items = ['Home', 'Docs', 'Pricing']
  const [hovered, setHovered] = useState(0)
  return (
    <div className={box}>
      <div className="relative flex gap-5">
        {items.map((it, i) => (
          <span
            key={it}
            onMouseEnter={() => setHovered(i)}
            className="relative cursor-pointer pb-2 text-[12px] text-white/70 transition-colors hover:text-white"
          >
            {it}
            {hovered === i && <span className="absolute -bottom-px left-0 right-0 h-[2px] transition-all duration-300" style={{ background: ORANGE }} />}
          </span>
        ))}
      </div>
    </div>
  )
}

function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className={box}>
      <button type="button" onClick={() => setOpen(v => !v)} className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px]">
        <span className="block h-[2px] w-5 bg-white transition-all duration-300" style={{ transform: open ? 'translateY(7px) rotate(45deg)' : undefined }} />
        <span className="block h-[2px] w-5 bg-white transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
        <span className="block h-[2px] w-5 bg-white transition-all duration-300" style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
      </button>
    </div>
  )
}

function HideOnScroll() {
  const [hidden, setHidden] = useState(false)
  return (
    <div className={box}>
      <div className="relative h-24 w-56 overflow-hidden rounded-md border border-white/10">
        <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-[#151515] px-2.5 py-1.5 transition-transform duration-300" style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}>
          <span className="text-[10px] text-white/60">Toolbar</span>
        </div>
        <div className="flex h-full flex-col justify-end gap-1 p-2.5 text-[10px] text-white/30">
          <div className="h-1.5 w-full rounded bg-white/5" />
          <div className="h-1.5 w-4/5 rounded bg-white/5" />
        </div>
      </div>
      <button onClick={() => setHidden(v => !v)} className="absolute bottom-2.5 right-2.5 rounded border border-white/15 px-2 py-1 text-[10px] text-white/70">
        {hidden ? 'Scroll up' : 'Scroll down'}
      </button>
    </div>
  )
}

function Carousels() {
  const [i, setI] = useState(0)
  const colors = ['#2a2a2a', '#332211', '#1a2a22']
  return (
    <div className={box}>
      <div className="relative h-24 w-48 overflow-hidden rounded-md">
        <div className="flex h-full transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: `translateX(-${i * 100}%)` }}>
          {colors.map((c, idx) => <div key={idx} className="h-full w-48 shrink-0" style={{ background: c }} />)}
        </div>
        <button onClick={() => setI(v => (v + 2) % 3)} className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg></button>
        <button onClick={() => setI(v => (v + 1) % 3)} className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg></button>
        <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1">
          {colors.map((_, idx) => <span key={idx} className="h-1 w-1 rounded-full" style={{ background: idx === i ? ORANGE : 'rgba(255,255,255,0.3)' }} />)}
        </div>
      </div>
    </div>
  )
}

function Modals() {
  const [open, setOpen] = useState(false)
  return (
    <div className={box}>
      <button onClick={() => setOpen(true)} className="rounded-md bg-white px-4 py-2 text-[12px] font-semibold text-black">Open modal</button>
      <div className="absolute inset-0 transition-opacity duration-200" style={{ background: 'rgba(0,0,0,0.6)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }} onClick={() => setOpen(false)} />
      <div
        className="absolute left-1/2 top-1/2 w-40 rounded-lg border border-white/10 bg-[#151515] p-3 text-center shadow-2xl transition-all duration-200"
        style={{ transform: `translate(-50%, -50%) scale(${open ? 1 : 0.9})`, opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        <div className="text-[12px] font-semibold text-white">Confirm action</div>
        <button onClick={() => setOpen(false)} className="mt-2.5 w-full rounded bg-white/10 py-1 text-[11px] text-white">Close</button>
      </div>
    </div>
  )
}

function ProgressBars() {
  const [pct, setPct] = useState(0)
  const play = () => {
    setPct(0)
    window.setTimeout(() => setPct(78), 50)
  }
  useEffect(() => { play() }, [])
  return (
    <div className={box} onMouseEnter={play}>
      <div className="w-48">
        <div className="mb-1.5 flex justify-between text-[10px] text-white/40"><span>Uploading</span><span>{pct}%</span></div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full transition-all duration-[1100ms] ease-out" style={{ width: `${pct}%`, background: ORANGE }} />
        </div>
      </div>
    </div>
  )
}

function Charts() {
  const [hover, setHover] = useState(false)
  const heights = [40, 65, 30, 80, 55, 90, 45]
  return (
    <div className={box} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="flex h-16 items-end gap-1.5">
        {heights.map((h, i) => (
          <div key={i} className="w-3 rounded-t transition-all duration-500" style={{ height: hover ? `${h}%` : '6%', background: ORANGE, transitionDelay: `${i * 40}ms` }} />
        ))}
      </div>
    </div>
  )
}

function ListItems() {
  const [selected, setSelected] = useState(1)
  const items = ['Inbox', 'Starred', 'Archive']
  return (
    <div className={box}>
      <div className="w-36">
        {items.map((it, i) => (
          <button
            key={it} onClick={() => setSelected(i)}
            className="relative flex w-full items-center rounded-md px-2.5 py-1.5 text-left text-[12px] transition-colors"
            style={{ background: selected === i ? 'rgba(232,116,42,0.14)' : 'transparent', color: selected === i ? '#fff' : 'rgba(255,255,255,0.55)' }}
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full transition-transform" style={{ background: ORANGE, transform: selected === i ? 'scale(1)' : 'scale(0)' }} />
            {it}
          </button>
        ))}
      </div>
    </div>
  )
}

function Cards() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  return (
    <div className={box}>
      <div
        ref={ref}
        onMouseMove={e => {
          const r = ref.current!.getBoundingClientRect()
          setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 10 })
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-xl transition-transform duration-150"
        style={{ transform: `perspective(400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      />
    </div>
  )
}

function Galleries() {
  return (
    <div className={box}>
      <div className="grid grid-cols-2 gap-1.5">
        {['#2a2a2a', '#332211', '#1a2a22', '#241a2e'].map((c, i) => (
          <div key={i} className="group/g h-10 w-10 overflow-hidden rounded">
            <div className="h-full w-full transition-transform duration-300 group-hover/g:scale-125" style={{ background: c }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export const CATEGORY_ORDER = [
  'buttons', 'inputs', 'typing', 'selection-controls', 'dropdowns', 'tooltips',
  'toasts', 'numbers', 'drawers', 'tabs', 'grid-reveal', 'navigation-indicator',
  'hamburger-menu', 'hide-on-scroll', 'carousels', 'modals', 'progress-bars',
  'charts', 'list-items', 'cards', 'galleries',
] as const

export const CATEGORY_LABELS: Record<string, string> = {
  'buttons': 'Buttons', 'inputs': 'Inputs', 'typing': 'Typing',
  'selection-controls': 'Selection Controls', 'dropdowns': 'Dropdowns', 'tooltips': 'Tooltips',
  'toasts': 'Toasts', 'numbers': 'Numbers', 'drawers': 'Drawers', 'tabs': 'Tabs',
  'grid-reveal': 'Grid Reveal', 'navigation-indicator': 'Navigation Indicator',
  'hamburger-menu': 'Hamburger Menu', 'hide-on-scroll': 'Hide on Scroll', 'carousels': 'Carousels',
  'modals': 'Modals', 'progress-bars': 'Progress Bars', 'charts': 'Charts',
  'list-items': 'List Items', 'cards': 'Cards', 'galleries': 'Galleries',
}

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'buttons': 'Hover, press, and shine-sweep treatments for primary actions.',
  'inputs': 'Focus rings, underline sweeps, and label motion for text fields.',
  'typing': 'Character-by-character reveal for placeholders and live text.',
  'selection-controls': 'Checkbox, switch, and radio feedback with real state.',
  'dropdowns': 'Open/close motion for menus and select-style triggers.',
  'tooltips': 'Hover-triggered context that fades and lifts into place.',
  'toasts': 'Transient confirmation messages that slide in and auto-dismiss.',
  'numbers': 'Eased count-up motion for stats and live metrics.',
  'drawers': 'Edge-anchored panels that slide in over content.',
  'tabs': 'Sliding active-state indicators between view switches.',
  'grid-reveal': 'Staggered entrance for grid and gallery items.',
  'navigation-indicator': 'Underline or pill indicators that track the active link.',
  'hamburger-menu': 'Icon morph between menu and close states.',
  'hide-on-scroll': 'Toolbars and headers that hide and reappear with scroll direction.',
  'carousels': 'Slide transitions with paging dots and directional controls.',
  'modals': 'Backdrop fade and panel scale-in for dialogs.',
  'progress-bars': 'Eased fill motion for uploads, loaders, and steps.',
  'charts': 'Animated bars and series that draw in on reveal.',
  'list-items': 'Selection and hover feedback for rows and menu items.',
  'cards': 'Hover lift, tilt, and shadow depth for content cards.',
  'galleries': 'Hover zoom and crop treatments for image grids.',
}

export const CATEGORY_DEMOS: Record<string, () => JSX.Element> = {
  'buttons': Buttons, 'inputs': Inputs, 'typing': Typing, 'selection-controls': SelectionControls,
  'dropdowns': Dropdowns, 'tooltips': Tooltips, 'toasts': Toasts, 'numbers': Numbers,
  'drawers': Drawers, 'tabs': Tabs, 'grid-reveal': GridReveal, 'navigation-indicator': NavigationIndicator,
  'hamburger-menu': HamburgerMenu, 'hide-on-scroll': HideOnScroll, 'carousels': Carousels,
  'modals': Modals, 'progress-bars': ProgressBars, 'charts': Charts, 'list-items': ListItems,
  'cards': Cards, 'galleries': Galleries,
}
