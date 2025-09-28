"use client"
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      
      {/* Radar Loader */}
      <div className="relative mb-8">
        <div className="radar-loader">
          <span className="radar-sweep"></span>
        </div>
      </div>

      {/* Branding */}
      <div className="text-center space-y-4">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Abdallah Wael
        </div>
        <p className="text-gray-400 text-sm">
          Frontend Developer
        </p>
        <div className="text-blue-400 text-sm animate-pulse">
          Loading...
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .radar-loader {
          position: relative;
          width: 150px;
          height: 150px;
          background: transparent;
          border-radius: 30%;
          box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.6);
          border: 1px solid #3B82F6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .radar-loader::before {
          content: "";
          position: absolute;
          inset: 20px;
          background: transparent;
          border: 1px dashed #8B5CF6;
          border-radius: 30%;
          box-shadow: 
            inset -5px -5px 25px rgba(59, 130, 246, 0.15),
            inset 5px 5px 35px rgba(139, 92, 246, 0.1);
        }

        .radar-loader::after {
          content: "";
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 30%;
          border: 1px dashed #EC4899;
          box-shadow: 
            inset -5px -5px 25px rgba(236, 72, 153, 0.2),
            inset 5px 5px 35px rgba(236, 72, 153, 0.15);
        }

        .radar-sweep {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 100%;
          background: transparent;
          transform-origin: top left;
          animation: radar-spin 1s linear infinite;
          border-top: 1px dashed #A855F7;
        }

        .radar-sweep::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899);
          transform-origin: top left;
          transform: rotate(-55deg);
          filter: blur(30px) drop-shadow(20px 20px 20px rgba(59, 130, 246, 0.3));
        }

        @keyframes radar-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Floating background elements */
        .radar-loader::after {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;
