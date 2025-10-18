import React from "react";
import BB1 from '../assets/BB1.jpg'
import BB2 from "../assets/BB2.jpg";
import BB3 from "../assets/BB3.jpg";
import BB4 from "../assets/BB4.jpg";

// Reusable component for each category block
const CategoryBlock = ({ imageUrl, title, itemCount, link }) => {
  return (
    <a
      href={link}
      className="relative w-full h-96 bg-gray-100 overflow-hidden group transition duration-300 ease-in-out cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        // object-cover ensures the image fills the area, group-hover for subtle zoom
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        // Fallback for image loading error
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x600/f0f0f0/999999?text=Image+Missing";
        }}
      />

      {/* Text Overlay (Bottom Left) */}
      <div className="absolute bottom-6 left-6  md:text-white text-black z-10">
        <h2 className="text-xl md:text-2xl  font-serif group-hover:text-black tracking-wide uppercase">
          {title}
        </h2>
        {itemCount && (
          <p className="text-sm font-light  group-hover:text-black mt-1">
            {itemCount} Items
          </p>
        )}
      </div>

      {/* Subtle Dark Overlay (for text readability) */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10   transition-opacity duration-500"></div>
    </a>
  );
};

// Main Component
const  CategoryShowcase = () => {
  // Array of data for the four category blocks
  const categories = [
    {
      title: "Earrings",
      itemCount: 15,
      imageUrl: BB1,
      link: "#earrings",
    },
    {
      title: "Necklaces",
      itemCount: 15,
      imageUrl: BB2,
      link: "#necklaces",
    },
    {
      title: "Rings",
      itemCount: 15,
      imageUrl: BB3,
      link: "#rings",
    },
    {
      title: "Bracelets",
      itemCount: 15,
      imageUrl:
        BB4,
      link: "#bracelets",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout: 1 column on small screens, 2 columns on medium screens, 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryBlock
              key={index}
              imageUrl={category.imageUrl}
              title={category.title}
              itemCount={category.itemCount}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
