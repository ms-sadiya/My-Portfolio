import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

  const scrollToSection = (section) => {
    setActiveSection(section.toLowerCase())
    // basic scroll stub — integrate with your sections as needed
    const el = document.getElementById(section.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenuOpen(false)
  }

  // Persist theme choice and sync with <html> for Tailwind's `dark` class
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDarkMode(saved === 'dark')
  }, [])

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    } catch (e) {
      // ignore in non-browser environments
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0f172a] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* subtle blurred background accents */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className={`absolute top-[-10%] right-[-10%] w-105 h-105 rounded-full blur-[96px] opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-105 h-105 rounded-full blur-[96px] opacity-20 ${darkMode ? 'bg-pink-600' : 'bg-pink-300'}`}></div>
      </div>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      <main className="pt-28">
        <Hero darkMode={darkMode} scrollToSection={scrollToSection} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer />
      </main>
    </div>
  )
}

export default App
