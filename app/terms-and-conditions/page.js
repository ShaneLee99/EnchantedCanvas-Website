"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import FormatTextWithMarkdown from '../components/Utils/FormatTextWithMarkdown';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function Home() {

    const [terms, setTerms] = useState([]);
    useEffect(() => {
        const getTerms = async () => {
            const res = await fetch('/api/terms-and-conditions', { headers: { 'Content-Type': 'application/json' } });
            const tempdata = await res.json();
            setTerms(tempdata);
        };
        getTerms();
    }, []);

  return (
    <main className="flex min-h-screen flex-col transition-all bg-gray-dark">
        <Navbar />
        <div className='container flex flex-col mx-auto my-20'>
            <div className='flex flex-col w-max p-4'>
                <h2 className='lg:text-4xl text-2xl tracking-wider text-[#fff]'>Terms and Conditions</h2>
                <div className='border-b-[1px] w-full mt-4 text-gray-light'></div>
            </div>

            <div className='md:mt-20 mt-4 p-4'>
                <FormatTextWithMarkdown data={terms} />
            </div>
        </div>
        <Footer />
    </main>


    )
}