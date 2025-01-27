"use client";

import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <div className="w-full h-20 bg-transparent flex justify-center items-center gap-6 md:gap-8">
        <button
          className="md:hidden text-white text-[24px]"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <div className="hidden md:flex gap-6">
          <a
            href="#home"
            className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          >
            Projects
          </a>
          <a
            href="#hire-me"
            className="hover:text-[#5AA7FF] transition-all duration-700 bg-white text-[#5AA7FF] px-4 py-2 rounded-[12px]"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-20 w-full bg-[#00000080] flex flex-col items-center gap-4 py-4 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <a
          href="#home"
          className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          onClick={toggleMenu}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-[#5AA7FF] transition-all duration-700 text-white text-[20px] font-bold"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href="#hire-me"
          className="animate-bounce w-[25%] h-[38px] rounded-[40px] hover:text-[#5AA7FF]   transition-all duration-700 bg-white text-[#5AA7FF] px-6 py-2  max-376:w-[28%] max-330:w-[35%]"
          onClick={toggleMenu}
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Nav;
