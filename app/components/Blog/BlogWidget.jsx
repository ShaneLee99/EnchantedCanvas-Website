import React, { useState, useEffect } from 'react';
import SHANE from '@/public/images/staff/shane.png';
import Image from 'next/image';
import TrunicatedText from '../Utils/TrunicateText';

const BlogWidget = ({ post }) => {
    let text = ""
    return (
        <div key={post.id} className="rounded-lg shadow-xl bg-[#1a1a26] z-10">
            <div className="p-4">
                <span className="text-sm">{post?.date}</span>
                <a rel="Title" href="#" className="block text-lg font-bold text-white mt-2">{post.title}</a>
                <TrunicatedText text={post?.content.join(" ")} />
            </div>
            <div className="p-4 flex items-center justify-between">
                <a href={"/blog/" + post.slug} className="cursor-pointer hover:scale-105 hover:shadow-md shadow-black text-white">Read more</a>
                <div className="flex items-center">
                    {/* Replace the placeholder image with your actual image */}
                    <Image className='object-cover w-10 h-10 mx-2 rounded-full' src={SHANE} />
                    <span className="text-white">Shane-Lee</span>
                </div>
            </div>
        </div>
    );
};

export default BlogWidget;
