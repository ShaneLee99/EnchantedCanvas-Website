'use client'
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FormatTextWithMarkdown from '../components/Utils/FormatTextWithMarkdown';

export default function Home() {

  const [aboutus, setAboutUs] = useState([]);
  useEffect(() => {
    const getAbout = async () => {
      const res = await fetch('/api/aboutus', { headers: { 'Content-Type': 'application/json' } });
      const tempdata = await res.json();
      setAboutUs(tempdata);
    };
    getAbout();
  }, []);


  return (
    <main className="flex min-h-screen flex-col transition-all bg-gray-dark">
      <Navbar />
      <div className='container flex flex-col mx-auto my-20 h-full min-h-[50rem]'>
        <div className='md:mt-20 mt-4 p-4'>
          <FormatTextWithMarkdown data={aboutus} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
