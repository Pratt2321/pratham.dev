import React from 'react'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Pratham - Data Scientist',
  description: 'Personal website of Pratham, a data scientist passionate about machine learning, analytics, and building data-driven solutions.',
  keywords: ['data scientist', 'machine learning', 'analytics', 'python', 'sql'],
  authors: [{ name: 'Pratham' }],
  openGraph: {
    title: 'Pratham - Data Scientist',
    description: 'Personal website of Pratham, a data scientist passionate about machine learning, analytics, and building data-driven solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 