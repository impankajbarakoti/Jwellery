import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/slideshow1-1.jpg')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      </div>

      <div className="relative z-10 flex items-center justify-start pl-12 min-h-screen text-black">
        <div className="text-left">
          <h1 className="text-4xl font-serif  mb-4">
            Family Jewelry Collection
          </h1>
          <p className="text-xl mb-6">
            Designer Jewelry Necklaces - Bracelets - Earrings
          </p>
          <button className="bg-amber-600 text-white py-2 px-6 hover:bg-black transition duration-300 rounded-full text-lg">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
