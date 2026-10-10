import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { email, focus, github, linkedin, practice } from '../data/content.js'
import { ArrowUp, ArrowUpRight, ExternalLink } from './Icons.jsx'
import InkWord from './InkWord.jsx'

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
        <motion.h2 id="about-title" className="section-title" {...r()}>AI / ML student.<br /><em>Hands-on builder.</em></motion.h2>
      </header>
      <motion.div className="about-body" {...r(0.1)}>
        <p>I’m a CSE student specializing in AI / ML. My projects span AI-powered fake account detection, personalized study planning, agentic pest monitoring, ESP32 robotics, and a Unity 2D platformer.</p>
        <p className="muted">This portfolio follows that work from software and models into embedded systems and the physical world.</p>
        <ExternalLink className="text-link" href={github}>GitHub</ExternalLink>
      </motion.div>
    </section>
  )
}

export function Skills() {
  const r = useReveal()
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <header className="section-head">
        <span className="kicker">04 — Skills</span>
        <motion.h2 id="skills-title" className="section-title" {...r()}>From model <em>to machine.</em></motion.h2>
      </header>
      <motion.ol className="skill-index" {...r(0.1)}>
        {focus.map((f, i) => <li key={f}><span>{String(i + 1).padStart(2, '0')}</span>{f}</li>)}
      </motion.ol>
    </section>
  )
}

export function Education() {
  const r = useReveal()
  return (
    <section className="education" id="education" aria-labelledby="education-title">
      <header className="section-head">
        <span className="kicker">05 — Education &amp; practice</span>
        <motion.h2 id="education-title" className="section-title" {...r()}>Learning <em>by building.</em></motion.h2>
      </header>
      <div className="practice">
        {practice.map((p, i) => (
          <motion.article key={p.k} {...r(0.1 + i * 0.08)}>
            <span className="kicker">{p.k}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

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
      <a className="brand" href="#top"><span className="brand-star" aria-hidden="true">✦</span>YO5ON</a>
      <span>CSE · AI / ML · Robotics · Software</span>
      <a className="back-top" href="#top">Back to top <ArrowUp /></a>
    </footer>
  )
}
