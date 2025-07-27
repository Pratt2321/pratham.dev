'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex justify-between items-center">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-display font-bold text-white">
                Pratham
              </h3>
              <h3 className="text-4xl font-display font-bold text-white">
                Pradhan
              </h3>
            </motion.div>
            
            {/* Social Links - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              {/* Top Row */}
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/pratt2321"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-primary-300 hover:text-white hover:bg-primary-800 rounded-full transition-all duration-200"
                >
                  <Github size={24} />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/prathampradhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-primary-300 hover:text-white hover:bg-primary-800 rounded-full transition-all duration-200"
                >
                  <Linkedin size={24} />
                </motion.a>
                
                <motion.a
                  href="mailto:pradha11@msu.edu"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-primary-300 hover:text-white hover:bg-primary-800 rounded-full transition-all duration-200"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
              
              {/* Bottom Row */}
              <div className="flex gap-4">
                                        <motion.a
                          href="https://instagram.com/prathampradhan23"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 text-primary-300 hover:text-white hover:bg-primary-800 rounded-full transition-all duration-200"
                        >
                          <Instagram size={24} />
                        </motion.a>
                        
                        <motion.a
                          href="https://medium.com/@prathampradhan23"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 text-primary-300 hover:text-white hover:bg-primary-800 rounded-full transition-all duration-200"
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
                          className="p-3 text-primary-300 hover:text-white hover:bg-primary-800 rounded-full transition-all duration-200"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                          </svg>
                        </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 