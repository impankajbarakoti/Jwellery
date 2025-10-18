import React from "react";

// You will need state management for a real form, but here is the structure.

const ContactFormMap = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! (This is a demo, no data was sent.)");
    // Actual form submission logic would go here
  };

  // Google Maps iFrame URL (Example location: A Jewelry store in Mumbai)
  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.085816772741!2d72.8277322750379!3d18.9660233822187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf55928f6a9f%3A0x73b18413b86064f2!2sTanishq!5e0!3m2!1sen!2sin!4v1699960244798!5m2!1sen!2sin";

  return (
    <div className="py-16 md:py-24 bg-gray-50" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="lg:pr-8">
            <h3 className="text-3xl font-serif text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                  placeholder="E.g., Rohan Verma"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                  placeholder="rohan@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                  placeholder="Your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-amber-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-black transition duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="h-96 w-full rounded-lg shadow-xl overflow-hidden">
            <h3 className="text-2xl font-serif text-gray-900 mb-3 lg:hidden">
              Our Location
            </h3>
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corano Jewellery Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormMap;
