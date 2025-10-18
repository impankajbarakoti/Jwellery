import React from "react";
import { Calendar, User } from "lucide-react";

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Timeless Elegance of Solitaire Diamonds",
    excerpt:
      "Discover the history and enduring appeal of the solitaire setting—a classic choice for engagement rings.",
    image:
      "https://blog.tanishq.co.in/wp-content/uploads/2025/04/banner-new-10bl.png", // Placeholder for a diamond image
    date: "Oct 10, 2025",
    author: "Corano Insights",
    category: "Trends",
  },
  {
    id: 2,
    title: "Guide to Ethical Gold Sourcing",
    excerpt:
      "Learn how Corano ensures all our precious metals are sourced responsibly and sustainably.",
    image:
      "https://blog.tanishq.co.in/wp-content/uploads/2025/04/banner-new-12bl.png", // Placeholder for a gold texture image
    date: "Sep 25, 2025",
    author: "Sustainability Team",
    category: "Ethics",
  },
  {
    id: 3,
    title: "Matching Jewellery to Your Neckline",
    excerpt:
      "A simple guide to choosing the perfect necklace length for any dress or top you wear.",
    image:
      "https://blog.tanishq.co.in/wp-content/uploads/2025/04/banner-1new-bl.png", // Placeholder for a model wearing a necklace
    date: "Sep 01, 2025",
    author: "Style Experts",
    category: "Tips & Tricks",
  },
  {
    id: 4,
    title: "Matching Jewellery to Your Neckline",
    excerpt:
      "A simple guide to choosing the perfect necklace length for any dress or top you wear.",
    image:
      "https://blog.tanishq.co.in/wp-content/uploads/2025/07/Clip-path-group-16.png", // Placeholder for a model wearing a necklace
    date: "Sep 01, 2025",
    author: "Style Experts",
    category: "Tips & Tricks",
  },
  {
    id: 5,
    title: "Matching Jewellery to Your Neckline",
    excerpt:
      "A simple guide to choosing the perfect necklace length for any dress or top you wear.",
    image:
      "https://blog.tanishq.co.in/wp-content/uploads/2025/06/Rectangle-82-min.png", // Placeholder for a model wearing a necklace
    date: "Sep 01, 2025",
    author: "Style Experts",
    category: "Tips & Tricks",
  },
  {
    id: 6,
    title: "Matching Jewellery to Your Neckline",
    excerpt:
      "A simple guide to choosing the perfect necklace length for any dress or top you wear.",
    image:
      "https://blog.tanishq.co.in/wp-content/uploads/2023/11/image-162.png", // Placeholder for a model wearing a necklace
    date: "Sep 01, 2025",
    author: "Style Experts",
    category: "Tips & Tricks",
  },
];

const BlogPage = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-gray-900 mb-2">
            Corano Blog: Insights
          </h1>
          <p className="text-xl text-gray-600">
            Timeless stories, trends, and tips from the world of fine jewellery.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl group"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
                  {post.category}
                </span>

                <h3 className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-amber-600 transition duration-300">
                  <a href={`/blog/${post.id}`}>{post.title}</a>{" "}
                  {/* Link to Single Post Page */}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Data */}
                <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1 text-amber-500" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-amber-500" />
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Placeholder) */}
        <div className="text-center mt-16">
          <button className="bg-amber-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-black transition duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
