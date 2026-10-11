import { motion, useReducedMotion } from 'motion/react'
import { projects } from '../data/content.js'
import Plate from './Plate.jsx'
import MarginNote from './MarginNote.jsx'
import { ArrowRight } from './Icons.jsx'

const ease = [0.22, 1, 0.36, 1]
// Masked line reveal: text rises from below its clipping mask.
const reveal = { hidden: { y: '105%' }, shown: { y: '0%' } }

/**
 * A link to a project's view. It is a real address (#work/<id>), so it can be shared or opened in a
 * new tab; a plain click opens the view in place, out of the project's card when that is in view.
 */
export function ProjectLink({ project, onOpen, className, children }) {
  return (
    <a className={className} href={`#work/${project.id}`} onClick={e => {
      if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return // new tab or window: let the browser follow the link
      e.preventDefault(); onOpen(project, plateRect(project.id))
    }}>{children}</a>
  )
}

/** The on-screen box of a project's card figure, or null unless at least half of it is in view. */
export function plateRect(id) {
  const el = document.querySelector(`[data-plate="${id}"] .plate`)
  if (!el) return null
  const r = el.getBoundingClientRect()
  const seen = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0)
  if (!r.width || seen < r.height / 2) return null
  return { top: r.top, left: r.left, right: window.innerWidth - r.right, bottom: window.innerHeight - r.bottom }
}

function Entry({ project, index, onOpen }) {
  const reduced = useReducedMotion()
  const flip = index % 2 === 1
  const t = (delay = 0) => ({ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : delay, ease })
  // The view opens out of this project's figure, whichever control was used.
  const open = () => onOpen(project, plateRect(project.id))
  return (
    <motion.li className={flip ? 'entry is-flipped' : 'entry'} initial="rest" whileHover="hover" animate="rest">
      <div className="entry-rule">
        <span>N° {project.n}</span>
        <span>{project.type}</span>
      </div>
      {/* The image is a pointer shortcut; keyboard users reach the same view from the title or "Open study",
          so it is not a third tab stop for the same action. */}
      <motion.div className="entry-plate" data-plate={project.id} onClick={open} variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: flip ? 0.6 : -0.6, scale: 1.015 } }} transition={{ duration: 0.9, ease }}>
        <Plate project={project} />
        {project.note && <MarginNote text={project.note} square={project.image?.frame === 'square'} />}
      </motion.div>
      <div className="entry-text">
        {/* The in-view trigger sits on the visible heading: the text itself starts
            clipped outside its mask, where it can never register as in view. */}
        <motion.h3 className="entry-title" initial={reduced ? false : 'hidden'} whileInView="shown" viewport={{ once: true, amount: 0.6 }}>
          <button type="button" className="entry-title-link" onClick={open}>
            <span className="mask">
              <motion.span variants={reveal} transition={t(0.05)}>{project.title}</motion.span>
            </span>
          </button>
        </motion.h3>
        <motion.p className="entry-intro" initial={reduced ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={t(0.2)}>{project.intro}</motion.p>
        <motion.p className="entry-stack" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={t(0.35)}>
          {project.stack.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </motion.p>
        {/* One arrow: a crimson shaft with its head attached, which lengthens on hover/focus. */}
        <button className="entry-open" onClick={open} aria-label={`Open study: ${project.title}`}>
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
    <section className="work" id="work" tabIndex={-1} aria-labelledby="work-title">
      <header className="section-head">
        <span className="kicker">02 — Selected work</span>
        <motion.h2 id="work-title" className="section-title" initial={reduced ? false : 'hidden'} whileInView="shown" viewport={{ once: true, amount: 0.5 }}>
          <span className="mask"><motion.span variants={reveal} transition={{ duration: 1.2, ease }}>Selected <em>work</em></motion.span></span>
          <span className="mask"><motion.span variants={reveal} transition={{ duration: 1.2, delay: 0.08, ease }}>&amp; <em>studies.</em></motion.span></span>
        </motion.h2>
        <p className="section-note">Embedded robotics, full-stack software, and interactive projects.</p>
      </header>
      <ol className="entries">
        {projects.map((p, i) => <Entry key={p.id} project={p} index={i} onOpen={onOpen} />)}
      </ol>
      {/* A compact index of the same projects, labelled with the same titles and disciplines as the cards. */}
      <motion.nav className="work-index" aria-labelledby="work-index-title" initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : 1.1, ease }}>
        <h3 id="work-index-title" className="kicker">Index of works</h3>
        <ol>
          {projects.map(p => (
            <li key={p.id}>
              <ProjectLink project={p} onOpen={onOpen}>
                <span className="work-index-n">{p.n}</span>
                <span className="work-index-title">{p.title}</span>
                <span className="work-index-field">{p.type}</span>
                <ArrowRight className="icon work-index-arrow" />
              </ProjectLink>
            </li>
          ))}
        </ol>
      </motion.nav>
    </section>
  )
}
