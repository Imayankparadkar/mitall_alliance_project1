import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/Core/Header/Header_New";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/blogData"; // Ensure path is correct

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // Define the custom brand color for reuse.
  const brandGold = "rgba(208, 161, 81, 1)";

  // Handler for the back button
  const handleBackClick = () => navigate("/blogs");

  // Render a "not found" message if the post doesn't exist.
  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="text-center p-16">
          <h1 className="text-3xl font-bold mb-6">Blog post not found</h1>
          <button
            onClick={handleBackClick}
            className="flex items-center mx-auto bg-transparent border-none font-bold cursor-pointer text-base"
            style={{ color: brandGold }}
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Render the blog post details if found.
  return (
    <div className="bg-white">
      <Header />
      {/* Line divider image */}
      <img src="/Blog/line.png" alt="divider" className="w-full block" />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/Blog/blog 1.png"
          alt="Frequently Asked Questions"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
          {/* The question mark image is now part of the hero for better responsive control */}
        </div>
      </div>

      {/* The arrow divider scales with the width of the screen. */}
      <img
        src="/Blog/arrow_pattern.png"
        alt="arrow divider"
        className="w-full block -mt-px"
      />

      <main className="max-w-4xl mx-auto px-4 pt-10 pb-8 md:px-8 md:pt-12 md:pb-12">
        <h1
          className="font-bold text-center mb-8 text-2xl md:text-4xl"
          style={{ color: brandGold }}
        >
          {post.alt}
        </h1>

        <img
          src={post.imageUrl}
          alt={post.alt}
          className="w-auto h-auto md:h-[350px] mb-8 block mx-auto object-cover"
        />

        <img
          src="/Blog/linkedin.png"
          alt="linkedin"
          className="w-full h-auto md:h-[150px] block mx-auto mb-8 object-cover rounded-lg"
        />

        <article className="text-justify">
          <h2 className="font-bold text-black mb-6 text-center text-lg md:text-xl">
            EXPLORING THE FUTURE OF SPACE TECHNOLOGY: INSIGHTS FROM A LEADING
            CEO
          </h2>
          <p className="leading-loose text-lg text-gray-700">{post.content}</p>
        </article>

        {/* Separator Line */}
        <div className="h-px bg-gray-400 mt-12 mb-8"></div>

        <button
          onClick={handleBackClick}
          className="flex items-center bg-transparent border-none font-bold cursor-pointer text-3xl"
          style={{ color: brandGold }}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </button>
      </main>
    </div>
  );
};

export default BlogDetail;
