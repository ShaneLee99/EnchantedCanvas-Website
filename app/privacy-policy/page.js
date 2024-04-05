"use client"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {

    const [terms, setTerms] = useState([]);
    useEffect(() => {
        const getTerms = async () => {
            const res = await fetch('/api/privacy', { headers: { 'Content-Type': 'privacy/json' } });
            const tempdata = await res.json();
            setTerms(tempdata);
        };
        getTerms();
    }, []);

  return (
    <main className="flex min-h-screen flex-col transition-all bg-gray-dark">
        
        <div className='container flex flex-col mx-auto my-20'>
            <div className='flex flex-col w-max p-4'>
                <h2 className='lg:text-4xl text-2xl tracking-wider text-[#fff]'>Privacy Policy</h2>
                <div className='border-b-[1px] w-full mt-4 text-gray-light'></div>
            </div>

            <div className='md:mt-20 mt-4 p-4'>
                {terms.map((line, _key) => {
                    const backoneIndex = terms[_key - 1]
                    let classes = "py-2 font-body transition-all md:text-base text-sm leading-10"

                    if (backoneIndex == "") {
                        classes = "leading-10 "
                    }
                    if (line.startsWith("##")) {
                        const trunicated_line = line.split("##")[1]
                        return (
                            <h2 className="text-lg leading-10">{trunicated_line}</h2>
                        )
                    }
                    else if (line.startsWith("#")) {
                        const trunicated_line = line.split("#")[1]
                        return (
                            <h2 className="text-xl leading-10">{trunicated_line}</h2>
                        )
                    } else {
                        return (
                            <p className={classes}>{line}</p>
                        )
                    }
                })}
            </div>



        </div>
    </main>


    )
}