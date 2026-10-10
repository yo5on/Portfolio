import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { RibbonLayer } from './Ribbons.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -70])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -30])

  const enter = (delay, y = 18) => ({
    initial: reduced ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 1.3, delay: reduced ? 0 : delay, ease },
  })

  return (
    <section className="hero" id="top" ref={ref} aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />

      <motion.div className="art" style={{ y: artY }} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 1.8, delay: reduced ? 0 : 0.2, ease }}>
        <RibbonLayer layer="back" className="ribbons ribbons-back" />
        <picture className="moth">
          <source srcSet="/images/moth.webp" type="image/webp" />
          <img src="/images/moth.png" alt="A pale grey moth with outstretched forewings and long hanging hindwings, drawn in fine engraved detail" width="1536" height="977" fetchPriority="high" decoding="async" />
        </picture>
        <RibbonLayer layer="fore" className="ribbons ribbons-front" />
      </motion.div>

      <motion.div className="hero-copy" style={{ y: copyY }}>
        <motion.p className="hero-eyebrow" {...enter(0.3, 8)}>AI / ML ·<br />Robotics ·<br />Software</motion.p>
        <h1 className="hero-title" id="hero-title">
          {['Models', 'into', 'motion.'].map((word, i) => (
            <span className="line" key={word}>
              <motion.span initial={reduced ? false : { y: '102%' }} animate={{ y: '0%' }} transition={{ duration: reduced ? 0 : 1.3, delay: reduced ? 0 : 0.45 + i * 0.12, ease }}>{word}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p className="hero-tagline" {...enter(1.0)}>Yo5on — a CSE student building<br />intelligent systems, embedded<br />robotics and interactive worlds.</motion.p>
        <motion.a className="hero-cta" href="#work" {...enter(1.15)}>Explore the work <span aria-hidden="true">→</span></motion.a>
      </motion.div>

      <motion.div className="hero-meta" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 1.4 }}>
        <p className="meta-fig">Fig. 01<br />Digital<br />specimen<br />— 2026</p>
        <p className="meta-side">Selected work 01 — 06</p>
        <p className="meta-note">Portfolio of<br />Yo5on, CSE<br />AI / ML<span className="meta-rule" /></p>
        <a className="meta-scroll" href="#work"><span className="scroll-mark" aria-hidden="true" />Scroll to explore</a>
      </motion.div>
    </section>
  )
}
