import Image from "next/image";
import CERBERUS_GAMES_LOGO from '@/public/images/enchantedcanvas.png';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col fixed w-full z-[1000]">
      <div className="bg-gradient-to-b from-pink/100 to-transparent via-pink/30 backdrop-blur-sm ">
        <nav className="h-20 w-full flex items-center xl:px-40 lg:px-20 md:px-12 px-8">
          <div className="Logo-Container transition-all h-auto xl:w-[20rem] w-[15rem] flex">
            <Image src={CERBERUS_GAMES_LOGO} />
          </div>
          <div className="flex-grow"></div>

          {/* Desktop navigation links (always visible) */}
          <div className="hidden md:flex space-x-5 text-white font-Lapis font-[300] text-2xl">
            <a href="#" className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Home</a>
            <a href="#" className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Games</a>
            <a href="#" className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Blog</a>
            <a href="/aboutus" className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">About Us</a>
            <a href="#" className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Contact</a>
          </div>

          {/* Mobile navigation links (hidden initially, shown on click) */}
          <div className={`md:hidden absolute top-14 left-95 right-9 h-50 p-8 shadow-lg shadow-black bg-[#5e2679] backdrop-blur-lg transition-opacity ${
            isOpen ? "opacity-100 z-50" : "opacity-0 z-10" // Adjust z-index for positioning
          }`}>
            <div className="flex flex-col space-y-2 text-white font-Lapis font-[300] text-xl">
              <a href="#" onClick={toggleMenu} className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Home</a>
              <a href="#" onClick={toggleMenu} className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Games</a>
              <a href="#" onClick={toggleMenu} className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Blog</a>
              <a href="/aboutus" onClick={toggleMenu} className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">About Us</a>
              <a href="#" onClick={toggleMenu} className="mx-2 hover:cursor-pointer hover:scale-110 hover:shadow-md">Contact</a>
            </div>
          </div>

          {/* Hamburger menu button (only visible on smaller screens) */}
          <button
            className="md:hidden flex items-center justify-center focus:outline-none text-off-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
