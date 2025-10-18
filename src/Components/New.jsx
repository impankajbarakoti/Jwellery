import React from "react";
import N1 from '../assets/N1.jpg'
import N2 from "../assets/N2.jpg";
import N3 from "../assets/N3.jpg";
import N4 from "../assets/N4.jpg";
// Import mock icons (in a real project, you'd install 'lucide-react' or similar)
import { Heart, Scale3d, ShoppingCart } from "lucide-react";

// --- Reusable Product Card Component ---
const ProductCard = ({ product }) => {
  // Custom gold color for icons/accents
  const goldColor = "#B8A47E";

  return (
    <div className="bg-white group rounded-lg transition-shadow duration-300 relative">
      {/* Image & Action Buttons Area */}
      <div className="relative p-6 md:p-8 flex justify-center items-center h-72">
        {/* Sale Tag */}
        {product.isSale && (
          <span className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            Sale!
          </span>
        )}

        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Wishlist and Compare Buttons (Top Right) */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Heart
              className="w-5 h-5"
              style={{ color: goldColor }}
              strokeWidth={1.5}
            />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Scale3d className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          </button>
        </div>

        {/* Add to Cart Button (Bottom Center) - Only visible on hover */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-8">
          <button className="w-full flex items-center justify-center bg-gray-900 text-white font-semibold py-2 rounded hover:bg-gray-700 transition duration-300">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to cart
          </button>
        </div>
      </div>

      {/* Text Content Area */}
      <div className="p-4 pt-0 text-center">
        <p className="text-xs font-serif text-gray-400 font-light mb-1">
          {product.category}
        </p>
        <h3 className="text-base font-medium font-serif text-gray-800 mb-2 hover:text-gray-600 transition duration-200 cursor-pointer">
          {product.title}
        </h3>

        {/* Price Display */}
        <p className="text-lg font-semibold text-gray-900">
          {product.isSale && (
            <span className="text-gray-400 line-through mr-2 font-normal text-base">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span style={{ color: product.isSale ? goldColor : "#1F2937" }}>
            ${product.price.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---
const New = () => {
  const products = [
    {
      id: 1,
      title: "Diamond Band Ring",
      category: "Chatelaine, Necklaces",
      price: 100.0,
      imageUrl:
        N1,
      isSale: false,
    },
    {
      id: 2,
      title: "Diamond Band Ring",
      category: "Brooches, Flatware",
      price: 86.0,
      imageUrl:
        N2,
      isSale: false,
    },
    {
      id: 3,
      title: "Dissent Collar Earring",
      category: "Necklaces, Runners",
      price: 95.0,
      imageUrl:
        N3,
      isSale: false,
    },
    {
      id: 4,
      title: "Long Earrings Women",
      category: "Necklaces, Tiara",
      price: 70.0,
      originalPrice: 80.0,
      imageUrl:
        N4,
      isSale: true,
    },
  ];

//   const categories = ["Bracelets", "Earrings", "Necklaces"];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h2 className="text-4xl  font-serif text-gray-900 mb-2">
            New Arrivals
          </h2>
          <p className="text-gray-500 font-serif mb-6">
            Add new arrivals to weekly lineup
          </p>

          {/* Category Tabs/Links */}
          {/* <nav className="flex justify-center space-x-6 text-lg font-medium">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                // Highlight the first category (Bracelets) as active/default
                className={`transition duration-200 ${
                  cat === "Bracelets"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {cat}
              </a>
            ))}
          </nav> */}
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
