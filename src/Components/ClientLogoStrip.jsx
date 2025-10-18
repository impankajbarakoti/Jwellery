import React from "react";
import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.jpg";
import L4 from "../assets/L4.jpg";
import L5 from "../assets/L5.jpg";

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
        className="w-32 sm:w-72 md:w-52 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
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
    { title: "themefrest", img: L1 },
    { title: "graphicriver", img: L2 },
    { title: "codecanyon", img: L3 },
    { title: "audiojungle", img: L4 },
    { title: "activeden", img: L5 },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Line */}
        <hr className="border-gray-200 mb-8" />

        {/* Logo Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center items-center gap-x-10 gap-y-6">
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
