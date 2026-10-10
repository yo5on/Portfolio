import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { github, linkedin } from '../data/content.js'

const links = [['Work', '#work'], ['About', '#about'], ['Contact', '#contact']]
const ease = [0.22, 1, 0.36, 1]

export default function Nav() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#work')
  const [open, setOpen] = useState(false)
  useMotionValueEvent(scrollY, 'change', v => setScrolled(v > 60))

  useEffect(() => {
    const ids = links.map(([, h]) => h.slice(1))
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return <>
    <motion.header className={scrolled ? 'nav is-scrolled' : 'nav'} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.1, ease }}>
      <a className="brand" href="#top" aria-label="YO5ON — back to top"><span className="brand-star" aria-hidden="true">✦</span>YO5ON</a>
      <nav className="nav-links" aria-label="Primary">
        {links.map(([label, href]) => (
          <a key={href} href={href} aria-current={active === href ? 'true' : undefined}>
            {label}
            {active === href && <motion.span className="nav-underline" layoutId="nav-underline" transition={{ type: 'spring', stiffness: 320, damping: 32 }} />}
          </a>
        ))}
      </nav>
      <div className="nav-aside">
        <span className="nav-divider" aria-hidden="true" />
        <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
      <button className="nav-menu" aria-expanded={open} aria-controls="menu-sheet" onClick={() => setOpen(v => !v)}>{open ? 'Close' : 'Menu'}</button>
    </motion.header>

    <AnimatePresence>
      {open && (
        <motion.div id="menu-sheet" className="menu-sheet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.5, ease }}>
          <nav aria-label="Mobile">
            {links.map(([label, href], i) => (
              <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease }}>{label}</motion.a>
            ))}
          </nav>
          <div className="menu-foot"><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
}
