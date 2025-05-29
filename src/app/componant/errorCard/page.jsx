import React from 'react'
import Link from 'next/link'
const ErrorCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center animate-bounce">
            <svg 
              className="w-8 h-8 text-red-500"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Server Error
        </h2>
        
        <p className="text-gray-600 text-center mb-8">
          The Railway trial server has ended. We are currently working on resolving this issue.
        </p>
        
        <div className="flex justify-center">
          <Link href="/" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-200 active:scale-95">
            Try Again Later
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorCard
