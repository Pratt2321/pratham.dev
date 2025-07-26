'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Interests from '@/components/Interests'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Initialize dark mode from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Dark Mode Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Sticky Navbar */}
        <Navbar />

        {/* Main Content with Scroll Snapping */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center snap-start">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="py-20 flex items-center justify-center snap-start">
            <About />
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 flex items-center justify-center snap-start">
            <Experience />
          </section>

          {/* Interests Section */}
          <section id="interests" className="py-20 flex items-center justify-center snap-start">
            <Interests />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 