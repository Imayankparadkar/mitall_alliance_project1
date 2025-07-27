import React from 'react';
import Header from '../Components/Core/Header/Header_New';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData'; // Assuming blogData.js is in src/data

const Blogs = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // The custom gold color used throughout the component.
  const brandGold = 'rgba(208, 161, 81, 1)';

  return (
    <div className="bg-white">
      <Header />
      {/* Line divider image */}
      <img src="/Blog/line.png" alt="divider" className="w-full h-auto block" />

      {/* Hero Section */}
      <div 
        className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Blog/blog 1.png')" }}
      >
        <img 
          src="/Blog/arrow_pattern.png" 
          alt="arrow pattern" 
          className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 h-[80px] w-auto z-20" 
        />
      </div>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto bg-transparent pt-24 px-4 pb-8 md:pt-32 md:px-8 md:pb-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-2xl font-bold inline-block m-0 pb-2"
            style={{ color: brandGold }}
          >
            BLOGS
          </h2>
          <div 
            className="h-1 w-[60px] mx-auto"
            style={{ backgroundColor: brandGold }}
          ></div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogPosts.map(post => (
            <div 
              key={post.id} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              onClick={() => handleCardClick(post.id)}
            >
              <img 
                src={post.imageUrl} 
                alt={post.alt} 
                className="w-full h-auto block aspect-video object-cover" 
              />
              <div 
                className="p-4 text-center h-[80px] flex items-center justify-center"
                style={{ backgroundColor: brandGold }}
              >
                <h3 className="text-white text-[1.1rem] font-semibold m-0">
                  {post.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;