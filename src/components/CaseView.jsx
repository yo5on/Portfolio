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

// A native player: controls, no autoplay, a poster frame from the recording, and nothing of the
// video itself downloaded until the visitor presses play.
function Gameplay({ id, video }) {
  const label = `case-${id}-gameplay`
  return (
    <section className="study-part is-wide case-media" aria-labelledby={label}>
      <h3 id={label} className="study-label">Gameplay</h3>
      <figure className="study-body">
        <video className="case-video" controls preload="none" poster={video.poster} playsInline width={video.w} height={video.h} aria-label={video.label}>
          <source src={video.src} type="video/mp4" />
          <p>Your browser can’t play this video. <a href={video.src}>Download the recording (MP4, {video.size})</a>.</p>
        </video>
        <figcaption>{video.caption}</figcaption>
      </figure>
    </section>
  )
}

function Study({ project, study, rise, reduced }) {
  const id = part => `study-${project.id}-${part}`
  return (
    <div className="study">
      {/* Opens like the shorter project views: title and brief beside the project's own image plate. */}
      <div className="case-grid study-head">
        <div className="case-text">
          <h2 id="case-title" className="case-title">
            <span className="mask"><motion.span initial={reduced ? false : { y: '105%' }} animate={{ y: '0%' }} transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : 0.2, ease: soft }}>{project.title}</motion.span></span>
          </h2>
          <motion.p className="case-detail study-lede" {...rise(0.3)}>{study.brief}</motion.p>
        </div>
        <motion.div className="case-plate" {...rise(0.25)}><Plate project={project} /></motion.div>
      </div>
      <motion.div {...rise(0.3)}>
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

// The reveal is a clip-path inset in pixels: from a card figure's box out to the full screen,
// and back into the card on close when it is in view; otherwise it wipes up from the bottom
// and away to the top, as before. Reduced motion keeps a plain fade.
const inset = r => `inset(${r.top}px ${r.right}px ${r.bottom}px ${r.left}px)`

export default function CaseView({ project, origin, onClose, onNavigate }) {
  const reduced = useReducedMotion()
  const panel = useRef(null)
  const closeBtn = useRef(null)
  const i = projects.findIndex(p => p.id === project.id)
  const next = projects[(i + 1) % projects.length]
  const study = studies[project.id]

  useEffect(() => {
    // Return focus to whatever opened the view; a click on a card image leaves nothing focused,
    // so fall back to that project's title button.
    // Only a real control counts as the opener: tapping an image (or anywhere in the focusable Work
    // section) leaves focus on something that is not one, and the title-button fallback is used instead.
    const active = document.activeElement
    const opener = active && active !== document.body && active.matches('a[href], button') ? active : null
    const openedId = project.id
    closeBtn.current?.focus()
    document.body.style.overflow = 'hidden'
    // Take the page behind the dialog out of the tab order and the accessibility tree.
    const background = [...document.querySelectorAll('.skip, header.nav, main, footer')]
    background.forEach(el => { el.inert = true })
    const onKey = e => {
      if (e.key === 'Escape' && !document.fullscreenElement) onClose()
      if (e.key !== 'Tab' || !panel.current) return
      const items = [...panel.current.querySelectorAll('button, a[href], video[controls]')]
      const first = items[0], last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      background.forEach(el => { el.inert = false })
      document.body.style.overflow = ''
      const back = opener ?? document.querySelector(`[data-plate="${openedId}"]`)?.closest('.entry')?.querySelector('.entry-title-link')
      back?.focus?.({ preventScroll: true })
    }
    // Runs once per opening (Next study keeps the original opener), so `project` is read only here.
  }, [onClose])

  // A newly opened view already starts at the top; only Next study (same panel, new project) needs the reset.
  const firstProject = useRef(true)
  useEffect(() => {
    if (firstProject.current) { firstProject.current = false; return }
    panel.current?.scrollTo(0, 0)
  }, [project])

  const rise = d => ({ initial: reduced ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduced ? 0 : 1, delay: reduced ? 0 : d, ease: soft } })

  return (
    <motion.div
      ref={panel}
      className="case"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      variants={{
        enter: reduced ? { opacity: 0 } : { clipPath: origin ? inset(origin) : `inset(${window.innerHeight}px 0px 0px 0px)` },
        shown: reduced ? { opacity: 1 } : { clipPath: 'inset(0px 0px 0px 0px)' },
        leave: to => reduced ? { opacity: 0 } : { clipPath: to ? inset(to) : `inset(0px 0px ${window.innerHeight}px 0px)` },
      }}
      initial="enter"
      animate="shown"
      exit="leave"
      transition={{ duration: reduced ? 0 : 0.95, ease }}
    >
      <div className="case-bar">
        <span>N° {project.n} &nbsp;·&nbsp; {project.type}</span>
        <button ref={closeBtn} className="case-close" onClick={onClose}>Close <Close /></button>
      </div>
      {study ? <Study key={project.id} project={project} study={study} rise={rise} reduced={reduced} /> : <div className="case-grid" key={project.id}>
        <div className="case-text">
          <h2 id="case-title" className="case-title">
            <span className="mask"><motion.span initial={reduced ? false : { y: '105%' }} animate={{ y: '0%' }} transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : 0.2, ease: soft }}>{project.title}</motion.span></span>
          </h2>
          <motion.p className="case-detail" {...rise(0.3)}>{project.detail}</motion.p>
          <motion.dl className="case-facts" {...rise(0.4)}>
            <div><dt>Discipline</dt><dd>{project.type}</dd></div>
            <div><dt>Built with</dt><dd>{project.stack.join(', ')}</dd></div>
          </motion.dl>
          <motion.div className="case-links" {...rise(0.5)}>
            {project.repo && <ExternalLink href={project.repo}>Repository</ExternalLink>}
            <ExternalLink href={github}>GitHub profile</ExternalLink>
          </motion.div>
        </div>
        <motion.div className="case-plate" {...rise(0.25)}><Plate project={project} /></motion.div>
      </div>}
      {!study && project.video && <Gameplay key={`${project.id}-video`} id={project.id} video={project.video} />}
      <button className="case-next" onClick={() => onNavigate(next)}>
        <span className="kicker">Next study — N° {next.n}</span>
        <span className="case-next-title">{next.title} <ArrowRight className="icon icon-next" /></span>
      </button>
    </motion.div>
  )
}
