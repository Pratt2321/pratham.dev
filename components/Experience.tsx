'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'GE Aerospace',
    location: 'Cincinnati, OH',
    period: 'May 2025 - August 2025',
    description: 'Contributed to ML projects at a global leader in jet engine manufacturing. Automated pipelines to enhance internal document search.',
    technologies: ['Python', 'SQL', 'RAG', 'AWS'],
    achievements: [
      'Improved forecasting accuracy by 10%',
      'Engineered a RAG pipeline for a 1000+ page document'
    ]
  },
  {
    title: 'Data Science Capstone',
    company: 'TechSmith',
    location: 'East Lansing, MI',
    period: 'January 2025 - May 2025',
    description: 'Developed churn prediction models using subscription data for a leading software platform. Designed dashboards to support visualizations.',
    technologies: ['Scikit-learn', 'Streamlit', 'AutoML'],
    achievements: [
      'Implemented a churn prediction model for 3000+ customers',
      'Deployed a Streamlit dashboard to generate heatmaps'
    ]
  },
  {
    title: 'Undergraduate Researcher',
    company: 'SLIM @ MSU',
    location: 'East Lansing, MI',
    period: 'September 2022 - Present',
    description: 'Joined a multidisciplinary research group specializing in computational imaging, neuroscience, and ML. Applied deep learning models to EEG data from meditation studies.',
    technologies: ['Deep Learning', 'PyTorch'],
    achievements: [
      'Submitted 2 abstracts to top-tier conferences',
      'Created group website; eliminated bot traffic'
    ]
  }
]

export default function Experience() {
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
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-primary-600" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row items-start`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-semibold text-primary-900 mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-primary-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {experience.location}
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-primary-700">
                      {experience.company}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-primary-700 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-primary-900 mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-primary-900 mb-2">Key Achievements</h5>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-primary-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </motion.div>
    </div>
  )
} 