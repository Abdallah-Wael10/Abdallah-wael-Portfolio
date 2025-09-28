import React, { useEffect, useRef, useState } from 'react'
import html from "../../images/html.svg";
import js from "../../images/js.svg";
import nest from "../../images/nest.svg";
import next from "../../images/next.svg";
import mongo from "../../images/mongo.svg";
import express from "../../images/express.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import tailwind from "../../images/tailwind.svg";
import css from "../../images/css.svg";
import HeroSvg from "../../images/hero.svg";
import Image from 'next/image';
import github from "../../images/gh.svg";
import camera from "../../images/cam.svg";

const Herosection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({
        x: (clientX - centerX) / 50,
        y: (clientY - centerY) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techIcons = [
    { src: mongo, alt: "MongoDB", delay: "0ms" },
    { src: redux, alt: "Redux", delay: "200ms" },
    { src: tailwind, alt: "Tailwind", delay: "400ms" },
    { src: react, alt: "React", delay: "600ms" },
    { src: express, alt: "Express", delay: "800ms" },
    { src: js, alt: "JavaScript", delay: "1000ms" },
    { src: next, alt: "Next.js", delay: "1200ms" },
    { src: nest, alt: "NestJS", delay: "1400ms" }
  ];

  return (
    <div ref={heroRef} className='w-full flex flex-col justify-center items-center bg-transparent overflow-hidden'>
      {/* Text Section with Floating Icons */}
      <div className='relative w-full max-w-6xl flex flex-col justify-center items-center text-center px-4 sm:px-8 py-8 sm:py-16'>
        {/* Floating Tech Icons - ONLY visible on lg screens and above */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* Top Left - MongoDB */}
          <div 
            className={`absolute top-4 left-16 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-green-50
                       ${isVisible ? 'animate-slide-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              animationDelay: '0ms',
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
            }}
          >
            <Image src={mongo} alt="MongoDB" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Top Right - Redux */}
          <div 
            className={`absolute top-8 right-16 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-purple-50
                       ${isVisible ? 'animate-slide-in2 opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              animationDelay: '200ms',
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.3}px)` 
            }}
          >
            <Image src={redux} alt="Redux" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:-rotate-12" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Left Side - Tailwind */}
          <div 
            className={`absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-blue-50
                       ${isVisible ? 'animate-slide-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ 
              animationDelay: '400ms',
              transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.2}px)` 
            }}
          >
            <Image src={tailwind} alt="Tailwind" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:rotate-6" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Right Side - React */}
          <div 
            className={`absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-blue-50
                       ${isVisible ? 'animate-slide-in2 opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ 
              animationDelay: '600ms',
              transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * 0.2}px)` 
            }}
          >
            <Image src={react} alt="React" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:rotate-180" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Bottom Left - Express */}
          <div 
            className={`absolute bottom-20 left-20 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-gray-50
                       ${isVisible ? 'animate-slide-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              animationDelay: '800ms',
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * -0.3}px)` 
            }}
          >
            <Image src={express} alt="Express" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:-rotate-6" />
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Right Side Middle - JavaScript */}
          <div 
            className={`absolute top-3/4 right-20 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-yellow-50
                       ${isVisible ? 'animate-slide-in2 opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              animationDelay: '1000ms',
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.2}px)` 
            }}
          >
            <Image src={js} alt="JavaScript" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Bottom Center Left - Next.js */}
          <div 
            className={`absolute bottom-3 left-1/3 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-gray-50
                       ${isVisible ? 'animate-slide-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              animationDelay: '1200ms',
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.4}px)` 
            }}
          >
            <Image src={next} alt="Next.js" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:-rotate-12" />
            <div className="absolute -inset-1 bg-gradient-to-r from-black to-gray-700 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Bottom Center Right - NestJS */}
          <div 
            className={`absolute bottom-7 right-1/3 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center 
                       transition-all duration-1000 ease-out group hover:scale-110 hover:shadow-2xl hover:bg-red-50
                       ${isVisible ? 'animate-slide-in2 opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              animationDelay: '1400ms',
              transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.4}px)` 
            }}
          >
            <Image src={nest} alt="NestJS" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="transition-transform duration-300 group-hover:rotate-6" />
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Main Text Content with responsive spacing */}
        <div className='relative z-10 w-full max-w-4xl flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16 py-8'>
          
          {/* Professional Greeting */}
          <span className={`text-gray-600 text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 transition-all duration-1000 ease-out
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: '500ms' }}>
            Welcome to my  portfolio 👋
          </span>
          
          {/* Enhanced Name and Title */}
          <h1 className={`text-gray-900 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ animationDelay: '700ms' }}>
            I'm <span className="text-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Abdallah Wael
            </span>
          </h1>

          {/* Professional Role Description */}
          <div className={`mb-4 sm:mb-6 transition-all duration-1000 ease-out
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ animationDelay: '850ms' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold">
              with Solid Backend Understanding
            </p>
          </div>
          
          {/* Professional Description */}
          <p className={`text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-4xl leading-relaxed mb-6 sm:mb-8 transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ animationDelay: '900ms' }}>
            I specialize in crafting exceptional digital experiences through modern web technologies. 
            <br className="hidden sm:block" />
            My expertise spans <span className="font-semibold text-blue-600">React.js, Next.js, TypeScript,</span> and contemporary development practices, 
            <br className="hidden sm:block" />
            delivering scalable, user-centered solutions that drive business growth.
          </p>
          
          {/* Action Buttons with responsive sizing */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 ease-out
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ animationDelay: '1100ms' }}>
            <button className='group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-700 text-base sm:text-lg font-semibold rounded-2xl shadow-md 
                             border border-gray-200 overflow-hidden transition-all duration-300 
                             hover:shadow-2xl hover:scale-105 hover:-translate-y-1 w-full sm:w-auto'>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <a href="https://github.com/Abdallah-Wael10" target="_blank" className="relative flex items-center justify-center gap-2 z-10">
                <Image src={github} alt="GitHub" width={20} height={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="group-hover:text-blue-600 transition-colors duration-300">View GitHub</span>
              </a>
            </button>
            
            <button className='group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg font-semibold 
                             rounded-2xl shadow-md overflow-hidden transition-all duration-300 
                             hover:shadow-2xl hover:scale-105 hover:-translate-y-1 w-full sm:w-auto'>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="#contact" className="relative flex items-center justify-center gap-2 z-10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="group-hover:scale-105 transition-transform duration-300">Let's Connect</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Mockup Section with responsive sizing */}
      <div className={`w-full flex justify-center items-center mt-4 sm:mt-8 transition-all duration-1500 ease-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
           style={{ animationDelay: '1300ms' }}>
        <div className="w-full max-w-6xl px-2 sm:px-4 group">
          <Image 
            src={HeroSvg} 
            alt='Professional Dashboard Mockup showcasing modern web application design and user interface expertise' 
            className='w-full h-auto drop-shadow-xl sm:drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-3xl group-hover:scale-105' 
            width={1200} 
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Herosection