import React from 'react';

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

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;

    const blogs = blogData.find(blog =>  blog.id === parseInt(blogId));
    console.log(blogs);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-center text-4xl font-bold'>Blog details is loading...</h3>
            {
                blogs && <div className='p-10 bg-base-300 space-y-4 mt-20 rounded-2xl'>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.author}</p>
                    <p>{blogs.summary}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;