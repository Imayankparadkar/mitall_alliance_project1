import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="px-6 h-13">
            <div className="flex items-center justify-between w-full mx-auto">
                {/* Logo */}
                <div>
                    <a href="#">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-[80px] ml-2 h-auto scale-205"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center cursor-pointer space-x-14 text-white/80 font-medium">
                    <a href="#">Blogs</a>
                    <a href="#">Events</a>
                    <a href="#">Podcasts</a>
                    <a href="#">Pricing</a>
                    <a href="#">Books</a>
                    <a href="#">Mentors</a>
                    <a href="#">History</a>
                    <a href="#">Careers</a>
                    <a href="#">FAQs</a>
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <div className="relative w-[220px] h-12 cursor-pointer">
                        <svg
                            className="absolute inset-0"
                            viewBox="0 0 322 68"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M305.174 1.5L320.211 34L305.174 66.5H20.3955L1.96191 34L20.3955 1.5H305.174Z"
                                fill="black"
                                stroke="#CE9D4B"
                                strokeWidth="2"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                            BOOK YOUR CALL
                        </span>
                    </div>
                </div>

                {/* Hamburger Icon (Mobile Only) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="text-white w-7 h-7" />
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-[#0E0E0E] flex flex-col items-center justify-start py-6">

                    <div className="flex justify-between items-center w-full px-6 mb-6">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-[100px] h-auto mx-auto scale-205"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-6 top-6"
                        >
                            <X className="text-white w-7 h-7" />
                        </button>
                    </div>


                    <nav className="flex flex-col space-y-6 text-white text-lg font-semibold">
                        <a href="#">Blogs</a>
                        <a href="#">Events</a>
                        <a href="#">Podcasts</a>
                        <a href="#">Pricing</a>
                        <a href="#">Books</a>
                        <a href="#">Mentors</a>
                        <a href="#">History</a>
                        <a href="#">Careers</a>
                        <a href="#">FAQs</a>
                    </nav>


                    <div className="mt-8">
                        <div className="relative w-[300px] h-15 cursor-pointer">
                            <svg
                                className="absolute inset-0"
                                viewBox="0 0 322 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M305.174 1.5L320.211 34L305.174 66.5H20.3955L1.96191 34L20.3955 1.5H305.174Z"
                                    fill="black"
                                    stroke="#CE9D4B"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                                BOOK YOUR CALL
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
