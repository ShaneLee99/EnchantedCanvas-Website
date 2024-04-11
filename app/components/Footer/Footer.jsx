import Image from "next/image";
import CERBERUS_GAMES_LOGO from '@/public/images/enchantedcanvas.png';
import { useState } from 'react';

import X_ICON from '@/public/images/icons/x-icon-unlit.svg';
import DISCORD_ICON from '@/public/images/icons/discord-icon-unlit.svg';
import INSTAGRAM_ICON from '@/public/images/icons/instagram-icon-unlit.svg';
import REDDIT_ICON from '@/public/images/icons/reddit-icon.svg';
import YOUTUBE_ICON from '@/public/images/icons/youtube-icon.svg';

const Footer = () => {

    return (
        <footer className='bg-[#5e2679] z-10 flex items-center justify-center lg:flex-row flex-col xl:px-40 lg:px-20 md:px-12 px-8 py-3'>
            <div className='w-full flex h-full items-center justify-center order-2 md:order-3 m-2'>
                <Image
                    className='mx-2 cursor-pointer hover:scale-110 hover:shadow-md'
                    src={X_ICON}
                    alt="X Icon"
                // Add your desired onClick or event handler here
                />
                <Image
                    className='mx-2 cursor-pointer hover:scale-110 hover:shadow-md'
                    src={YOUTUBE_ICON}
                    alt="Youtube Icon"
                    onClick={() => window.location.href = "https://www.youtube.com/@EnchantedCanvas"}  // YouTube Link
                />
                <Image
                    className='mx-2 cursor-pointer hover:scale-110 hover:shadow-md'
                    src={REDDIT_ICON}
                    alt="Reddit Icon"
                // Add your desired onClick or event handler here
                />
                <Image
                    className='mx-2 cursor-pointer hover:scale-110 hover:shadow-md'
                    src={DISCORD_ICON}
                    alt="Discord Icon"
                    onClick={() => window.location.href = "https://discord.gg/9Rrka7GqZ9"}  // Discord Link
                />
                <Image
                    className='mx-2 cursor-pointer hover:scale-110 hover:shadow-md'
                    src={INSTAGRAM_ICON}
                    alt="Instagram Icon"
                    onClick={() => window.location.href = "https://www.instagram.com/enchantedcanvasgames"}  // Instagram Link
                />
            </div>
            <div className='w-full h-full flex flex-col order-1 md:order-2 m-4 items-center justify-center'>
                <h2 className='font-Lapis text-3xl'>EnchantedCanvas</h2>
                <p className='text-xs'>EnchantedCanvas © All Rights Reserved.</p>
            </div>
            <div className='w-full h-full order-3 md:order-1'></div>
        </footer>

    );
};

export default Footer;
























