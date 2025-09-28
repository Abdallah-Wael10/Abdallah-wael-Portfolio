"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import live from './image/live.svg';
import github from './image/github.svg';

const Card = ({ image, title, desc, githubb, livee, status, tech = [], featured = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrivateMessage, setShowPrivateMessage] = useState(false);
  const [messageType, setMessageType] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleGithubClick = (e) => {
    if (status === 'Private' || !githubb) {
      e.preventDefault();
      setMessageType('github');
      setShowPrivateMessage(true);
    }
  };

  const handleLiveClick = (e) => {
    if (status === 'Private' || !livee) {
      e.preventDefault();
      setMessageType('live');
      setShowPrivateMessage(true);
    }
  };

  const closeMessage = () => {
    setShowPrivateMessage(false);
    setMessageType('');
  };

  // Private Message Modal
  if (showPrivateMessage) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform animate-fade-in-scale border border-gray-100">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 0h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            🔒 Private Repository
          </h3>
          
          <p className="text-center text-gray-600 mb-6 leading-relaxed">
            {messageType === 'github' 
              ? "This GitHub repository contains proprietary code and is not publicly accessible due to confidentiality agreements."
              : "The live demo for this project is restricted due to client privacy and security requirements."
            }
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-4 mb-8">
            <p className="text-center text-sm text-gray-500">
              <span className="font-medium">💼 Commercial Project</span>
              <br />
              Source code available upon request for evaluation purposes.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={closeMessage}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-medium transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group w-full max-w-sm mx-auto transition-all duration-1000 ${
        isVisible ? 'animate-slide-in opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
        featured 
          ? 'shadow-2xl shadow-indigo-500/10 border-2 border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/20' 
          : 'shadow-xl border border-gray-100 hover:shadow-2xl'
      } ${isHovered ? '-translate-y-3 scale-[1.02]' : ''}`}>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ⭐ Featured
            </div>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            status === 'Public' 
              ? 'bg-green-100/90 text-green-700 border border-green-200' 
              : 'bg-orange-100/90 text-orange-700 border border-orange-200'
          }`}>
            {status}
          </div>
        </div>

        {/* Card Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image 
            src={image} 
            alt={`${title} project screenshot`} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className={`transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-80' : 'opacity-40'
          }`} />
          
          {/* Tech Stack Overlay */}
          {tech.length > 0 && (
            <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}>
              <div className="flex flex-wrap gap-2">
                {tech.slice(0, 3).map((techItem, index) => (
                  <span 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30"
                  >
                    {techItem}
                  </span>
                ))}
                {tech.length > 3 && (
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30">
                    +{tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {desc}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* GitHub Button */}
            <a
              href={status === 'Public' && githubb ? githubb : '#'}
              target={status === 'Public' && githubb ? "_blank" : "_self"}
              onClick={handleGithubClick}
              className={`flex-1 flex items-center justify-center h-12 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                status === 'Public' && githubb
                  ? 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Image src={github} alt="GitHub" width={18} height={18} className="mr-2 opacity-80" />
              Code
            </a>

            {/* Live Demo Button */}
            <a
              href={status === 'Public' && livee ? livee : '#'}
              target={status === 'Public' && livee ? "_blank" : "_self"}
              onClick={handleLiveClick}
              className={`flex-1 flex items-center justify-center h-12 rounded-2xl text-sm font-medium transition-all duration-300 ${
                status === 'Public' && livee
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Image src={live} alt="Live demo" width={18} height={18} className="mr-2 opacity-80" />
              Demo
            </a>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
