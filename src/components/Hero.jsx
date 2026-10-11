import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { RibbonLayer } from './Ribbons.jsx'
import { ArrowRight } from './Icons.jsx'

const ease = [0.22, 1, 0.36, 1]

// Responsive moth: phones and 1x screens get the 900px file, larger/denser screens the 1536px one.
// `sizes` mirrors the CSS: the moth is 75% of the art box (min(78vw, 132svh) desktop,
// min(86vw, 118svh) tablet, 122vw phone).
const MOTH_SRCSET = '/images/moth-900.webp 900w, /images/moth.webp 1536w'
const MOTH_SIZES = '(max-width: 760px) 92vw, (max-width: 1080px) 65vw, 59vw'

// "Small, sharp tools over big, vague ideas." — set as four lines: the claim in
// crimson capitals, the contrast in stone italic. Text content stays verbatim.
const HEADLINE = [
  [['Small, sharp']],
  [['tools'], ['over', 'em']],
  [['big, vague', 'em']],
  [['ideas.', 'em']],
]

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
        {/* The moth's soft shadow sits beneath the back ribbons, so ribbons that pass
            behind the moth are never darkened and every crossing stays clean. */}
        <picture className="moth moth-shadow" aria-hidden="true">
          <source srcSet={MOTH_SRCSET} sizes={MOTH_SIZES} type="image/webp" />
          <img src="/images/moth.png" alt="" width="1536" height="977" decoding="async" />
        </picture>
        <RibbonLayer layer="back" className="ribbons ribbons-back" />
        <picture className="moth">
          <source srcSet={MOTH_SRCSET} sizes={MOTH_SIZES} type="image/webp" />
          <img src="/images/moth.png" alt="A pale grey moth with outstretched forewings and long hanging hindwings, drawn in fine engraved detail" width="1536" height="977" fetchPriority="high" decoding="async" />
        </picture>
        <RibbonLayer layer="fore" className="ribbons ribbons-front" />
      </motion.div>

      <motion.div className="hero-copy" style={{ y: copyY }}>
        <motion.p className="hero-eyebrow" {...enter(0.3, 8)}>AI / ML ·<br />Robotics ·<br />Software</motion.p>
        <h1 className="hero-title" id="hero-title">
          {HEADLINE.map((line, i) => (
            <span className="line" key={i}>
              <motion.span initial={reduced ? false : { y: '102%' }} animate={{ y: '0%' }} transition={{ duration: reduced ? 0 : 1.3, delay: reduced ? 0 : 0.45 + i * 0.1, ease }}>
                {line.map(([text, voice], j) => voice === 'em'
                  ? <span key={j} className="title-em">{j ? ' ' : ''}{text}</span>
                  : <span key={j}>{j ? ' ' : ''}{text}</span>)}
              </motion.span>{' '}
            </span>
          ))}
        </h1>
        {/* Phones only: the specimen label beneath the moth (the desktop label sits in the margin). */}
        <motion.p className="hero-specimen" {...enter(0.9, 8)}>Fig. 01 — Digital specimen</motion.p>
        <motion.p className="hero-tagline" {...enter(1.0)}>Yoson — a CSE student building <br />intelligent systems, embedded <br />robotics and interactive worlds.</motion.p>
        <motion.a className="hero-cta" href="#work" {...enter(1.15)}>Explore the work <ArrowRight /></motion.a>
      </motion.div>

      <motion.div className="hero-meta" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 1.4 }}>
        <p className="meta-fig">Fig. 01<br />Digital<br />specimen<br />— 2026</p>
        <p className="meta-side">Selected work 01 — 06</p>
        <p className="meta-note">Portfolio of<br />Yoson, CSE<br />AI / ML<span className="meta-rule" /></p>
        {/* Visual cue only: "Explore the work" is the keyboard/screen-reader route to the same place. */}
        <a className="meta-scroll" href="#work" tabIndex={-1} aria-hidden="true"><span className="scroll-mark" />Scroll to explore</a>
      </motion.div>
    </section>
  )
}
