import React from "react";

// Brand ki history dikhane ke liye ek placeholder image
const STORY_IMAGE_URL =
  "https://images.pexels.com/photos/6641224/pexels-photo-6641224.jpeg"; // Example: Workshop/Craft Image

const OurStory = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src={STORY_IMAGE_URL}
              alt="Jewellery Craftsmanship"
              className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Text Column */}
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">
              Our Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Crafting Elegance Since 1990
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              Corano was founded on a simple yet profound belief: that fine
              jewellery should be both **timeless and accessible**. Our journey
              began in a small workshop where precision and passion were our
              only tools.
            </p>
            <p className="mb-6 leading-relaxed">
              Over the decades, we have remained committed to sourcing the
              **finest ethical materials** and employing **master artisans** who
              bring our designs to life. Every piece tells a story of heritage,
              quality, and unparalleled craftsmanship.
            </p>
            <a
              href="#"
              className="text-amber-500 hover:text-amber-600 font-medium border-b border-amber-500 transition duration-300"
            >
              Meet Our Founders &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
