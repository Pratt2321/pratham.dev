'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-primary-900 dark:text-primary-100">
              Driven by curiosity. Grounded in data.
            </h3>
            
            <div className="space-y-4 text-primary-700 dark:text-primary-300 leading-relaxed">
              <p>
                I'm a senior data science student at Michigan State University (MSU) obsessed with uncovering meaningful patterns, building intelligent systems, and making complex ideas easy to get. Whether I'm building machine learning models, visualizing stories, or leading the <a href="https://www.msuaiclub.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 underline font-medium">MSU AI Club</a>, I'm all about using data to solve real problems.
              </p>
              
              <p>
              With hands-on experience across research and analytics, I thrive where deep tech meets real-world impact. My work ranges from validating forecasting models in industry to prototyping narrative visualizations for academic conferences. I'm also active in <a href="https://www.instagram.com/msuspartahack/?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 underline font-medium">SpartaHack</a>, MSU's premier hackathon crew, helping students innovate and build.
              </p>
              
              <p>
              When I'm not building, I'm diving into internet mysteries or getting hyper-competitive in Spikeball.
              </p>
            </div>
          </motion.div>

                      {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.8 }}
            className="pt-8" /* Added top padding to align with left column text */
          >
                         {/* Skills */}
             <div>
               <div className="space-y-6">
                 {/* Data Science & ML */}
                 <div>
                   <h5 className="text-lg font-medium text-primary-700 dark:text-primary-300 mb-3 flex items-center gap-2">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                     </svg>
                     Data Science & Machine Learning
                   </h5>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {['Statistics', 'Data Visualization', 'A/B Testing', 'Deep Learning', 'RAG', 'AutoML'].map((skill, index) => (
                       <motion.div
                         key={skill}
                         initial={{ opacity: 0, y: 20 }}
                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                         transition={{ delay: 1 + index * 0.1 }}
                         whileHover={{ scale: 1.05 }}
                         className="px-4 py-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-lg hover:shadow-md transition-all duration-300"
                       >
                         <span className="font-medium text-blue-900 dark:text-blue-100">{skill}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* Programming & Development */}
                 <div>
                   <h5 className="text-lg font-medium text-primary-700 dark:text-primary-300 mb-3 flex items-center gap-2">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                     </svg>
                     Programming & Development
                   </h5>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {['Python', 'R', 'SQL', 'Git', 'Docker', 'AWS'].map((skill, index) => (
                       <motion.div
                         key={skill}
                         initial={{ opacity: 0, y: 20 }}
                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                         transition={{ delay: 1.2 + index * 0.1 }}
                         whileHover={{ scale: 1.05 }}
                         className="px-4 py-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-lg hover:shadow-md transition-all duration-300"
                       >
                         <span className="font-medium text-green-900 dark:text-green-100">{skill}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* Tools & Platforms */}
                 <div>
                   <h5 className="text-lg font-medium text-primary-700 dark:text-primary-300 mb-3 flex items-center gap-2">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M13 7H7v6h6V7z"/>
                       <path fillRule="evenodd" d="M7 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 14a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                     </svg>
                     Tools & Platforms
                   </h5>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                           {['PyTorch', 'Scikit-learn', 'Pandas', 'Dataiku', 'Tableau', 'Streamlit'].map((skill, index) => (
                       <motion.div
                         key={skill}
                         initial={{ opacity: 0, y: 20 }}
                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                         transition={{ delay: 1.4 + index * 0.1 }}
                         whileHover={{ scale: 1.05 }}
                         className="px-4 py-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 rounded-lg hover:shadow-md transition-all duration-300"
                       >
                         <span className="font-medium text-purple-900 dark:text-purple-100">{skill}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 