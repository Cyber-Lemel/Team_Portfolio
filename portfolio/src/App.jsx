import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  teamInfo,
  stats,
  team,
  education,
  skills,
  projects,
  courses,
  socialLinks,
} from './data/portfolioData'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero team={team} teamInfo={teamInfo} stats={stats} />
        <About education={education} bio={teamInfo.bio} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Courses courses={courses} />
        <Contact />
      </main>
      <Footer teamInfo={teamInfo} socialLinks={socialLinks} />
    </div>
  )
}

export default App
