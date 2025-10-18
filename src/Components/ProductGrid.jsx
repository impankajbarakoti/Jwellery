import P1 from '../assets/P1.jpg'
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.jpg";
import P4 from "../assets/P4.jpg";
import P5 from "../assets/P5.jpg";
import P6 from "../assets/P6.jpg";
import P7 from "../assets/P7.jpg";
import P8 from "../assets/P8.jpg";
import React, { useState } from "react";
import { Heart, Scale3d, Eye, X } from "lucide-react";

// --- Product Modal Component ---
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const goldColor = "#B8A47E";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl md:w-85 md:mt-10 w-full px-4 h-[470px] p-6 relative shadow-xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={24} />
        </button>

        {/* Product Image */}
        <div className="flex justify-center mb-6">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-48 h-48 object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="text-center">
          <p className="text-sm text-gray-400 font-serif mb-1">
            {product.category}
          </p>
          <h2 className="text-xl mb-2 font-serif text-gray-800">
            {product.title}
          </h2>

          {/* Price */}
          <div className="mb-4">
            {product.priceRange ? (
              <span className="text-lg font-semibold font-serif text-gray-900">
                ${product.priceRange.min.toFixed(2)} - $
                {product.priceRange.max.toFixed(2)}
              </span>
            ) : product.isSale ? (
              <span className="text-lg font-semibold">
                <span className="text-gray-400 line-through mr-2 font-normal text-base">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span style={{ color: goldColor }}>
                  ${product.price.toFixed(2)}
                </span>
              </span>
            ) : (
              <span className="text-lg font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Sizes */}
          <div className="flex justify-center gap-3 mb-4">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="px-3 py-1 border rounded-full text-sm text-gray-700 hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 font-serif text-sm mb-6">
            This is a high-quality product crafted with care and precision.
            Perfect for those who value design and elegance.
          </p>

          {/* Add to Cart Button */}
          <button className="bg-gray-500 font-serif text-white font-semibold py-2 px-6 rounded-full hover:bg-amber-400 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Product Card Component ---
const ProductCard = ({ product, onView }) => {
  const [liked, setLiked] = useState(false);
  const goldColor = "#B8A47E";

  const formatPrice = () => {
    if (product.priceRange) {
      return (
        <span className="text-lg font-semibold text-gray-900">
          ${product.priceRange.min.toFixed(2)} - $
          {product.priceRange.max.toFixed(2)}
        </span>
      );
    }
    if (product.isSale) {
      return (
        <span className="text-lg font-semibold">
          <span className="text-gray-400 line-through mr-2 font-normal text-base">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span style={{ color: goldColor }}>${product.price.toFixed(2)}</span>
        </span>
      );
    }
    return (
      <span className="text-lg font-semibold text-gray-900">
        ${product.price.toFixed(2)}
      </span>
    );
  };

  return (
    <div className="bg-white group rounded-lg transition-shadow duration-300 relative shadow-sm hover:shadow-lg">
      <div className="relative p-4 md:p-6 flex justify-center items-center h-64">
        {product.isSale && (
          <span className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            Sale!
          </span>
        )}

        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x400/f8f8f8/999999?text=Product";
          }}
        />

        <div className="absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300">
          <button
            className={`p-2 rounded-full shadow-md hover:shadow-lg transition-shadow ${
              liked
                ? " border-red-500 bg-red-500 text-white animate-bounce"
                : " border-gray-500 bg-white text-gray-500"
            }`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Scale3d className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          </button>
        </div>

        {/* 'View Products' Button (Hover Effect) */}
        {product.isViewButton && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-8">
            <button
              onClick={() => onView(product)}
              className="w-full flex items-center justify-center bg-white text-gray-900 border border-gray-300 font-semibold py-2 rounded-full hover:bg-gray-100 transition duration-300 text-sm shadow-lg"
            >
              <Eye className="w-4 h-4 mr-2" />
              View products
            </button>
          </div>
        )}
      </div>

      <div className="p-4 pt-0 text-center">
        <p className="text-xs text-gray-400 font-light mb-1">
          {product.category}
        </p>
        <h3 className="text-base font-medium font-serif text-gray-800 mb-2 hover:text-gray-600 transition duration-200 cursor-pointer">
          {product.title}
        </h3>

        <div className="pb-4">{formatPrice()}</div>
      </div>
    </div>
  );
};

// --- Main Component ---
const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Carat Solitaire Diamond",
      category: "Rugs, Wall Decor",
      price: 78.0,
      imageUrl: P1,
      isSale: false,
      isViewButton: true,
    },
    {
      id: 2,
      title: "Pear-Shaped Black",
      category: "Brooches, Candles, Wall Decor",
      priceRange: { min: 68.0, max: 100.0 },
      imageUrl: P2,
      isViewButton: true,
    },
    {
      id: 3,
      title: "The World Jewelry",
      category: "Candles, Wall Decor",
      price: 115.0,
      imageUrl: P3,
      isSale: false,
      isViewButton: true,
    },
    {
      id: 4,
      title: "Women's Falla Earrings",
      category: "Candles, Wall Decor",
      price: 60.0,
      originalPrice: 85.0,
      imageUrl:
        P4,
      isSale: true,
      isViewButton: true,
    },
    {
      id: 5,
      title: "Lapis Hoop Earrings",
      category: "Clocks, Wall Decor",
      price: 115.0,
      imageUrl:
        P5,
      isSale: false,
      isViewButton: true,
    },
    {
      id: 6,
      title: "Sterling Silver Genuine",
      category: "Rugs, Wall Decor",
      price: 70.0,
      originalPrice: 80.0,
      imageUrl:
        P6,
      isSale: true,
      isViewButton: true,
    },
    {
      id: 7,
      title: "Women's Bijou Ear",
      category: "Brooches, Wall Decor",
      price: 45.0,
      imageUrl:
        P7,
      isSale: false,
      isViewButton: true,
    },
    {
      id: 8,
      title: "ZMens Womens 10K",
      category: "Candles, Wall Decor",
      priceRange: { min: 7.0, max: 9.0 },
      imageUrl:
        P8,
      isSale: true,
      isViewButton: true,
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">
            Our Products
          </h2>
          <p className="text-gray-500 font-serif">
            Add our products to your weekly lineup
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductGrid;
