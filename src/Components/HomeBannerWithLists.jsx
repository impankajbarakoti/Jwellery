import React from 'react';

// --- Reusable Product Item Component for the vertical lists ---
const ProductListItem = ({ product }) => {
  return (
    <div className="flex items-start py-3 border-b border-gray-100 last:border-b-0">
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-16 h-16 object-contain mr-4 flex-shrink-0"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/64x64/f8f8f8/999999?text=Product";
        }}
      />

      {/* Product Details */}
      <div>
        <h4 className="text-sm  font-serif font-medium text-gray-800 hover:text-gray-600 transition cursor-pointer">
          {product.title}
        </h4>
        <p className="text-base font-serif  text-gray-900 mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

// --- Reusable List Section Component ---
const ProductListSection = ({ title, products }) => {
  return (
    <div className="lg:w-1/3 p-4 md:p-6">
      <h3 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-3">
        {title}
      </h3>
      <div className="space-y-1">
        {products.map((product, index) => (
          <ProductListItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---
const HomeBannerWithLists = () => {
  
  // Placeholder Data
  const featuredProducts = [
    {
      title: "Carat Solitaire Diamond",
      price: 78.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9-300x300.jpg",
    },
    {
      title: "Diamond Band Ring",
      price: 86.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15-300x300.jpg",
    },
    {
      title: "Diamond Band Ring",
      price: 100.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7-300x300.jpg",
    },
    {
      title: "Dissent Collar Earring",
      price: 95.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/2-300x300.jpg",
    },
  ];

  const bestSellers = [
    {
      title: "Panther Bracelet",
      price: 100.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/17-300x300.jpg",
    },
    {
      title: "Diamond Band Ring",
      price: 86.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15-300x300.jpg",
    },
    {
      title: "Sterling Silver Bead",
      price: 80.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/18-300x300.jpg",
    },
    {
      title: "Silvermist Bracelet",
      price: 68.0,
      imageUrl:
        "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/16-300x300.jpg",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row   shadow-xl rounded-xl overflow-hidden">
        {/* 1. Left Side: Large Banner */}
        <div className="relative lg:w-1/3 min-h-[300px] lg:min-h-0 bg-gray-100 flex items-center p-8">
          {/* Background Image (using a simple placeholder) */}
          <img
            src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/04/banner3-300x237.jpg"
            alt="Wedding Rings"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* Text Overlay */}
          <div className="relative z-10 text-gray-900">
            <p className="text-sm tracking-widest font-serif uppercase font-light mb-1">
              Beautiful
            </p>
            <h2 className="text-4xl md:text-5xl font-serif  mb-4 leading-tight">
              Wedding Rings
            </h2>
            <a
              href="#shop-rings"
              className="text-base font-semibold border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition duration-200"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* 2. Middle Section: Featured Products List */}
        <ProductListSection
          title="Featured Products"
          products={featuredProducts}
        />

        {/* 3. Right Section: Best Sellers List */}
        <ProductListSection title="Best Sellers" products={bestSellers} />
      </div>
    </div>
  );
};

export default HomeBannerWithLists;