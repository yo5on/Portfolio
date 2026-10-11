import { useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import InkWord from './InkWord.jsx'

/**
 * A short handwritten note in the margin beneath a project figure. Its line is reserved
 * from the start (the word waits invisibly), so writing it in never moves the layout;
 * it writes itself once, when the note scrolls fully into view, and appears already
 * drawn under reduced motion.
 */
export default function MarginNote({ text, square = false }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 1 })
  return (
    <p ref={ref} className={square ? 'margin-note is-square' : 'margin-note'}>
      <InkWord text={text} pending={!inView && !reduced} delay={0.35} duration={1.3} />
    </p>
  )
}
