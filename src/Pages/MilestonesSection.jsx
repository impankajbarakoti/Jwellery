import React from "react";

const milestonesData = [
  {
    year: 1990,
    title: "The Inception",
    description:
      "Corano was founded with a single workshop focused on ethical diamond sourcing and bespoke bridal wear.",
  },
  {
    year: 2005,
    title: "Global Expansion",
    description:
      "We launched our first international online store, expanding our reach to markets in Europe and North America.",
  },
  {
    year: 2018,
    title: "The Signature Collection",
    description:
      "Launched our critically acclaimed 'Luminos' collection, which won the 'Design Excellence Award' in Milan.",
  },
  {
    year: 2024,
    title: "Eco-Conscious Certification",
    description:
      "Achieved full certification for 100% sustainable and recycled gold usage across all new collections.",
  },
];

const MilestonesSection = () => {
  return (
    <section className="py-20 md:py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-center text-gray-900 mb-20">
          Our Defining Milestones
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full h-full"></div>

          {milestonesData.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-28 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pl-2" : "md:pr-2"
                }`}
              >
                <div
                  className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-transparent hover:border-amber-400 ${
                    index % 2 === 0
                      ? "md:text-left md:mr-auto"
                      : "md:text-left md:mr-auto"
                  } p-6 sm:p-8`}
                >
                  <h4 className="text-2xl sm:text-3xl font-serif text-amber-600 mb-2 group-hover:text-amber-500 transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Center Dot + Line Connector */}
              <div className="relative flex flex-col items-center justify-center md:w-2/12 my-6 md:my-0">
                {/* Timeline Dot */}
                <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-md z-10"></div>

                {/* Connecting line for mobile */}
                {index !== milestonesData.length - 1 && (
                  <div className="md:hidden h-12 w-0.5 bg-gray-300"></div>
                )}

                {/* Year (mobile only) */}
                <p className="text-base sm:text-lg font-semibold text-gray-800 mt-2 md:hidden">
                  {milestone.year}
                </p>
              </div>

              {/* Year (Desktop only) */}
              <div
                className={`hidden md:block md:w-5/12 text-2xl font-bold text-gray-900 ${
                  index % 2 === 0 ? "text-left pl-54" : "text-right pr-54"
                }`}
              >
                {milestone.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
