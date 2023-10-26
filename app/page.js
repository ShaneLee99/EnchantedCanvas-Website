'use client'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SocialWidget from './components/SocialWidget/SocialWidget';
import TeamWidget from './components/TeamWidget/TeamWidget';
import PopupWidget from './components/PopupWidget/PopupWidget';
// import JarallaxImage from './components/Jarallax/JarallaxImage';

import dynamic from "next/dynamic";
const Jarallax = dynamic(() => import('./components/Jarallax/Jarallax'), { ssr: false });

export default function Home() {

  const [Title, setTitle] = useState(null);
  const [Description, setDescripion] = useState(null);

  return (
    <main className="flex min-h-screen flex-col transition-all bg-gray-dark">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Socials Widget */}
      <SocialWidget />

      {/* Team Widget */}
      <TeamWidget />

      {/* Popup Widget */}
      <PopupWidget Title={Title} Description={Description} />

      {/* <div className='w-full flex lg:flex-row flex-col bg-gray-light h-screen transition-all'>
        <div className='lg:w-[50%] lg:h-full h-[50%] w-full rounded-r-2xl overflow-hidden transition-all'>
        <Jarallax className="h-screen" speed={0.2}>
          <JarallaxImage className='h-screen' src="https://cdn.vox-cdn.com/thumbor/v_sjE8-5LeYKKDLsVXft0x6j5bE=/0x0:1205x798/1400x1050/filters:focal(513x122:743x352):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/55474493/Screen_Shot_2017_06_27_at_1.05.21_PM.0.png" alt="" />
        </Jarallax>
        </div>
        <div className='lg:w-[50%] lg:h-full h-[50%] w-full p-8 transition-all font-poppins'>

          <h2 className='text-2xl font-bold text-off-white'>Yes... John is that shit.</h2>

        </div>

      </div> */}

    </main>
  )
}
