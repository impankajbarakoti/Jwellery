import React from "react";
import { Calendar, User, Tag } from "lucide-react";

// Sample data for a single blog post
const postData = {
  id: 1,
  title: "The Timeless Elegance of Solitaire Diamonds",
  mainImage:
    "https://blog.tanishq.co.in/wp-content/uploads/2025/06/Rectangle-82-min.png", // Main blog image
  date: "Oct 10, 2025",
  author: "Corano Insights",
  category: "Trends",
  tags: ["diamond", "engagement", "solitaire", "style"],
  content: [
    {
      type: "paragraph",
      text: "The solitaire diamond ring is arguably the most classic and recognized piece of jewellery in the world. Its simplicity is its strength, drawing the eye directly to the magnificent stone it showcases. Unlike elaborate settings, the solitaire focuses solely on the diamond’s brilliance, cut, and clarity.",
    },
    { type: "heading", text: "A History of Single-Stone Brilliance" },
    {
      type: "paragraph",
      text: "The popularity of the modern solitaire can be traced back to the late 19th century. Its sleek design was a revolutionary departure from the heavily ornate Victorian styles of the time, signifying a shift towards clean lines and understated luxury.",
    },
    {
      type: "quote",
      text: "Elegance is not about being noticed, it’s about being remembered. A solitaire ensures the moment is unforgettable.",
    },
    {
      type: "paragraph",
      text: "At Corano, we offer a range of solitaire settings—from the classic four-prong to the modern six-prong. We advise selecting a high-quality diamond, as the setting leaves nowhere for imperfections to hide. Invest in the best cut you can, and the ring will truly sparkle for a lifetime.",
    },
  ],
};

const SingleBlogPost = () => {
  const { title, mainImage, date, author, category, tags, content } = postData;

  const renderContent = (item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            {item.text}
          </p>
        );
      case "heading":
        return (
          <h3
            key={index}
            className="text-3xl font-serif text-gray-900 mt-8 mb-4"
          >
            {item.text}
          </h3>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-amber-500 pl-6 py-2 italic text-xl text-gray-700 my-8 bg-gray-50 p-4 rounded-lg"
          >
            {item.text}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post Title */}
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center space-x-6 text-gray-500 mb-8 pb-4 border-b">
          <span className="flex items-center text-sm font-medium">
            <User className="w-4 h-4 mr-1 text-amber-500" />
            By {author}
          </span>
          <span className="flex items-center text-sm font-medium">
            <Calendar className="w-4 h-4 mr-1 text-amber-500" />
            {date}
          </span>
          <span className="text-sm font-semibold uppercase text-amber-500 border border-amber-500 px-2 py-0.5 rounded-full">
            {category}
          </span>
        </div>

        {/* Main Image */}
        <img
          src={mainImage}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-xl mb-12"
        />

        {/* Post Content */}
        <div className="text-gray-800 font-light">
          {content.map(renderContent)}
        </div>

        {/* Tags Section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center flex-wrap">
            <Tag className="w-5 h-5 mr-3 text-amber-500" />
            <span className="font-semibold text-gray-800 mr-3">Tags:</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gray-200 transition duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
