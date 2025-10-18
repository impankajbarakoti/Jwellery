import React from "react";
import B1 from '../assets/B1.jpg'
import B2 from "../assets/B2.jpg";
import B3 from "../assets/B3.jpg";
import B4 from "../assets/B4.jpg";

// Reusable component for each category banner
const CategoryCard = ({ imageUrl, subTitle, title, link }) => {
  return (
    <div className="relative w-full h-32 md:h-70 bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          // Object-cover ensures the image covers the container
          className="w-full h-full object-contain"
          // Fallback for image loading error (simple gray background)
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x320/f0f0f0/999999?text=Image+Missing";
          }}
        />
      </div>

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-end p-6 md:p-8 text-right">
        {/* White Background Box for Text (to ensure readability over the image) */}
        {/* We use a partial overlay on the right side to mimic the original design */}
        <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center text-center">
          {/* Sub-Title (e.g., Beautiful, New Arrivals) */}
          <p className="sm:text-[10px] tracking-widest uppercase font-serif text-gray-400 font-light mb-1">
            {subTitle}
          </p>

          {/* Main Title */}
          <h2 className="text-sm md:text-3xl  font-serif text-gray-800 leading-snug mb-3">
            {title}
          </h2>

          {/* Shop Now Link */}
          <a
            href={link}
            className="text-sm  font-serif text-gray-800 border-b border-gray-800 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Component
const CardJ = () => {
  // Array of data for the four banners
  const banners = [
    {
      subTitle: "Beautiful",
      title: "Wedding Rings",
      imageUrl:
        B1,
      link: "#rings",
    },
    {
      subTitle: "Earring",
      title: "Tangerine Floral Earring",
      imageUrl:
        B2,
      link: "#earrings",
    },
    {
      subTitle: "New Arrivals",
      title: "Pearl Necklaces",
      imageUrl:
        B3,
      link: "#necklaces",
    },
    {
      subTitle: "New Design",
      title: "Diamond Jewelry",
      imageUrl:
               B4,
      link: "#diamond",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout for the 4 categories */}
        {/* 1 column on mobile, 2 columns on laptop/tablet, and 2 rows with 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {banners.map((banner, index) => (
            <CategoryCard
              key={index}
              imageUrl={banner.imageUrl}
              subTitle={banner.subTitle}
              title={banner.title}
              link={banner.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardJ;
