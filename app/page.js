'use client'
import { useState } from 'react';
/*import FullscreenDiv from './components/utils/PopUp';*/
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SocialWidget from './components/SocialWidget/SocialWidget';
import TeamWidget from './components/TeamWidget/TeamWidget';
import PopupWidget from './components/PopupWidget/PopupWidget';
import ParticleEffect from './components/ParticleEffect/ParticleEffect';
import Image from 'next/image';
import Blog from './components/Blog/Blog';

import X_ICON from '@/public/images/icons/x-icon-unlit.svg';
import DISCORD_ICON from '@/public/images/icons/discord-icon-unlit.svg';
import INSTAGRAM_ICON from '@/public/images/icons/instagram-icon-unlit.svg';
import REDDIT_ICON from '@/public/images/icons/reddit-icon.svg';
import YOUTUBE_ICON from '@/public/images/icons/youtube-icon.svg';

import SHANE from '@/public/images/staff/shane.png';

// import JarallaxImage from './components/Jarallax/JarallaxImage';

import dynamic from "next/dynamic";
const Jarallax = dynamic(() => import('./components/Jarallax/Jarallax'), { ssr: false });

export default function Home() {

  const [Title, setTitle] = useState(null);
  const [Description, setDescripion] = useState(null);

  return (
    <main className="flex min-h-screen flex-col transition-all bg-gray-dark">
      <ParticleEffect /> {/* Add the particle effect here */}

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      <div className='flex bg-[#1a1a26] shadow-xl xl:px-80 lg:px-20 md:px-12 px-8 py-3'>
        <div className='w-full items-center flex md:flex-row flex-col'>
          <div className='md:w-[80%]'>
            <div className="flex md:justify-start items-center justify-center px-4 py-2">
              <h2 className='lg:text-4xl text-3xl font-Lapis tracking-wide'>Galactic Dash</h2>
            </div>
            <div className="flex md:justify-start items-center justify-center px-4 py-2 md:mr-32 lg:mr-40">
              <p className='font-poppins md:text-left text-center'>Embark on an challenging puzzle adventure! Guide your alien through celestial realms, solving challenges to find precious crystals. Ready to explore the cosmos?</p>
            </div>
          </div>
          <div className='lg:flex-grow'></div>
          <button className='flex relative items-center break-none justify-center my-4 xl:w-[12rem] w-30 rounded-full shadow-md shadow-black hover:bg-[#5e2679] bg-[#bb5299] px-4 py-2 '>
            <div className='tracking-wide font-Lapis xl:text-3xl lg:text-xl text-lg'>PLAY NOW!</div>
          </button>
        </div>
      </div>





      {/* Socials Widget */}
      <SocialWidget />

      <div className='py-[10rem] polka'>

      </div>

      <div className='flex bg-[#1a1a26] shadow-xl xl:px-80 lg:px-20 md:px-12 px-8 py-3'>
        <div className='w-full items-center flex md:flex-row flex-col'>
          <Image className='h-20 w-20 rounded-full' src={SHANE} />
          <div className='flex flex-col'>
            <div className="flex md:justify-start items-center justify-center px-4">
              <h2 className='lg:text-4xl text-3xl font-Lapis tracking-wide'>Shane-Lee<span className='lg:text-3xl text-2xl'></span></h2>
            </div>
            <div className="flex md:justify-start items-center justify-center px-4 text-sm md:mr-32">
              <p className='font-poppins md:text-left text-center'>Dedicated Game Enthusiast, Bringing Enchanted Canvas to Life.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center lg:justify-start'>
            <button className='flex relative items-center break-none justify-center my-4 xl:w-[8rem] w-24 rounded-full shadow-md shadow-black hover:bg-[#5e2679] bg-[#bb5299] px-4 py-2 '>
              <div className='tracking-wide font-Lapis xl:text-xl lg:text-lg text-base'>Portfolio</div>
            </button>
            <div className='flex lg:ml-5'>
              <Image className='mx-2 w-5 h-5' src={X_ICON} alt="X Icon" />
              <Image className='mx-2 w-5 h-5' src={YOUTUBE_ICON} alt="Youtube Icon" />
              <Image className='mx-2 w-5 h-5' src={REDDIT_ICON} alt="Reddit Icon" />
              <Image className='mx-2 w-5 h-5' src={DISCORD_ICON} alt="Discord Icon" />
              <Image className='mx-2 w-5 h-5' src={INSTAGRAM_ICON} alt="Instagram Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className='py-[10rem] polka'>

      <div className="blog-container">
      <Blog /> {/* Render the Blog component */}
</div>


        

      </div>



      <footer className='bg-[#5e2679] flex items-center justify-center lg:flex-row flex-col xl:px-40 lg:px-20 md:px-12 px-8 py-3'>
        <div className='w-full flex h-full items-center justify-center order-2 md:order-3 m-2'>
          <Image className='mx-2' src={X_ICON} alt="X Icon" />
          <Image className='mx-2' src={YOUTUBE_ICON} alt="Youtube Icon" />
          <Image className='mx-2' src={REDDIT_ICON} alt="Reddit Icon" />
          <Image className='mx-2' src={DISCORD_ICON} alt="Discord Icon" />
          <Image className='mx-2' src={INSTAGRAM_ICON} alt="Instagram Icon" />
        </div>
        <div className='w-full h-full flex flex-col order-1 md:order-2 m-4 items-center justify-center'>
          <h2 className='font-Lapis text-3xl'>EnchantedCanvas</h2>
          <p className='text-xs'>EnchantedCanvas © All Rights Reserved.</p>
        </div>
        <div className='w-full h-full order-3 md:order-1'></div>
      </footer>


    </main>
  )
}
