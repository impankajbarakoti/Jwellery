import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // For slider navigation arrows

// --- TestimonialCard Component (reusable for each testimonial) ---
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 md:p-8 max-w-2xl mx-auto">
      {/* Client Image */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full object-cover shadow-lg mb-6"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/96x96/cccccc/333333?text=User";
        }}
      />

      {/* Testimonial Text */}
      <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      {/* Client Name and Title */}
      <div className="flex items-center space-x-2">
        <h4 className="text-xl font-semibold text-gray-900">
          {testimonial.name}
        </h4>
        <span className="text-xl text-gray-300">/</span>
        <p className="text-lg text-gray-500 font-light">{testimonial.title}</p>
      </div>
    </div>
  );
};

// --- Main TestimonialSlider Component ---
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track which testimonial is active

  const testimonials = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000", // Placeholder image
      text: "All Perfect!! I have three sites with magento, this theme is the best!! Excellent support, advice theme installation package, sorry for English, are italian but I had no problem!! Thank you !",
      name: "John Sullivan",
      title: "Customer",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhosTrH3NnmFuQkI2i3EuNWBpjBhVdjprQQw&s", // Placeholder image
      text: "Absolutely stunning jewelry and top-notch service. My custom necklace arrived quickly and exceeded all expectations. Highly recommend this store for unique and high-quality pieces!",
      name: "Maria Rodriguez",
      title: "Satisfied Client",
    },
    {
      id: 3,
      image:
        "https://www.shutterstock.com/shutterstock/videos/1034450006/thumb/9.jpg?ip=x480", // Placeholder image
      text: "I was looking for a special gift and found the perfect bracelet here. The website was easy to navigate, and the checkout process was smooth. Will definitely be a returning customer.",
      name: "David Chen",
      title: "Happy Buyer",
    },
  ];

  // Function to go to the previous testimonial
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center font-serif mb-10">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">
            Client Testimonials
          </h2>
          <p className="text-gray-500 font-serif">What they say</p>
        </header>

        {/* Testimonial Card */}
        <div className="relative">
          <TestimonialCard testimonial={currentTestimonial} />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-400 z-20"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-400 z-20"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Optional: Navigation Dots (if you want a visual indicator of current slide) */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gray-700"
                  : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
              } transition-colors duration-200`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
