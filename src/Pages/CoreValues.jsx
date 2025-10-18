import React from "react";
import { Diamond, HandHeart, Users } from "lucide-react"; // Example icons

const valuesData = [
  {
    icon: Diamond,
    title: "Ethical Sourcing",
    description:
      "We guarantee conflict-free diamonds and responsibly sourced precious metals for peace of mind.",
  },
  {
    icon: HandHeart,
    title: "Master Craftsmanship",
    description:
      "Every piece is meticulously handcrafted by artisans with decades of experience and dedication to quality.",
  },
  {
    icon: Users,
    title: "Customer Trust",
    description:
      "Our priority is you. We offer transparent pricing, lifetime warranties, and personalized service.",
  },
];

const CoreValues = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-gray-900 mb-4">
          Our Core Principles
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          The foundation of Corano is built on values that ensure every customer
          receives a piece of enduring beauty and integrity.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {valuesData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <item.icon className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
