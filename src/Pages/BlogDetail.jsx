import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Core/Header/Header_New';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData'; // Ensure path is correct

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === parseInt(id));

    // Define the custom brand color for reuse.
    const brandGold = 'rgba(208, 161, 81, 1)';

    // Handler for the back button
    const handleBackClick = () => navigate('/blogs');

    // Render a "not found" message if the post doesn't exist.
    if (!post) {
        return (
            <div className="bg-white min-h-screen">
                <Header />
                <div className="text-center p-16">
                    <h1 className="text-3xl font-bold mb-6">Blog post not found</h1>
                    <button onClick={handleBackClick} className="flex items-center mx-auto bg-transparent border-none font-bold cursor-pointer text-base" style={{ color: brandGold }}>
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
            <img src="/Blog/line.png" alt="divider" className="w-full h-auto block" />
            
            {/* Hero Banner Section */}
            <div 
                className="relative w-full h-[250px] md:h-[450px] bg-cover bg-center"
                style={{ backgroundImage: "url('/Blog/blog 1.png')" }}
            >
                <img 
                    src="/Blog/arrow_pattern.png" 
                    alt="arrow pattern" 
                    className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 h-[80px] w-auto z-20" 
                />
            </div>

            <main className="max-w-4xl mx-auto px-4 pt-16 pb-8 md:px-8 md:pt-24 md:pb-12">
                <h1 
                    className="font-bold text-center mb-8 text-2xl md:text-4xl"
                    style={{ color: brandGold }}
                >
                    {post.alt}
                </h1>

                <img 
                    src={post.imageUrl} 
                    alt={post.alt} 
                    className="w-full h-auto md:h-[250px] rounded-lg mb-8 block mx-auto object-cover"
                />

                <img 
                    src="/Blog/linkedin.png" 
                    alt="linkedin" 
                    className="w-full h-auto md:h-[150px] block mx-auto mb-8 object-cover rounded-lg"
                />

                <article className="text-justify">
                    <h2 className="font-bold text-black mb-6 text-center text-lg md:text-xl">
                        EXPLORING THE FUTURE OF SPACE TECHNOLOGY: INSIGHTS FROM A LEADING CEO
                    </h2>
                    <p className="leading-loose text-lg text-gray-700">
                        {post.content}
                    </p>
                </article>

                {/* Separator Line */}
                <div className="h-px bg-gray-400 mt-12 mb-6"></div>

                <button onClick={handleBackClick} className="flex items-center bg-transparent border-none font-bold cursor-pointer text-base" style={{ color: brandGold }}>
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Blog
                </button>
            </main>
        </div>
    );
};

export default BlogDetail;