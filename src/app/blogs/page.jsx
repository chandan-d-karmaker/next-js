import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    const blogData = [
        {
            id: 101,
            title: "Mastering the MERN Stack",
            author: "Aditya Karmaker",
            category: "Development",
            summary: "A comprehensive guide to building full-stack apps with React and Node.js.",
            date: "2026-04-10",
            readTime: "5 min",
            status: "Published"
        },
        {
            id: 102,
            title: "Understanding Graph Theory",
            author: "Aditya Karmaker",
            category: "Mathematics",
            summary: "Exploring the fundamentals of BFS and DFS for competitive programming.",
            date: "2026-03-22",
            readTime: "8 min",
            status: "Published"
        },
        {
            id: 103,
            title: "Modern Mystery Literature",
            author: "Aditya Karmaker",
            category: "Books",
            summary: "An analysis of suspense and narrative in modern Bengali mystery novels.",
            date: "2026-04-05",
            readTime: "6 min",
            status: "Draft"
        },
        {
            id: 104,
            title: "Tailwind vs. Bootstrap",
            author: "Aditya Karmaker",
            category: "Design",
            summary: "Why utility-first CSS is changing the way we build modern interfaces.",
            date: "2026-02-15",
            readTime: "4 min",
            status: "Published"
        }
    ];
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-20'>All blogs are here</h2>
            <div className='w-4/5 mx-auto grid grid-cols-3 gap-10'>
                {
                    blogData.map(blog => <div key={blog.id} className='p-8 space-y-4 bg-base-300 rounded-3xl'>

                        <h1 className='text-2xl font-semibold'>{blog.title}</h1>
                        <p className='text-xl font-medium'>Author: {blog.author}</p>
                        <Link href={`/blogs/${blog.id}`} className='btn'>Show Details</Link>    
                    </div>)
                }
            </div>
        </div>
    );
};

export default BlogPage;