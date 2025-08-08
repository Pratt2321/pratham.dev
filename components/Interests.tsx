'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Music, Heart, Utensils, Users, Tv, Code, Brain } from 'lucide-react'

const interests = [
  {
    title: 'Workout & Fitness',
    description: 'Staying active and healthy through regular workouts, weight training, and maintaining peak physical condition.',
    icon: Dumbbell,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    link: null
  },
  {
    title: 'Music',
    description: 'Exploring different genres, discovering new artists, and finding the perfect soundtrack for every moment.',
    icon: Music,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    link: 'https://open.spotify.com/user/kzt594yybncir90pdvcbtypqj?si=15a6b83d4fce47a7' // Add your Spotify profile
  },
  {
    title: 'Spikeball',
    description: 'Playing competitive spikeball matches with friends, improving hand-eye coordination and having a blast outdoors.',
    icon: Heart,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    link: 'https://www.instagram.com/msuroundnet/?hl=en'
  },
  {
    title: 'Food',
    description: 'Tasting diverse cuisines, trying new restaurants, and appreciating the art of cooking and dining.',
    icon: Utensils,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    link: 'https://beliapp.com/app/prathampradhan' // Add your food Instagram
  },
  {
    title: 'Mental Math',
    description: 'Ranking top 1000 globally in Matiks. Sharpening cognitive skills through rapid mental calculations.',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    link: 'https://www.matiks.in/profile/prathampradhan'
  },
  {
    title: 'Anime',
    description: 'Watching and discussing anime series, appreciating the storytelling and artistic creativity in Japanese animation.',
    icon: Tv,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    link: 'https://myanimelist.net/animelist/prathampradhan?status=7' // Add your MyAnimeList
  }
]

const sideProjects = [
  {
    title: 'Portfolio Website',
    description: 'This very website! Built with Next.js, TypeScript, and Tailwind CSS for a modern, responsive experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/pratt2321/prathampradhan.dev'
  },
  {
    title: 'Credit Card Insights',
    description: 'Interactive dashboard helping users unlock the best beginner-level credit cards with data-driven insights and recommendations.',
    tech: ['Python', 'Streamlit', 'Data Analysis'],
    link: 'https://creditcompass.streamlit.app/'
  },
  {
    title: 'EEG Research Poster',
    description: 'Research poster on EEG signal processing and analysis. Exploring brain-computer interfaces and neural data interpretation.',
    tech: ['Python', 'Signal Processing', 'Neuroscience'],
    link: '/eeg-poster' // Link to embedded poster viewer
  }
]

export default function Interests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="container-max section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Interests & Side Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"
          />
        </div>

        {/* Personal Interests */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-display font-semibold text-center mb-12 text-primary-900"
          >
            Beyond the Data
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 rounded-xl border-2 ${interest.bgColor} ${interest.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                onClick={() => interest.link && window.open(interest.link, '_blank')}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${interest.color} flex items-center justify-center mb-4`}>
                  <interest.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-primary-900 mb-2">
                  {interest.title}
                </h4>
                <p className="text-primary-700 text-sm leading-relaxed">
                  {interest.description}
                </p>
                {interest.link && (
                  <div className="mt-3 text-xs text-primary-600 opacity-75">
                    Click to visit →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Side Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            className="text-2xl font-display font-semibold text-center mb-12 text-primary-900"
          >
            Side Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-primary-900 mb-3">
                  {project.title}
                </h4>
                <p className="text-primary-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
                >
                  View Project
                  <Code size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spacing before footer */}
        <div className="h-16"></div>

      </motion.div>
    </div>
  )
} 