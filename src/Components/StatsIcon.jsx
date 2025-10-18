import React from "react";
// Import icons from a common library like lucide-react or react-icons/hi2 (Heroicons)
// Note: In a real project, you'd need to install the library, e.g., 'npm install lucide-react'
import { Plane, Gem, ArrowLeftRight, CreditCard } from "lucide-react";

// Define a reusable FeatureCard component
const FeatureCard = ({Icon, title, description }) => {
  // Custom color for the icons, matching the previous gold/tan
  const iconColor = "#B8A47E";

  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Icon with custom gold color and appropriate size */}
      <Icon
        className="w-8 h-8 md:w-10 md:h-10 mb-3"
        style={{ color: iconColor }}
        strokeWidth={1.5}
      />

      {/* Title */}
      <h3 className="text-lg font-semibold font-serif text-gray-800 mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main Component
const StatsIcon = () => {
  const features = [
    {
      icon: Plane,
      title: "Free Shipping",
      description: "Free Shipping On All US Orders Or Order Above $200",
    },
    {
      icon: Gem,
      title: "Support 24/7",
      description: "Contact Us 24 Hours A Day, 7 Days A Week",
    },
    {
      icon: ArrowLeftRight,
      title: "30 Days Return",
      description: "Simply Return It Within 30 Days For An Exchange",
    },
    {
      icon: CreditCard,
      title: "100% Payment Secure",
      description: "We Ensure Secure Payment With PEV",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout for features: responsive for various screen sizes */}
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-x-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}  
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      {/* Optional: Add a subtle separator line if needed */}
      <div className="mt-8 border-t border-gray-100 max-w-6xl mx-auto"></div>
    </div>
  );
};

export default StatsIcon;
