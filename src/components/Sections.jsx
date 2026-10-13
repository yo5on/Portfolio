import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { education, email, github, linkedin, practice, projects } from '../data/content.js'
import { ArrowUp, ArrowUpRight, BrandMoth, ExternalLink } from './Icons.jsx'
import InkWord from './InkWord.jsx'
import { ProjectLink } from './Work.jsx'

const ease = [0.22, 1, 0.36, 1]

function useReveal() {
  const reduced = useReducedMotion()
  return (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: reduced ? 0 : 1.1, delay: reduced ? 0 : delay, ease },
  })
}

export function About() {
  const r = useReveal()
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <header className="section-head">
        <span className="kicker">03 — About</span>
        <motion.h2 id="about-title" className="section-title" {...r()}>CSE student.<br /><em>Hands-on builder.</em></motion.h2>
      </header>
      <motion.div className="about-body" {...r(0.1)}>
        <p>I’m a CSE student specializing in AI / ML. My hands-on work so far spans ESP32 robotics, embedded builds, full-stack software tools (an explainable fake-account risk scorer and a personalized study planner) and a Unity 2D platformer.</p>
        <p className="muted">This portfolio follows that work from software into embedded systems and the physical world.</p>
        <p className="about-education"><span className="kicker">Education</span>{education}</p>
        <ExternalLink className="text-link" href={github}>GitHub</ExternalLink>
      </motion.div>
    </section>
  )
}

export function Practice({ onOpen }) {
  const r = useReveal()
  const byId = id => projects.find(p => p.id === id)
  return (
    <section className="practice-section" id="practice" aria-labelledby="practice-title">
      <header className="section-head">
        <span className="kicker">04 — Practice</span>
        <motion.h2 id="practice-title" className="section-title is-statement" {...r()}>{practice.lead} <em>{practice.leadEm}</em></motion.h2>
      </header>
      <div className="practice">
        {practice.areas.map((p, i) => (
          <motion.article key={p.n} {...r(0.1 + i * 0.08)}>
            <span className="kicker">{p.n}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <dl className="practice-meta">
              <div><dt>Focus</dt><dd>{p.focus.map(f => <span key={f} className="tag">{f}</span>)}</dd></div>
              <div><dt>{p.workLabel}</dt><dd>{p.work.map(id => <ProjectLink key={id} project={byId(id)} onOpen={onOpen} className="tag">{byId(id).title}</ProjectLink>)}</dd></div>
            </dl>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

// Certificates live in their own module (an animated exhibition); re-exported here with the other sections.
export { Certificates } from './Certificates.jsx'

export function Contact() {
  const r = useReveal()
  const reduced = useReducedMotion()
  const title = useRef(null)
  // "something." writes itself once the headline is properly in view (immediately under reduced motion).
  const inView = useInView(title, { once: true, amount: 0.6 })
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${email}` }
  }
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <span className="kicker">06 — Contact</span>
      <motion.h2 ref={title} id="contact-title" className="contact-title" {...r()}>Let’s make <em><InkWord text="something." pending={!inView && !reduced} delay={0.45} duration={1.1} /></em></motion.h2>
      <motion.a className="contact-mail" href={`mailto:${email}`} {...r(0.15)}>{email}<ArrowUpRight className="icon icon-mail" /></motion.a>
      <motion.div className="contact-links" {...r(0.25)}>
        <button onClick={copy} aria-live="polite">{copied ? 'Copied' : 'Copy email'}</button>
        <ExternalLink href={github}>GitHub</ExternalLink>
        <ExternalLink href={linkedin}>LinkedIn</ExternalLink>
      </motion.div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#top"><BrandMoth /><span className="brand-word">YOSON</span></a>
      <span>CSE · AI / ML · Robotics · Software</span>
      <span className="colophon">Set in Instrument Serif, Instrument Sans &amp; IBM Plex Mono · 2026</span>
      <a className="back-top" href="#top">Back to top <ArrowUp /></a>
    </footer>
  )
}
