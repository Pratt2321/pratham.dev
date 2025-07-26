'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-12 h-12 backdrop-blur-md border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        darkMode 
          ? 'bg-primary-800/80 border-primary-600' 
          : 'bg-white/80 border-white/20'
      }`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-6 h-6"
      >
        <motion.div
          initial={false}
          animate={{ opacity: darkMode ? 0 : 1, scale: darkMode ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={20} className="text-primary-600" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ opacity: darkMode ? 1 : 0, scale: darkMode ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon size={20} className="text-primary-600" />
        </motion.div>
      </motion.div>
    </motion.button>
  )
} 