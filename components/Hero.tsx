'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container-max section-padding text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-primary-600 mb-4 font-medium"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6"
        >
          <span className="gradient-text">Pratham</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-primary-700 mb-8 font-medium"
        >
          Data Scientist & ML Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-primary-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I transform complex data into actionable insights, building intelligent systems 
          that drive business decisions and create meaningful impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            Learn More
            <ArrowDown size={20} />
          </motion.button>
          
          <motion.a
            href="https://resume.prathampradhan.dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-primary-300 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200 inline-block"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center items-center gap-6"
        >
          <motion.a
            href="https://github.com/pratt2321"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-full transition-all duration-200"
          >
            <Github size={24} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/prathampradhan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-full transition-all duration-200"
          >
            <Linkedin size={24} />
          </motion.a>
          
          <motion.a
            href="mailto:pradha11@msu.edu"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-full transition-all duration-200"
          >
            <Mail size={24} />
          </motion.a>
          
          <motion.a
            href="https://instagram.com/prathampradhan23"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-full transition-all duration-200"
          >
            <Instagram size={24} />
          </motion.a>
          
          <motion.a
            href="https://medium.com/@prathampradhan23"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-full transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="https://beliapp.com/app/prathampradhan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-full transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
} 