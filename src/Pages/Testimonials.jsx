import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
    // ... (all other code remains the same)
    const testimonialsData = [
        {
            id: 1,
            name: "Clay Boykin",
            role: "Author | Thought Partner | Guide",
            avatar: "/Core/Avatar.png",
            quote:
                "Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum. Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum. Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum Lorem1 ipsum.",
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Leadership Coach",
            avatar: "/Core/Avatar.png",
            quote:
                "Her guidance completely transformed my communication style. Truly life-changing experience.",
        },
        {
            id: 3,
            name: "Arjun Mehta",
            role: "CEO | Visionary Leader",
            avatar: "/Core/Avatar.png",
            quote:
                "Working with this framework gave me clarity and the courage to expand my business in Asia.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleRedirect = () => {
        // This path should match the route for your Testimonials_InnerPage component
        navigate('/testimonials'); 
    };

    return (
        <div className="flex px-5 sm:px-20 h-[700px] sm:h-screen w-full bg-cover bg-center relative">
            <div className="relative z-10 w-full">
                <div className="text-center mb-10">
                    <h1
                        className="text-black bg-clip-text bg-gradient-to-r
                        text-2xl sm:text-[50px] font-bold uppercase mt-20"
                    >
                        <span>Success Stories</span>
                    </h1>
                    <img
                        src="/ConsistentMatrix/border.png"
                        className="sm:w-[470px] w-[200px] h-2 sm:h-[8px] mx-auto mb-4"
                        alt="Border"
                    />
                    <span className="text-2xl text-black/60 flex flex-col w-full justify-center">
                        <span>Trusted by Leaders Across</span>industries
                    </span>
                </div>

                <div className="relative flex justify-center top-20 h-full transition-all duration-500 ease-in-out">
                    <div className="bg-[#D0A151] sm:right-80 w-[250px] sm:w-[280px] h-[200px]  shadow-md flex flex-col justify-center items-center relative">
                        <div className="absolute -top-15">
                            <img
                                src={testimonialsData[currentIndex].avatar}
                                alt="Avatar"
                                className="w-[150px] h-[150px] rounded-full shadow-md"
                            />
                        </div>
                        <div className="text-center">
                            <span className="text-black/60 font-bold block mt-20 mb-3">
                                {testimonialsData[currentIndex].name}
                            </span>
                            <span className="text-white text-[12px] font-medium block">
                                {testimonialsData[currentIndex].role}
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-50 sm:right-70  transition-all duration-500">
                        <div>
                            <img
                                src="/Core/q1.png"
                                className="h-8 absolute -top-50 sm:h-15"
                                alt="Quote Start"
                            />
                        </div>
                        <div className="sm:w-xl text-[20px] sm:text-sm -mt-30 text-black font-large">
                            <span>{testimonialsData[currentIndex].quote}</span>
                        </div>
                        <div className="absolute right-10 sm:right-0 -top-15">
                            <img
                                src="/Core/q1.png"
                                className="h-8 sm:h-15 rotate-180"
                                alt="Quote End"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center absolute w-full top-170 sm:top-155 space-x-3">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 
                                ${
                                    currentIndex === index
                                        ? "bg-black scale-110"
                                        : "border"
                                }`}
                        ></button>
                    ))}
                    <div className="flex justify-center absolute w-full top-15 space-x-3">
                        <button
                            onClick={handleRedirect}
                            className="bg-black w-[250px] text-center text-white py-2 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
                        >
                            More Testimonials
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;