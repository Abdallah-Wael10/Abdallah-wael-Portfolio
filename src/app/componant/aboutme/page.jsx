"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import lap from "../../images/lap.svg";
const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutref = useRef(null);
  
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
    <div id='about' ref={aboutref} className={`w-full h-[500px] bg-white flex max-460:flex-col max-460:h-[800px] max-770:flex-col  max-770:h-[inherit] ${isVisible ? "animate-slide-in2 opacity-100" : "opacity-0"}`}>
      <div className='w-[60%] h-[500px] flex justify-center items-center max-460:w-full max-770:w-full '>
        <div className='w-[100%] h-[300px] ml-5 pl-7 pt-4 pr-3 bg-white rounded-[22px] border-solid border-[1px] border-gray-300 max-460:h-[inherit] max-460:flex max-460:flex-col max-460:gap-5 max-460:m-0 max-330:h-[580px]'>
            <h1 className='w-full h-[50px]  text-[36px] text-[#5AA7FF] font-semibold'>About me</h1>
            <p className='w-full h-[60px] text-black text-[20px] font-normal'>Hi l'm <span className=' font-black'>Abdallah Wael</span> ,<br /> A Web Developer with 1+ years of experience from Egypt based in Cairo.</p>
            <br />
            <p className='w-full h-[90px] text-[20px] text-black font-normal'>
            I am a Front-End Developer specializing in Next.js,Tailwind Css skilled in building responsive, high-performance websites with a focus on clean design and thorough testing. I learn quickly, adapt to new technologies, and  understanding of back-end development with Node.js, Express, and MongoDB</p>
        </div>
      </div>
      <div className='w-[40%] h-[500px] flex justify-center items-center max-460:w-full max-770:w-full '><Image src={lap} alt='laptop icon'/></div>
    </div>
  )
}

export default About
