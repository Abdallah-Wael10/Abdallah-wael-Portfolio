"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import live from './image/live.svg'; // Live demo icon
import github from './image/github.svg'; // GitHub icon

const Card = ({ image, title, desc, githubb, livee }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex justify-center items-center h-max bg-white max-330:w-[95%] transition-opacity duration-1000 ${
        isVisible ? 'animate-slide-in opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
        {/* Card Content */}
        <div className="p-4 text-center">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">{title}</h2>
          {/* Description */}
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>

        {/* Card Image */}
        <div className="relative w-full h-52">
          <Image src={image} alt="Card background" layout="fill" objectFit="cover" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-evenly items-center border-t mt-4 py-4">
          {/* View Code Button */}
          <a
            href={githubb}
            target="_blank"
            className="flex items-center justify-center w-28 h-10 bg-blue-100 rounded-lg text-sm text-blue-500 hover:bg-blue-200 transition duration-200"
          >
            <Image src={github} alt="GitHub icon" width={24} height={24} className="mr-2" />
            View Code
          </a>
          {/* Live Demo Button */}
          <a
            href={livee}
            target="_blank"
            className="flex items-center justify-center w-28 h-10 bg-blue-100 rounded-lg text-sm text-blue-500 hover:bg-blue-200 transition duration-200"
          >
            <Image src={live} alt="Live demo icon" width={24} height={24} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
