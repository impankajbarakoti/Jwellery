import React from "react";
// Importing icons for contact details and social media
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Rss,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  // Gold/Tan accent color
  const goldColor = "#B8A47E";

  // Placeholder logo (you would replace this with your actual logo import)
  const logoUrl =
    "http://wp.plazathemes.com/corano/wp-content/uploads/2019/07/logo_corano.png";

  // Icon data for social media
  const socialIcons = [
    { icon: Facebook, link: "#facebook" },
    { icon: Twitter, link: "#twitter" },
    { icon: Instagram, link: "#instagram" },
    { icon: Rss, link: "#rss" },
    { icon: Linkedin, link: "#linkedin" },
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- 1. Top Section: Grid of Columns (Logo, Contact, Info, Follow) --- */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 mb-12">
          {/* Column 1: Logo and About */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo with placeholder for a clean look */}
            <div className="flex items-center mb-4">
              <img
                src={logoUrl}
                alt="Corano Logo"
                className="h-6 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x24/f0f0f0/333333?text=Corano";
                }}
              />
            </div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              We are a team of designers and developers that create high quality
              Magento, Prestashop, Opencart.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin
                  className="w-5 h-5 mr-2 flex-shrink-0"
                  style={{ color: goldColor }}
                />
                4710-4890 Breckenridge USA
              </li>
              <li className="flex items-start">
                <Mail
                  className="w-5 h-5 mr-2 flex-shrink-0"
                  style={{ color: goldColor }}
                />
                support@plazathemes.com
              </li>
              <li className="flex items-start">
                <Phone
                  className="w-5 h-5 mr-2 flex-shrink-0"
                  style={{ color: goldColor }}
                />
                1-1001-234-5678
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 hover:text-gray-900 transition">
                <a href="/">Home</a>
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition">
                <a href="/about">About</a>
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition">
                <a href="/blogs">Our Blogs</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-3 mb-6">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="p-2 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-900 transition"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. Bottom Section: Newsletter and Payments --- */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Newsletter */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3 lg:w-1/4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Sign Up To Newsletter
            </h4>
            <div className="flex items-center border-b border-gray-400 focus-within:border-gray-800 transition-colors duration-300">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full bg-transparent py-2 outline-none text-gray-700 placeholder-gray-500 text-sm"
              />
              <button
                className="py-2 text-sm font-medium flex-shrink-0"
                style={{ color: goldColor }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Payment Logos */}
          {/* Using simple text/icons to represent the grayscale payment logos */}
          <div className="h-6 w-auto flex items-center space-x-4 text-xs font-bold text-gray-700">
            <span className="p-1 rounded bg-white shadow-sm">
              <img
                src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/img-payment-300x24.png"
                alt="Payment Methods"
                className="h-6" // Adjust the height to fit within the container
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
