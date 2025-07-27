'use client'

import { useState, useRef, useEffect } from 'react'

export default function EEGPoster() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <iframe
              src="https://drive.google.com/file/d/1zZ5SjRptsbOuIb3W9F9sEejdlVcS11sF/preview"
              width="100%"
              height="800px"
              frameBorder="0"
              title="EEG Research Poster"
              className="w-full"
            />
          </div>
          
          <div className="p-4 text-center">
            <p className="text-gray-600 text-sm">
              Use browser zoom (Ctrl/Cmd + scroll) to view details
            </p>
            <a 
              href="https://drive.google.com/file/d/1zZ5SjRptsbOuIb3W9F9sEejdlVcS11sF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open in Google Drive
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 