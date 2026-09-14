import { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

function CharSpan({ char, progress, index, total }: { char: string; progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      {/* invisible placeholder for layout */}
      <span style={{ visibility: 'hidden' }}>{text}</span>
      {/* animated layer */}
      <span style={{ position: 'absolute', top: 0, left: 0 }}>
        {chars.map((char, i) => (
          <CharSpan key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
        ))}
      </span>
    </div>
  )
}
