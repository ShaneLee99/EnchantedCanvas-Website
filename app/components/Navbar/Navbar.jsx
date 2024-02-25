import Image from "next/image";
import CERBERUS_GAMES_LOGO from '@/public/images/enchantedcanvas.png';


const Navbar = () => {
  return (
    <div className='flex flex-col fixed w-full z-[1000]'>
      <div className="bg-gradient-to-b from-pink/100 to-transparent via-pink/30 backdrop-blur-sm ">
        <nav className='h-20 w-full flex items-center xl:px-40 lg:px-20 md:px-12 px-8'>
          <div className='Logo-Container transition-all h-auto xl:w-[20rem] w-[15rem] flex'>
            <Image src={CERBERUS_GAMES_LOGO} />
          </div>
          <div className='flex-grow'></div>
          <div className='md:flex hidden 31xl:text-xl text-xl tracking-wider transition-all space-x-5 text-white font-Lapis font-[300]'>
            <a href="#">Home</a>
            <a href="#">Games</a>
            <a href="#">Blog</a>
            <a href="/aboutus">About Us</a>
            <a href="#">Contact</a>
          </div>
          <div className="md:hidden flex transition-all text-off-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
