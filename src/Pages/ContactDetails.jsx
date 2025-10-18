import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const detailsData = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@corano.in",
    link: "mailto:support@corano.in",
  },
  {
    icon: MapPin,
    title: "Visit Our Studio",
    detail: "123 Luxury Lane, Jewellery District, Mumbai, India",
    link: "#map", // Link to the map section
  },
];

const ContactDetails = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {detailsData.map((item, index) => (
            <div
              key={index}
              className="p-6 text-center border border-gray-200 rounded-lg shadow-sm transition duration-300 hover:border-amber-400"
            >
              <item.icon className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <a
                href={item.link}
                className="text-gray-600 hover:text-amber-500 transition duration-200 font-medium"
              >
                {item.detail}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
