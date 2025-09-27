"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import lap from "../../images/lap.svg";
import js from "../../images/js.svg";
import nest from "../../images/nest.svg";
import next from "../../images/next.svg";
import mongo from "../../images/mongo.svg";
import express from "../../images/express.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import tailwind from "../../images/tailwind.svg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const aboutref = useRef(null);

  const techStack = [
    { 
      src: react, 
      alt: "React", 
      name: "React",
      category: "Frontend",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      src: next, 
      alt: "Next.js", 
      name: "Next.js",
      category: "Framework",
      color: "from-gray-700 to-gray-900"
    },
    { 
      src: tailwind, 
      alt: "Tailwind", 
      name: "Tailwind",
      category: "Styling",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      src: js, 
      alt: "JavaScript", 
      name: "JavaScript",
      category: "Language",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      src: redux, 
      alt: "Redux", 
      name: "Redux",
      category: "State Management",
      color: "from-purple-500 to-purple-700"
    },
    { 
      src: nest, 
      alt: "NestJS", 
      name: "NestJS",
      category: "Backend",
      color: "from-red-500 to-pink-600"
    },
    { 
      src: express, 
      alt: "Express", 
      name: "Express",
      category: "Backend",
      color: "from-gray-600 to-gray-800"
    },
    { 
      src: mongo, 
      alt: "MongoDB", 
      name: "MongoDB",
      category: "Database",
      color: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (aboutref.current) {
      observer.observe(aboutref.current);
    }

    return () => {
      if (aboutref.current) {
        observer.unobserve(aboutref.current);
      }
    };
  }, []);

  return (
    <section id='about' ref={aboutref} className='w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 overflow-hidden'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ease-out
                          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
               style={{ animationDelay: '200ms' }}>
            
            <div className="relative p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100">
                
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Abdallah Wael
                    </span>
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A passionate <span className="font-semibold text-blue-600">Web Developer</span> with 
                  <span className="font-semibold text-purple-600"> 1+ years of experience</span> from Egypt, 
                  based in Cairo.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Frontend Specialist:</span> Expert in Next.js, React, and Tailwind CSS, 
                      creating responsive, high-performance websites with clean, modern designs.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Full-Stack Knowledge:</span> Solid understanding of backend 
                      development with Node.js, Express, NestJS, and MongoDB.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Growth Mindset:</span> Quick learner who adapts to new technologies 
                      and delivers user-friendly experiences with thorough testing.
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className={`relative transition-all duration-1000 ease-out
                          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
               style={{ animationDelay: '400ms' }}>
            
            <div className="relative group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image 
                    src={lap} 
                    alt='Professional Developer Setup' 
                    className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out'
                    width={600}
                    height={400}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                

                

              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={`transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ animationDelay: '600ms' }}>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Stack</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 
                           hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-500 ease-out cursor-pointer
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Gradient background animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-15 
                               rounded-2xl transition-all duration-500`}></div>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 
                               rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
                
                {/* Tech content - always visible */}
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  {/* Tech icon */}
                  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <Image 
                      src={tech.src} 
                      alt={tech.alt} 
                      width={40} 
                      height={40}
                      className="transition-all duration-500"
                    />
                  </div>
                  
                  {/* Tech details - always visible with enhanced hover */}
                  <div className="text-center">
                    <p className={`text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-all duration-300
                                  ${hoveredTech === index ? 'scale-110' : 'scale-100'}`}>
                      {tech.name}
                    </p>
                    <p className={`text-xs text-gray-500 group-hover:text-gray-600 transition-all duration-300 mt-1
                                  ${hoveredTech === index ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-70'}`}>
                      {tech.category}
                    </p>
                  </div>


                </div>

                {/* Hover border effect */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300`}
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default About
