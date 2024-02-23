import React, { useState, useEffect } from 'react';
import SHANE from '@/public/images/staff/shane.png';
import Image from 'next/image';
import BlogWidget from './BlogWidget';

const Blog = () => {
  // State to store blog post data
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('/api/blog/home', { headers: { 'Content-Type': 'application/json' } });
      const a_data = await res.json();
      const selectedBlogs = a_data.slice(0, 0 + 6);
      setBlogPosts(selectedBlogs);
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 z-10">
      <h1 className="text-3xl font-Lapis mb-4">Blog Posts</h1> {/* Add heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Render each blog post */}
        {blogPosts.map((post) => (
          <BlogWidget post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
