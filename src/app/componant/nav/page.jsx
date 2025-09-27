"use client";

import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="flex justify-center items-center px-4">
          <div className={`
            bg-white/95 backdrop-blur-md shadow-lg border border-white/20
            rounded-full transition-all duration-300 ease-in-out
            ${scrolled ? 'w-full max-w-4xl px-6 py-3' : 'w-full max-w-lg px-8 py-4'}
            md:w-auto md:max-w-none md:px-8 md:py-4
          `}>
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-800 md:hidden">
                  Portfolio
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="
                      relative text-gray-700 font-semibold text-lg
                      transition-all duration-300 ease-in-out
                      hover:text-[#4A3AFF] group
                    "
                  >
                    {item.label}
                    <span className="
                      absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A3AFF]
                      transition-all duration-300 ease-in-out
                      group-hover:w-full
                    "></span>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                  <span className={`
                    w-6 h-0.5 bg-gray-700 absolute transition-all duration-300 ease-in-out
                    ${isOpen ? 'rotate-45' : '-translate-y-1.5'}
                  `}></span>
                  <span className={`
                    w-6 h-0.5 bg-gray-700 absolute transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-0' : ''}
                  `}></span>
                  <span className={`
                    w-6 h-0.5 bg-gray-700 absolute transition-all duration-300 ease-in-out
                    ${isOpen ? '-rotate-45' : 'translate-y-1.5'}
                  `}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
        
        {/* Mobile Menu */}
        <div className={`
          absolute top-20 left-4 right-4  bg-white/95 backdrop-blur-md
          rounded-2xl shadow-2xl border border-white/20 p-6
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}
        `}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="
                  flex items-center px-4 py-3 rounded-xl
                  text-gray-700 font-semibold text-lg
                  transition-all duration-200 ease-in-out
                  hover:bg-[#5AA7FF]/10 hover:text-[#4A3AFF]
                  hover:translate-x-2 group
                "
              >
                <span className="
                  w-2 h-2 bg-[#4A3AFF] rounded-full mr-3 opacity-0
                  transition-all duration-200 ease-in-out
                  group-hover:opacity-100
                "></span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Additional mobile menu content */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-2 h-2 bg-[#4A3AFF] rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-500 font-medium">Abdallah Wael</span>
              <div className="w-2 h-2 bg-[#4A3AFF] rounded-full animate-pulse delay-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
};

export default Nav;
