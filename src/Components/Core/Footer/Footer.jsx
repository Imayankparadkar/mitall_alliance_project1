import React from "react";
import { MessageSquareText } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 sm:px-12 md:px-16 lg:px-20 relative font-sans">

            {/* Chat Icon - Positioned absolutely and scales nicely */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
                <div className="bg-[#D0A151] rounded-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <MessageSquareText className="text-black w-6 h-6" />
                </div>
            </div>

            {/* Main Footer Grid - Adjusts columns for different screen sizes for better stability */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 xl:gap-8">

                {/* About Section - Spans full width on medium screens, 2 columns on large screens */}
                <div className="md:col-span-3 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        {/* SVG Logo */}
                        <span className="text-[#CC9A48]">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 52 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Sarthak Mittal Logo"
                            >
                                <g clipPath="url(#clip0_376_2845)">
                                    <path
                                        d="M20 23.332C25.5228 23.332 30 18.8549 30 13.332C30 7.80918 25.5228 3.33203 20 3.33203C14.4772 3.33203 10 7.80918 10 13.332C10 18.8549 14.4772 23.332 20 23.332Z"
                                        stroke="#D0A151"
                                        strokeWidth="3.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M25.7951 21.4844L28.3334 36.6677L20.0001 31.6677L11.6667 36.6677L14.2051 21.4844"
                                        stroke="#D0A151"
                                        strokeWidth="3.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_376_2845">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <h2 className="text-[#CC9A48] font-bold text-xl">Sarthak Mittal</h2>
                    </div>
                    {/* Removed fixed width for a responsive max-width */}
                    <p className="text-gray-300 text-sm text-justify leading-relaxed max-w-md">
                        Sarthak Group of Companies provides the best business solutions,
                        helping businesses thrive through strategic and technical
                        development. Led by Mr. Sarthak Mittal, a top-tier business
                        consultant representing various companies, we are dedicated to
                        "Creating CEOs" and fostering the growth of MSMEs.
                    </p>
                </div>

                {/* Pages Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Pages</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        {["Home", "Services", "Courses", "Blog Insight", "Contact", "Term & Condition"].map(
                            (page) => (
                                <li key={page} className="hover:text-[#CC9A48] transition-colors duration-300 cursor-pointer">
                                    {page}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Company</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        {["Careers", "Support", "Price & Plans"].map((link) => (
                            <li key={link} className="hover:text-[#CC9A48] transition-colors duration-300 cursor-pointer">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get In Touch Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                    <div className="text-sm space-y-4">
                        <div>
                            <p className="font-bold text-white">Head Office</p>
                            <p className="text-gray-300">Vijay Nagar Part II, Indore, INDIA</p>
                        </div>
                        <div>
                            <p className="font-bold text-white">Sub Office</p>
                            <p className="text-gray-300">Indore, INDIA</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section - Stacks on mobile, row on larger screens */}
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-6">
                <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                    Copyright © {new Date().getFullYear()} {" "}
                    <span className="text-[#CC9A48] font-semibold">Sarthak Mittal</span>. All Rights Reserved.
                </p>
                {/* Responsive image sizing */}
                <img
                    src="/Core/sign.png"
                    alt="Signature"
                    className="mt-4 sm:scale-200 scale-250 sm:mt-0 h-10  sm:h-20"
                />
            </div>
        </footer>
    );
};

export default Footer;
