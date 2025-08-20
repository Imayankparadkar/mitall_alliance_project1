import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/Core/Header/Header_New";
import { ArrowLeft } from "lucide-react";
// UPDATED: The import path now points to the new data file.
import { blogPosts } from "../data/podcastData"; // Ensure path is correct

const PodcastsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // Define the custom brand color for reuse.
  const brandGold = "rgba(208, 161, 81, 1)";

  // Handler for the back button
  const handleBackClick = () => navigate("/podcasts");

  // Render a "not found" message if the post doesn't exist.
  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="text-center p-16">
          <h1 className="text-3xl font-bold mb-6">Podcast not found</h1>
          <button
            onClick={handleBackClick}
            className="flex items-center mx-auto bg-transparent border-none font-bold cursor-pointer text-base"
            style={{ color: brandGold }}
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Podcasts
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
      <img src="/Podcasts/line.png" alt="divider" className="w-full block" />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/Podcasts/podcast1.png"
          alt="Podcast hero banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
          {/* Content for the hero section can be placed here */}
        </div>
      </div>

      {/* The arrow divider scales with the width of the screen. */}
      <img
        src="/Podcasts/podcast2.png"
        alt="arrow divider"
        className="w-full block -mt-px"
      />

      <main className="max-w-4xl mx-auto px-4 pt-12 pb-8 md:px-8 md:pt-12 md:pb-12">
        <h1
          className="font-bold text-center mb-8 text-2xl md:text-4xl"
          style={{ color: brandGold }}
        >
          {post.alt}
        </h1>

        <h1
          className=" font-medium text-center mb-5 text-1xl md:text-2xl"
          style={{ color: "gray-500" }}
        >
          {post.date}
        </h1>

        <br />
        <img
          src={post.imageUrl}
          alt={post.alt}
          className="w-auto h-auto md:h-[350px] mb-8 block mx-auto object-cover"
        />

        <br />

        <article className="text-justify">
          <h2 className="font-bold text-black mb-6 text-center text-lg md:text-xl">
            EXPLORING THE FUTURE OF SPACE TECHNOLOGY: INSIGHTS FROM A LEADING
            CEO
          </h2>
          <p className="leading-loose text-lg text-gray-700">{post.content}</p>
        </article>

        {/* Separator Line */}
        <div className="h-px bg-gray-400 mt-12 mb-6"></div>

        <button
          onClick={handleBackClick}
          className="flex items-center bg-transparent border-none font-bold cursor-pointer text-3xl"
          style={{ color: brandGold }}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Podcasts
        </button>
      </main>
    </div>
  );
};

export default PodcastsDetail;
