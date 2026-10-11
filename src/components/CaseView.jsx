import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { github, projects, studies } from '../data/content.js'
import Plate from './Plate.jsx'
import { ArrowRight, Close, ExternalLink } from './Icons.jsx'

const ease = [0.76, 0, 0.24, 1]
const soft = [0.22, 1, 0.36, 1]

// One labelled row of a case study: a small mono label beside the text it introduces.
function Part({ id, label, wide = false, children }) {
  return (
    <section className={wide ? 'study-part is-wide' : 'study-part'} aria-labelledby={id}>
      <h3 id={id} className="study-label">{label}</h3>
      <div className="study-body">{children}</div>
    </section>
  )
}

// Images keep their own proportions; portrait sets sit side by side, landscape sets lead with one wide image.
function Gallery({ items }) {
  const portrait = items.every(g => g.h > g.w)
  return (
    <ol className={portrait ? 'study-gallery is-portrait' : 'study-gallery is-landscape'} style={{ '--cols': portrait ? items.length : 2 }}>
      {items.map((g, i) => (
        <li key={g.src}>
          <figure>
            <a className="study-shot" href={g.src} target="_blank" rel="noreferrer">
              <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" />
              <span className="sr-only"> (full-size image, opens in new tab)</span>
            </a>
            <figcaption><span>Fig. {i + 1}</span><span>{g.caption}</span></figcaption>
          </figure>
        </li>
      ))}
    </ol>
  )
}

function Study({ project, study, rise, reduced }) {
  const id = part => `study-${project.id}-${part}`
  return (
    <div className="study">
      <h2 id="case-title" className="case-title study-title">
        <span className="mask"><motion.span initial={reduced ? false : { y: '105%' }} animate={{ y: '0%' }} transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : 0.45, ease: soft }}>{project.title}</motion.span></span>
      </h2>
      <motion.div {...rise(0.6)}>
        <Part id={id('brief')} label="Brief"><p className="study-lede">{study.brief}</p></Part>
        <Part id={id('built')} label="What I built"><p>{study.built}</p></Part>
        <Part id={id('how')} label="How it works">{study.how.map(p => <p key={p}>{p}</p>)}</Part>
        <Part id={id('stack')} label="Stack">
          <ul className="study-stack">{study.stack.map(t => <li key={t}>{t}</li>)}</ul>
        </Part>
        <Part id={id('status')} label="Status">{study.status.map(p => <p key={p}>{p}</p>)}</Part>
      </motion.div>
      <Part id={id('gallery')} label="Gallery" wide><Gallery items={study.gallery} /></Part>
      <Part id={id('links')} label="Links">
        <ul className="study-links">
          {study.links.map(l => (
            <li key={l.href}>
              <ExternalLink href={l.href}>{l.label}</ExternalLink>
              {l.note && <p className="study-note">{l.note}</p>}
            </li>
          ))}
        </ul>
      </Part>
    </div>
  )
}

export default function CaseView({ project, onClose, onNavigate }) {
  const reduced = useReducedMotion()
  const panel = useRef(null)
  const closeBtn = useRef(null)
  const i = projects.findIndex(p => p.id === project.id)
  const next = projects[(i + 1) % projects.length]
  const study = studies[project.id]

  useEffect(() => {
    const previous = document.activeElement
    closeBtn.current?.focus()
    document.body.style.overflow = 'hidden'
    // Take the page behind the dialog out of the tab order and the accessibility tree.
    const background = [...document.querySelectorAll('.skip, header.nav, main, footer')]
    background.forEach(el => { el.inert = true })
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !panel.current) return
      const items = [...panel.current.querySelectorAll('button, a[href]')]
      const first = items[0], last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      background.forEach(el => { el.inert = false })
      document.body.style.overflow = ''
      previous?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  useEffect(() => { panel.current?.scrollTo(0, 0) }, [project])

  const rise = d => ({ initial: reduced ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduced ? 0 : 1, delay: reduced ? 0 : d, ease: soft } })

  return (
    <motion.div
      ref={panel}
      className="case"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      initial={reduced ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
      animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)' }}
      exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: reduced ? 0 : 0.95, ease }}
    >
      <div className="case-bar">
        <span>N° {project.n} &nbsp;·&nbsp; {project.type}</span>
        <button ref={closeBtn} className="case-close" onClick={onClose}>Close <Close /></button>
      </div>
      {study ? <Study key={project.id} project={project} study={study} rise={rise} reduced={reduced} /> : <div className="case-grid" key={project.id}>
        <div className="case-text">
          <h2 id="case-title" className="case-title">
            <span className="mask"><motion.span initial={reduced ? false : { y: '105%' }} animate={{ y: '0%' }} transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : 0.45, ease: soft }}>{project.title}</motion.span></span>
          </h2>
          <motion.p className="case-detail" {...rise(0.6)}>{project.detail}</motion.p>
          <motion.dl className="case-facts" {...rise(0.7)}>
            <div><dt>Discipline</dt><dd>{project.type}</dd></div>
            <div><dt>Built with</dt><dd>{project.stack.join(', ')}</dd></div>
          </motion.dl>
          <motion.div className="case-links" {...rise(0.8)}>
            {project.repo && <ExternalLink href={project.repo}>Repository</ExternalLink>}
            <ExternalLink href={github}>GitHub profile</ExternalLink>
          </motion.div>
        </div>
        <motion.div className="case-plate" {...rise(0.5)}><Plate project={project} /></motion.div>
      </div>}
      <button className="case-next" onClick={() => onNavigate(next)}>
        <span className="kicker">Next study — N° {next.n}</span>
        <span className="case-next-title">{next.title} <ArrowRight className="icon icon-next" /></span>
      </button>
    </motion.div>
  )
}
