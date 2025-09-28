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
import Experiance from "./componant/experiance/Experiance";
import Loading from "./componant/loading/Loading";
export default function Home() {
      const [isLoading, setIsLoading] = useState(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
   
      if (isLoading) {
        return <Loading />;
      }


  return (
    <div>
      <div
        id="home" className="bg-[url('/homeimage/bg.jpg')] w-full bg-cover bg-no-repeat  aspect-[32/30]">
       <Nav />
       <div className="w-full h-max flex justify-center items-center mt-16">
        <Herosection />
       </div>
        <About />
        <Experiance />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
