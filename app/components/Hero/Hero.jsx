import dynamic from "next/dynamic";
import banner from '@/public/images/banner.jpg';

const Jarallax = dynamic(() => import('../Jarallax/Jarallax'), { ssr: false });

const Hero = () => {
    return (
        <section className="bg-[url(/images/banner.jpg)] bg-center relative bg-cover w-full lg:h-[45rem] h-[24rem] transition-all flex items-center justify-center">

            <div className="absolute bottom-10 h-16 w-full xl:px-80 lg:px-20 md:px-12 px-8 py-2">
                <div className="space-x-5 h-full flex items-center justify-center">
                    <a href="https://enchantedcanvas.itch.io/galactic-dash" className="flex px-4 py-2 rounded-full font-Lapis bg-[#000000]/20 hover:bg-[#000000]/40 backdrop-blur-sm hover:cursor-pointer">
                        <svg className="h-6 w-6 text-[#ffffff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <h2 className="pl-1 hover:cursor-pointer">Web Browser</h2>
                    </a>
                    <a href="#" className="flex px-4 py-2 rounded-full font-Lapis bg-[#000000]/20 hover:bg-[#000000]/40 backdrop-blur-sm hover:cursor-pointer"> 
                        <svg className="h-6 w-6 text-[#ffffff]" fill="CurrentColor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Google Play" id="Google_Play"><path d="M10.09,8a1.94,1.94,0,0,1,1.28.28l13,7.39L21.08,19Zm-1,1A2.31,2.31,0,0,0,9,9.67V30.33a2.31,2.31,0,0,0,.09.67l11-11Zm12,12-11,11a1.88,1.88,0,0,0,1.28-.28l13-7.39Zm8.52-2.34-3.94-2.24L22.07,20l3.59,3.59,3.94-2.24C30.9,20.61,30.9,19.39,29.6,18.65Z" /></g></svg>
                        <h2 className="pl-1 hover:cursor-pointer">Google Play</h2>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Hero;