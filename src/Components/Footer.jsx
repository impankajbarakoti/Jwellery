import React from "react";
import PAY from '../assets/PAY.png'
import CORANO from '../assets/CORANO.png'
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
  const goldColor = "#B8A47E";

  const logoUrl =
    "http://wp.plazathemes.com/corano/wp-content/uploads/2019/07/logo_corano.png";

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
        {/* --- 1. Top Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-left">
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center mb-4 justify-start">
              <img
                src={CORANO}
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
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Our Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us
            </h4>
            <div className="flex flex-wrap sm:flex-nowrap sm:space-x-3 gap-2 sm:gap-0">
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

        {/* --- 2. Bottom Section --- */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-left gap-6">
          {/* Newsletter */}
          <div className="w-full md:w-1/3 lg:w-1/4">
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
          <div className="flex items-center space-x-4">
            <img
              src={PAY}
              alt="Payment Methods"
              className="h-6 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
