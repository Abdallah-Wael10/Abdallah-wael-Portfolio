"use client";

import Image from "next/image";
import { useEffect,useState, useRef } from "react";
import Typed from "typed.js";
import Nav from "./componant/nav/page";

import About from "./componant/aboutme/page";
import Project from "./componant/project/page";
import Contact from "./componant/contact/page";
import Footer from "./componant/footer/page";
import ErrorCard from "./componant/errorCard/page"; 
import Herosection from "./componant/HeroSection/Herosection";

export default function Home() {
      const [isVisible, setIsVisible] = useState(false);
      const skillsref = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          {
            threshold: 0.1, // Trigger when 10% of the component is visible
          }
        );
    
        if (skillsref.current) {
          observer.observe(skillsref.current);
        }
    
        return () => {
          if (skillsref.current) {
            observer.unobserve(skillsref.current);
          }
        };
      }, []);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    const mainTypedOptions = {
      strings: ["Hello 👋🏼"], // Main heading animation
      typeSpeed: 75,
      showCursor: false,
    };

    const subTypedOptions = {
      strings: [
        `I'm <span style="color: #5AA7FF;">a Web Dev</span>eloper`,
        "I Work as a <span style='color: #5AA7FF;'>Front-End Dev</span>eloper",
      ],
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 1000,
      loop: true,
      contentType: "html", // Allows HTML rendering in strings
    };

  

    return () => {
      mainTyped.destroy();
      subTyped.destroy();
    };
  }, []);

  return (
    <div>
      <div
        id="home" className="bg-[url('/homeimage/bg.jpg')] w-full bg-cover bg-no-repeat  aspect-[32/30]">
       <Nav />
       <div className="w-full h-max flex justify-center items-center mt-16">
        <Herosection />
       </div>
        <About />
        <Project />
        {/* <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}
