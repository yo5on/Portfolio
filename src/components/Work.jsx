import { motion, useReducedMotion } from 'motion/react'
import { projects } from '../data/content.js'
import Plate from './Plate.jsx'

const ease = [0.22, 1, 0.36, 1]
// Masked line reveal: text rises from below its clipping mask.
const reveal = { hidden: { y: '105%' }, shown: { y: '0%' } }

function Entry({ project, index, onOpen }) {
  const reduced = useReducedMotion()
  const flip = index % 2 === 1
  const t = (delay = 0) => ({ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : delay, ease })
  return (
    <motion.li className={flip ? 'entry is-flipped' : 'entry'} initial="rest" whileHover="hover" animate="rest">
      <div className="entry-rule">
        <span>N° {project.n}</span>
        <span>{project.type}</span>
      </div>
      <motion.div className="entry-plate" variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: flip ? 0.6 : -0.6, scale: 1.015 } }} transition={{ duration: 0.9, ease }}>
        <Plate project={project} />
      </motion.div>
      <div className="entry-text">
        {/* The in-view trigger sits on the visible heading: the text itself starts
            clipped outside its mask, where it can never register as in view. */}
        <motion.h3 className="entry-title" initial={reduced ? false : 'hidden'} whileInView="shown" viewport={{ once: true, amount: 0.6 }}>
          <span className="mask">
            <motion.span variants={reveal} transition={t(0.05)}>{project.title}</motion.span>
          </span>
        </motion.h3>
        <motion.p className="entry-intro" initial={reduced ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={t(0.2)}>{project.intro}</motion.p>
        <motion.p className="entry-stack" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={t(0.35)}>
          {project.stack.map((tag, i) => <span key={tag}>{i > 0 && '  ·  '}<span className="tag">{tag}</span></span>)}
        </motion.p>
        {/* One arrow: a crimson shaft with its head attached, which lengthens on hover/focus. */}
        <button className="entry-open" onClick={() => onOpen(project)} aria-label={`Open study: ${project.title}`}>
          <span>Open study</span>
          <span className="open-arrow" aria-hidden="true" />
        </button>
      </div>
    </motion.li>
  )
}

export default function Work({ onOpen }) {
  const reduced = useReducedMotion()
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <header className="section-head">
        <span className="kicker">02 — Selected work</span>
        <motion.h2 id="work-title" className="section-title" initial={reduced ? false : 'hidden'} whileInView="shown" viewport={{ once: true, amount: 0.5 }}>
          <span className="mask"><motion.span variants={reveal} transition={{ duration: 1.2, ease }}>Selected <em>work</em></motion.span></span>
          <span className="mask"><motion.span variants={reveal} transition={{ duration: 1.2, delay: 0.08, ease }}>&amp; <em>studies.</em></motion.span></span>
        </motion.h2>
        <p className="section-note">AI, sustainable agriculture, embedded robotics, and interactive projects.</p>
      </header>
      <ol className="entries">
        {projects.map((p, i) => <Entry key={p.id} project={p} index={i} onOpen={onOpen} />)}
      </ol>
    </section>
  )
}
