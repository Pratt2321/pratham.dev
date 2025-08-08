'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Interests from '@/components/Interests'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

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