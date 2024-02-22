import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const FullscreenDiv = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(true), 1000); // Use timeout instead of setInterval for precision
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`w-screen h-screen z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75 transition-all duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-0 right-0 mt-4 mr-4 text-white z-10">
        <button onClick={handleClose}>
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 011.414 1.414l-5.293 5.293L10.586 14l-5.293-5.293zM14.707 14.707a1 1 0 01-1.414 0L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414l5.293-5.293L9.414 8.586l5.293 5.293z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <Image
        src="/images/banner_image.png" // Replace with your image path
        alt="Fullscreen image"
        width={800}
        height={600}
        layout="responsive"
        priority
        quality={80}
      />
      <div className="mt-8 flex gap-4 items-center justify-center">
        {/* Add your centered buttons here, e.g.: */}
        <button className="w-24 px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-all duration-200">Button 1</button>
        <button className="w-24 px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-800 transition-all duration-200">Button 2</button>
      </div>
    </div>
  );
};

export default FullscreenDiv;
