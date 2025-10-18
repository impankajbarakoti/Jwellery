import React from "react";
import AH from '../assets/AH.jpg'
// Corano theme ki aesthetic ke hisaab se ek placeholder image URL
const HERO_IMAGE_URL = AH; // Example Image

const AboutHero = () => {
  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gray-100">
      {/* Background Image - Adjust opacity for better text readability */}
      <div
        className="absolute inset-0 bg-cover  bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      >
        {/* <div className="absolute inset-0 bg-black/40"></div>{" "} */}
        {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl sm:text-5xl font-serif text-black uppercase tracking-widest border-b-4 border-amber-400 pb-2">
          About Corano
        </h1>
      </div>

      {/* Breadcrumb (Optional) */}
      <div className="absolute bottom-4 right-4 z-20 hidden sm:block">
        <p className="text-sm text-white/80">
          Home / <span className="font-semibold text-amber-400">About Us</span>
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
