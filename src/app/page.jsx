"use client";

import Image from "next/image";
import { useEffect,useState, useRef } from "react";
import Typed from "typed.js";
import Nav from "./componant/nav/page";
import bedo from "./images/bedoo.png";
import bluebedo from "./images/bedo devel.png";
import css from "./images/css.svg";
import html from "./images/html.svg";
import js from "./images/js.svg";
import next from "./images/next.svg";
import react from "./images/react.svg";
import redux from "./images/redux.svg";
import tailwind from "./images/tailwind.svg";
import About from "./componant/aboutme/page";
import Project from "./componant/project/page";
import Contact from "./componant/contact/page";
import Footer from "./componant/footer/page";

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

    const mainTyped = new Typed(mainHeadingRef.current, mainTypedOptions);
    const subTyped = new Typed(subHeadingRef.current, subTypedOptions);

    return () => {
      mainTyped.destroy();
      subTyped.destroy();
    };
  }, []);

  return (
    <div>
      <div
        id="home"
        className="bg-[url('/homeimage/backp.jpeg')] w-full bg-cover bg-no-repeat h-[790px]"
      >
        <Nav />
        <div className="w-full h-[620px] flex max-460:flex-col max-460:h-[680px]">
          {/* Left Section */}
          <div className="w-1/2 h-[600px] flex pt-20 pl-20 animate-slide-in max-460:w-full max-460:pt-0 max-330:pl-[20px] max-770:pl-3 max-1025:pl-3">
            <div className="w-[40%] h-[280px] pl-3 pt-4 transition-all duration-700 max-460:w-full max-770:w-full max-1025:w-full">
              <h1
                ref={mainHeadingRef}
                className="w-full h-[50px] text-white text-[24px] font-bold"
              ></h1>
              <p
                ref={subHeadingRef}
                className="w-full h-[160px] text-white text-[48px] font-bold"
              ></p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 h-[600px] flex flex-col justify-center items-center pb-20 animate-slide-in2 max-460:w-full">
            <div className="w-[300px] h-[300px] relative group">
              {/* Default Image */}
              <Image
                src={bedo}
                className="w-full h-full absolute transition-opacity duration-500 group-hover:opacity-0"
                alt="default-image"
              />
              {/* Hover Image */}
              <Image
                src={bluebedo}
                className="w-full h-full absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-110"
                alt="hover-image"
              />
            </div>
            <div className="w-full h-[50px] text-center mt-4">
              <h1 className="w-full h-[50px] text-[#5AA7FF] text-[20px] font-semibold animate-pulse">
                Fro<span className="text-white">nt-End Dev</span>eloper
              </h1>
            </div>
          </div>
        </div>
        <div
          id="skills"
          ref={skillsref}
          className={`w-full h-[95px] bg-black flex max-460:flex-col max-460:h-max max-460:justify-center max-460:items-center max-460:pb-3 max-1025:gap-[35px] `}
        >
          <div className="w-[30%] h-[95px]  flex justify-center items-center max-460:w-full">
            <div className="w-[60%%] h-[90px] flex justify-center items-center animate-slide-in2 max-460:w-[75%] ">
              <h1 className="w-[30%] h-[90px]  flex items-center justify-center text-white text-[48px] font-semibold ">
                +1
              </h1>
              <span className="w-[70%] h-[90px]  flex items-center justify-center text-white text-[24px] font-semibold pl-3">
                Year of Experienced
              </span>
            </div>
          </div>
          <div className={`w-[70%] h-[95px ]  flex justify-center items-center flex-wrap gap-20 animate-slide-in max-460:gap-8 max-460:mt-2  max-770:gap-[12px] ${ isVisible ? "animate-slide-in2 opacity-100" : "opacity-0"}`}>
            <Image className="w-[50px] h-[50px]" src={next} alt="next" />
            <Image className="w-[50px] h-[50px]" src={js} alt="js" />
            <Image className="w-[50px] h-[50px]" src={react} alt="react" />
            <Image className="w-[50px] h-[50px]" src={html} alt="html" />
            <Image className="w-[50px] h-[50px]" src={css} alt="css" />
            <Image className="w-[50px] h-[50px]" src={redux} alt="redux" />
            <Image className="w-[50px] h-[50px]" src={tailwind} alt="tailwind" />
          </div>
        </div>
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
