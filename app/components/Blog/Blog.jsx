import React, { useState, useEffect } from 'react';
import SHANE from '@/public/images/staff/shane.png';
import Image from 'next/image';

const Blog = () => {
  // State to store blog post data
  const [blogPosts, setBlogPosts] = useState([]);

  // Function to fetch and load blog post data from JSON file
  const fetchBlogPosts = async () => {
    try {
      // Fetch blog post data from JSON file
      const response = await fetch('/blogPosts.json');
      const data = await response.json();

      // Set blog post data in state
      setBlogPosts(data);
    } catch (error) {
      console.error('Error fetching blog post data:', error);
    }
  };

  // Load blog post data when component mounts
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-Lapis mb-4">Blog Posts</h1> {/* Add heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Render each blog post */}
        {blogPosts.map((post) => (
          <div key={post.id} className="rounded-lg shadow-xl bg-[#1a1a26]">
            <div className="p-4">
              <span className="text-sm">{post.date}</span>
              <a rel="Title" href="#" className="block text-lg font-bold text-white mt-2">{post.title}</a>
              <p className="text-white mt-2">{post.content}</p>
            </div>
            <div className="p-4 flex items-center justify-between">
              <a rel="Read More" href="#" className="text-white">Read more</a>
              <div className="flex items-center">
                {/* Replace the placeholder image with your actual image */}
                <Image className='object-cover w-10 h-10 mx-2 rounded-full' src={SHANE} />
                <span className="text-white">Shane-Lee</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
