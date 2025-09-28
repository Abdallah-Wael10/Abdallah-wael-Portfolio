"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import MyImage from "../../images/bedo.jpeg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showImageModal, setShowImageModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openImageModal = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  // Handle scroll effect for navbar and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isOpen || showImageModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, showImageModal]);

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showImageModal) {
          closeImageModal();
        } else if (isOpen) {
          closeMenu();
        }
      }
    };

    if (showImageModal || isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, showImageModal]);

  const navItems = [
    { href: "#home", label: "Home", icon: "" },
    { href: "#about", label: "About", icon: "" },
    { href: "#projects", label: "Projects", icon: "" },
    { href: "#experience", label: "Experience", icon: "" },
    { href: "#contact", label: "Contact", icon: "" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`nav-container fixed top-0 left-0 gap-5 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="flex justify-center items-center px-3 sm:px-6 lg:px-8">
          <div className={`
            bg-white/90 backdrop-blur-xl shadow-2xl border border-white/40
            rounded-3xl transition-all duration-500 ease-in-out relative overflow-hidden
            ${scrolled ? 'w-full max-w-6xl px-4 sm:px-6 py-3' : 'w-full max-w-3xl px-6 sm:px-8 py-4'}
            lg:w-auto lg:max-w-none lg:px-8 xl:px-10 lg:py-4 xl:py-5
          `}>
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 via-purple-50/40 to-pink-50/60 opacity-70"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              
              {/* Enhanced Logo/Brand with Profile Image */}
              <div className="flex items-center">
                <div className="flex items-center space-x-4 mr-3">
                  
                  {/* Professional Profile Image */}
                  <button
                    onClick={openImageModal}
                    className="relative group focus:outline-none focus:ring-4 focus:ring-blue-500/30 rounded-full"
                  >
                    <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                      <Image
                        src={MyImage}
                        alt="Abdallah Wael - Frontend Developer"
                        fill
                        sizes="(max-width: 1024px) 48px, 56px"
                        className="rounded-full object-cover border-2 border-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                        priority
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Online Status Indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse shadow-sm"></div>
                    </div>
                  </button>
                  
                  {/* Brand Text - Always visible on desktop */}
                  <div className="hidden sm:block">
                    <h1 className="text-base lg:text-lg xl:text-xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Abdallah Wael
                    </h1>
                    <p className="text-xs lg:text-sm text-gray-500 font-medium -mt-1">
                      Frontend Developer
                    </p>
                  </div>
                  
                  {/* Mobile Brand */}
                  <div className="block sm:hidden">
                    <div>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Abdallah Wael
                      </span>
                      <p className="text-xs text-gray-500 font-medium -mt-0.5">
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.href)}
                    className={`
                      relative px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg xl:rounded-xl font-medium text-xs xl:text-sm
                      transition-all duration-300 ease-in-out group whitespace-nowrap
                      ${activeSection === item.href.slice(1)
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transform scale-105'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/70 hover:shadow-sm'
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center space-x-1 xl:space-x-1.5">
                      <span className="font-medium">{item.label}</span>
                    </span>
                    
                    {/* Enhanced hover effect */}
                    <div className={`
                      absolute inset-0 rounded-lg xl:rounded-xl transition-all duration-300
                      ${activeSection !== item.href.slice(1) 
                        ? 'bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10' 
                        : ''
                      }
                    `}></div>
                  </button>
                ))}
              </div>

              {/* Enhanced CTA Button - Desktop */}
              <div className="hidden lg:block">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="group relative px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg xl:rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-1.5 xl:space-x-2">
                    <span className="text-xs xl:text-sm font-medium">Let's Talk</span>
                    <svg className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Enhanced Mobile Menu Button */}
              <button
                className="lg:hidden p-3 rounded-xl hover:bg-gray-100/60 transition-all duration-200 group"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                  <span className={`
                    w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 absolute transition-all duration-300 ease-in-out
                    ${isOpen ? 'rotate-45' : '-translate-y-1.5'}
                  `}></span>
                  <span className={`
                    w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 absolute transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-0' : ''}
                  `}></span>
                  <span className={`
                    w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 absolute transition-all duration-300 ease-in-out
                    ${isOpen ? '-rotate-45' : 'translate-y-1.5'}
                  `}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 transition-all duration-300 ease-in-out lg:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Enhanced Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMenu}></div>
        
        {/* Enhanced Mobile Menu */}
        <div className={`
          absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl
          rounded-3xl shadow-2xl border border-white/40 p-8 overflow-hidden max-h-[calc(100vh-7rem)] overflow-y-auto
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}
        `}>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/60 opacity-70"></div>
          
          <div className="relative z-10">
            {/* Mobile Menu Header */}
            <div className="text-center mb-8 pb-6 border-b border-gray-200/60">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <div className="relative">
                  <Image
                    src={MyImage}
                    alt="Abdallah Wael"
                    width={60}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="rounded-full object-cover border-3 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Abdallah Wael
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">Frontend Developer</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500 font-medium">Available for work</span>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-3 mb-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    flex items-center px-6 py-5 rounded-2xl font-semibold text-lg
                    transition-all duration-300 ease-in-out group text-left
                    ${activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02] transform'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:scale-[1.01] hover:shadow-md'
                    }
                  `}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className={`
                    text-2xl mr-5 transition-all duration-300
                    ${activeSection === item.href.slice(1) ? 'scale-110' : 'group-hover:scale-110'}
                  `}>
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <svg 
                    className={`
                      w-5 h-5 transition-all duration-300
                      ${activeSection === item.href.slice(1) 
                        ? 'translate-x-1 opacity-100' 
                        : 'translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100'
                      }
                    `} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Mobile CTA Section */}
            <div className="space-y-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full group relative px-6 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="text-lg">Let's Connect</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/Abdallah-Wael10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/abdallah-wael-01a443301/?trk=public-profile-join-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href="mailto:abdallahwael558@gmail.com"
                  className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Professional Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-[100]  flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
            onClick={closeImageModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 w-full max-w-lg mx-auto overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/60 opacity-70"></div>
            
            {/* Close Button - Fixed */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-110 shadow-lg z-20 group"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 p-6 sm:p-8 text-center">
              {/* Profile Image */}
              <div className="relative inline-block mb-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                  <Image
                    src={MyImage}
                    alt="Abdallah Wael - Frontend Developer"
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="rounded-3xl object-cover shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 flex items-center space-x-2 bg-white rounded-full px-3 py-2 shadow-lg border border-gray-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Online</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Abdallah Wael
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                  Frontend Developer
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Passionate about creating exceptional digital experiences with modern web technologies. 
                  Specializing in React.js, Next.js, and contemporary development practices.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="w-full gap-3 flex justify-center items-center mb-6 flex-wrap">
                <div className="w-[40%] bg-white/60 rounded-2xl p-3 border border-white/40">
                  <div className="text-xl font-bold text-blue-600">2+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="w-[40%] bg-white/60 rounded-2xl p-3 border border-white/40">
                  <div className="text-xl font-bold text-purple-600">25+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    closeImageModal();
                    handleNavClick('#contact');
                  }}
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get In Touch</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </button>

                <a
                  href="https://github.com/Abdallah-Wael10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-white/80 text-gray-700 font-semibold rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-24 lg:h-28"></div>
    </>
  );
};

export default Nav;
