import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ];

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <nav
        className={`fixed w-full top-0  z-100 flex justify-between  items-center px-6 md:px-12 py-4 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg- backdrop:backdrop-blur-2xl"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/07/logo_corano.png"
              alt="Logo"
              className="w-20 md:w-30"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-base md:text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative transition duration-300 pb-1 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                after:w-0 after:transition-all after:duration-300 hover:after:w-full
                ${
                  isScrolled
                    ? "text-black after:bg-black hover:text-black"
                    : "text-black after:bg-black hover:text-black"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="/contact">
            <button className="bg-white text-black font-semibold px-6 py-3 shadow-md hover:bg-stone-100 hover:scale-105 transition-all focus:outline-none focus:ring-0">
              Contact Us
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white  shadow-md md:hidden z-10">
            <ul className="flex flex-col space-y-4 px-6 py-4 text-base font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="relative text-black hover:text-yellow-500 transition duration-300 pb-1
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                    after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/contact">
                  <button className="bg-gradient-to-r bg-black text-white font-semibold px-6 py-3 w-full shadow-md hover:scale-105 transition-transform">
                    Contact Us
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
