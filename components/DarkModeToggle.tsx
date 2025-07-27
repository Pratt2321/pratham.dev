'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  const [isDiscoMode, setIsDiscoMode] = useState(false)
  const [lastTap, setLastTap] = useState(0)

  const handleClick = () => {
    const now = Date.now()
    const DOUBLE_TAP_DELAY = 300

    if (now - lastTap < DOUBLE_TAP_DELAY) {
      // Double tap detected - trigger disco mode
      setIsDiscoMode(true)
      setTimeout(() => setIsDiscoMode(false), 5000) // Disco mode lasts 5 seconds
    } else {
      // Single tap - toggle dark mode
      setDarkMode(!darkMode)
    }
    setLastTap(now)
  }

  // Disco mode effect
  useEffect(() => {
    if (isDiscoMode) {
      const discoInterval = setInterval(() => {
        const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        document.documentElement.style.setProperty('--disco-color', randomColor)
      }, 200)

      return () => {
        clearInterval(discoInterval)
        document.documentElement.style.removeProperty('--disco-color')
      }
    }
  }, [isDiscoMode])

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={`relative w-12 h-12 backdrop-blur-md border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        isDiscoMode 
          ? 'animate-pulse' 
          : darkMode 
            ? 'bg-primary-800/80 border-primary-600' 
            : 'bg-white/80 border-white/20'
      }`}
      style={isDiscoMode ? { 
        background: 'linear-gradient(45deg, var(--disco-color, #ff0000), #00ff00, #0000ff, #ffff00)',
        backgroundSize: '400% 400%',
        animation: 'disco 1s ease-in-out infinite'
      } : {}}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: darkMode ? 180 : 0,
          scale: isDiscoMode ? [1, 1.2, 1] : 1
        }}
        transition={{ 
          duration: 0.3,
          scale: isDiscoMode ? { duration: 0.5, repeat: Infinity } : {}
        }}
        className="relative w-6 h-6"
      >
        <motion.div
          initial={false}
          animate={{ 
            opacity: darkMode ? 0 : 1, 
            scale: darkMode ? 0 : 1,
            color: isDiscoMode ? '#ffffff' : 'currentColor'
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={20} className={isDiscoMode ? 'text-white' : 'text-primary-600'} />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ 
            opacity: darkMode ? 1 : 0, 
            scale: darkMode ? 1 : 0,
            color: isDiscoMode ? '#ffffff' : 'currentColor'
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon size={20} className={isDiscoMode ? 'text-white' : 'text-primary-600'} />
        </motion.div>
      </motion.div>
    </motion.button>
  )
} 