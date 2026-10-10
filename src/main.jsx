import React, { useCallback, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, MotionConfig } from 'motion/react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import CaseView from './components/CaseView.jsx'
import { About, Contact, Education, Footer, Skills } from './components/Sections.jsx'
import './styles.css'

function App() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#work">Skip to work</a>
      <Nav />
      <main>
        <Hero />
        <Work onOpen={setActive} />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>{active && <CaseView key="case" project={active} onClose={close} onNavigate={setActive} />}</AnimatePresence>
    </MotionConfig>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
