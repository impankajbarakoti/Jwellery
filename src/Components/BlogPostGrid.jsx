import React from "react";
import BLG1 from '../assets/BLG1.jpg'
import BLG2 from "../assets/BLG2.jpg";
import BLG3 from "../assets/BLG3.jpg";
// --- Reusable BlogPostCard Component ---
const BlogPostCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer">
      {/* Blog Image */}
      <a href={post.link} aria-label={`Read ${post.title}`}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x300/f0f0f0/999999?text=Blog+Image";
          }}
        />
      </a>

      {/* Content */}
      <div className="p-4 flex flex-col">
        {/* Post Meta (Author and Date) */}
        <p className="text-sm font-serif text-gray-500 font-light mb-2">
          By{" "}
          <span className="text-gray-800 font-serif hover:text-gray-600 transition">
            admin
          </span>{" "}
          / <span className="text-gray-800 font-serif">{post.date}</span>
        </p>

        {/* Post Title */}
        <a href={post.link}>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-gray-600 transition leading-snug">
            {post.title}
          </h3>
        </a>
      </div>
    </div>
  );
};

// --- Main Component ---
const BlogPostGrid = () => {
  const blogPosts = [
    {
      title: "Quisque Egestas",
      date: "April 25, 2018",
      imageUrl:
       BLG1,
      link: "#post-1",
    },
    {
      title: "Post With Gallery",
      date: "April 24, 2018",
      imageUrl:
        BLG2,
      link: "#post-2",
    },
    {
      title: "Maecenas Ultricies",
      date: "April 24, 2018",
      imageUrl:
        BLG3,
      link: "#post-3",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">
            From Our Blog
          </h2>
          <p className="text-gray-500 font-serif  ">
            There are latest blog posts
          </p>
        </header>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostGrid;
