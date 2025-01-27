import React from 'react';
import Image from 'next/image';
import live from './image/live.svg'; // Live demo icon
import github from './image/github.svg'; // GitHub icon
import cardback from './image/cardback.jpg'; // Background card image

const Card = ({image,title,desc,githubb,livee}) => {
  return (
    <div className="flex justify-center items-center h-max bg-white max-330:w-[95%]">
      <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
        
        {/* Card Content */}
        <div className="p-4 text-center">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">{title}</h2>
          {/* Description */}
          <p className="text-gray-500 text-sm">
            {desc}
          </p>
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
            target='blank'
            className="flex items-center text-sm text-blue-500 hover:text-blue-700 transition duration-200"
          >
            <Image src={github} alt="GitHub icon" width={20} height={20} className="mr-2" />
            View Code
          </a>
          {/* Live Demo Button */}
          <a
            href={livee}
            target='blank'
            className="flex items-center text-sm text-blue-500  hover:text-blue-700 transition duration-200"
          >
            <Image src={live} alt="Live demo icon" width={20} height={20} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
