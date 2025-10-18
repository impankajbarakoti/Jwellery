import React from "react";

const LogoItem = ({ img, title, link }) => {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center transition-transform duration-300 hover:scale-110"
    >
      <img
        src={img}
        alt={title}
        className="w-24 md:w-52 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/120x60?text=Logo";
        }}
      />
    </a>
  );
};

const ClientLogoStrip = () => {
  const logos = [
    {
      title: "themefrest",
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/img-brand1.jpg",
    },
    {
      title: "graphicriver",
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/img-brand2.jpg",
    },
    {
      title: "codecanyon",
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/img-brand.jpg",
    },
    {
      title: "audiojungle",
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/img-brand4.jpg",
    },
    {
      title: "activeden",
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/img-brand5.jpg",
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Line */}
        <hr className="border-gray-200 mb-8" />

        {/* Logo Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {logos.map((logo, index) => (
            <LogoItem key={index} img={logo.img} title={logo.title} />
          ))}
        </div>

        {/* Bottom Line */}
        <hr className="border-gray-200 mt-8" />
      </div>
    </div>
  );
};

export default ClientLogoStrip;
