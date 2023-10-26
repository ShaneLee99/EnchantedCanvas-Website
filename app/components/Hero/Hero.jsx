import dynamic from "next/dynamic";
const Jarallax = dynamic(() => import('../Jarallax/Jarallax'), { ssr: false });

const Hero = () => {
    return (
        <section className="relative w-full h-full min-h-screen flex items-center justify-center">
            <Jarallax className='relative w-full h-screen bg-cover jarallax' videoSrc="https://www.youtube.com/watch?v=hO2FdNutFnc" speed={0.2}>
                <div className='z-30 h-screen w-full absolute flex items-center justify-center bg-gradient-to-b backdrop-blur-[1px] from-transparent to-black/90 via-black/50'>
                    <h2 className='font-bold text-7xl z-30 bg-gradient-to-r from-grad-pink via-grad-yellow to-grad-blue text-transparent bg-clip-text'>GREAT THINGS WAITING TO BE UNEARTHED</h2>
                    <h2 className='absolute translate-x-[4px] z-20 translate-y-[4px] font-bold text-7xl text-[rgba(0,0,0,0.25)]'>GREAT THINGS WAITING TO BE UNEARTHED</h2>
                </div>
            </Jarallax>
        </section>
    );
};

export default Hero;