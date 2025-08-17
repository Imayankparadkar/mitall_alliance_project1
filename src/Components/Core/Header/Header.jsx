import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation for path detection
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current path
    const isHome = location.pathname === '/'; // Only show nav on home

    return (
        <header className="px-6 h-13">
            <div className="flex items-center justify-between w-full mx-auto">
                {/* Logo */}
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-[80px] ml-2 h-auto scale-205"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation (conditional on home page) */}
                {isHome && (
                    <nav className="hidden md:flex items-center cursor-pointer space-x-14 text-white/80 font-medium">
                        <Link to="/blogs" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Success Stories</Link>
                        <Link to="/events" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Events</Link>
                        <Link to="/podcasts" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Podcasts</Link>
                        {/* <Link to="/pricing" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Pricing</Link> */}
                        <Link to="/books" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Books</Link>
                        <Link to="/mentors" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Mentors</Link>
                        <Link to="/history" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">History</Link>
                        <Link to="/careers" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Careers</Link>
                        <Link to="/faqs" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">FAQs</Link>
                    </nav>
                )}

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
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
                    </Link>
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
                        <Link to="/" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none' }}>
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                className="w-[100px] h-auto mx-auto scale-205"
                            />
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-6 top-6"
                        >
                            <X className="text-white w-7 h-7" />
                        </button>
                    </div>

                    {/* Mobile Navigation (conditional on home page) */}
                    {isHome && (
                        <nav className="flex flex-col space-y-6 text-white text-lg font-semibold">
                            <Link to="/blogs" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Success Stories</Link>
                            <Link to="/events" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Events</Link>
                            <Link to="/podcasts" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Podcasts</Link>
                            <Link to="/pricing" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Pricing</Link>
                            <Link to="/books" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Books</Link>
                            <Link to="/mentors" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Mentors</Link>
                            <Link to="/history" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>History</Link>
                            <Link to="/careers" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Careers</Link>
                            <Link to="/faqs" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>FAQs</Link>
                        </nav>
                    )}

                    <div className="mt-8">
                        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
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
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;