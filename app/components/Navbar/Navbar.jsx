import Image from "next/image";
import CERBERUS_GAMES_LOGO from '@/public/images/cerberus-games-gradient-logo.svg';

const Navbar = () => {
    return (
        <div className='flex flex-col fixed w-full z-[1000]'>
            <div className="p-[1px] pt-0 rounded-b-3xl w-full flex items-center bg-gradient-to-r from-grad-pink via-grad-yellow to-grad-blue">
                <nav className='3xl:h-24 h-16 w-full flex items-center rounded-b-3xl bg-gray-mid from-white/10 backdrop-saturate-[.6] to-white/[.05] shadow-sm backdrop-blur-sm xl:px-24 lg:px-20 md:px-12 px-8'>
                    <div className='Logo-Container h-full 3xl:w-[24rem] w-[16rem] flex'>
                        <Image alt="Cerberus Logo" src={CERBERUS_GAMES_LOGO} />
                    </div>
                    <div className='flex-grow'></div>
                    <div className='md:flex hidden 3xl:text-xl text-lg tracking-wider transition-all space-x-7 text-off-white font-poppins font-[300]'>
                        <a href="#">Home</a>
                        <a href="#">Updates</a>
                        <a href="#">About Us</a>
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