import React from "react";

const GreatTogether = () => {

    const meaningCards = [
        {
            image: "/Together/M.png",
            title: "Meaning",
            quote: "“Efforts and courage are not enough without purpose and direction.”",
            author: "- John F. Kennedy",
            description:
                "Discover the soul of the brand - its deeper purpose, vision, and mission. Meaning drives impact.",
        },
        {
            image: "/Together/I.png",
            title: "Integrity",
            quote: "“Integrity is doing the right thing, even when no one is watching.”",
            author: "- C.S. Lewis",
            description:
                "Audit the alignment between your message and your actions — across  online, offline, and internal culture.",
        },
        {
            image: "/Together/T.png",
            title: "trust",
            quote: "“Trust is built with consistency.”",
            author: "- Lincoln Chafee",
            description:
                "Build and measure reputation, reviews, and credibility — how others speak  about you matters more than what you say.",
        },
        {
            image: "/Together/T.png",
            title: "transparency",
            quote: "“Honesty and transparency make you vulnerable. Be honest and transparent anyway.”",
            author: "-  Mother Teresa",
            description:
                "Showcase authentic communication, open processes, and ethical  storytelling. Vulnerability builds connection.",
        },
        {
            image: "/Together/A.png",
            title: "authority",
            quote: "“Become the expert, the authority, the leader — and profits will follow.”",
            author: "- Dan Kennedy ",
            description:
                "Develop your thought leadership, recognition, and influence in the market or  community you serve.",
        },
        {
            image: "/Together/L.png",
            title: "legacy",
            quote: "“Carve your name on hearts, not tombstones.”",
            author: "- Shannon L. Alder",
            description:
                "Architect a future-ready brand that leaves a meaningful mark, scales  sustainably, and transcends trends.",
        },
    ];

    return (
        <div className="bg-black min-h-screen relative py-10">
            {/* Divider */}
            <div className="absolute -top-[0px] scale-125 sm:-top-[6px] left-0 right-0">
                <img
                    src="/Core/BDivider.png"
                    className="mx-auto scale-75"
                    alt="Divider"
                />
            </div>


            <div className="flex px-5 sm:px-20 w-full bg-cover bg-center relative">
                <div className="absolute inset-0"></div>

                <div className="relative z-10 w-full">
                    <div className="text-center mb-10">
                        {/* Heading */}
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r 
                            from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                            via-[#DDB56D] to-[#CE9D4B] 
                            text-2xl sm:text-[50px] font-bold uppercase mt-16 leading-snug"
                        >
                            Let’s build something great together
                        </h1>

                        <p className="text-[#E0E0E0] mt-4 text-sm sm:text-base">
                            Ready to transform your business? Get in touch with our team of experts.
                        </p>


                        <div className="mt-8 flex flex-col ">
                            <img
                                src="/Together/logo.png"
                                className="w-[150px]"
                                alt="Brand Logo"
                            />
                            <span className="text-[#E0E0E0] w-full text-start text-sm sm:text-base mt-2">
                                Creating World-Class Brands
                            </span>
                            <img
                                src="/Core/border.png"
                                className="w-[300px] mt-2"
                                alt="Decorative Border"
                            />
                        </div>

                        <div className="flex-col justify-center hidden sm:flex items-center mt-10">
                            <img
                                src="/Together/logo2.png"
                                className="w-[650px] max-w-full"
                                alt="Together Logo"
                            />

                            <div>

                                <div className="flex items-center justify-center gap-4 mt-6 w-full max-w-lg">
                                    <hr className="border-t border-[#D0A151] flex-1" />
                                    <span className="text-[#D0A151] text-[26px] sm:text-[30px] font-semibold uppercase whitespace-nowrap">
                                        Meaning
                                    </span>
                                    <hr className="border-t border-[#D0A151] flex-1" />
                                </div>
                                <div>
                                    <span className="text-[#FFFFFF]/70 space-y-3 flex flex-col text-start">
                                        <span>“Efforts and courage are not enough without purpose and direction.”</span>
                                        <span>- John F. Kennedy</span>
                                    </span>
                                </div>
                                <div className="mt-3 font-semibold">
                                    <span className="text-[#CE9D4B] text-[12px]">Discover the soul of the brand - its deeper purpose, vision, and mission.  Meaning drives impact.</span>
                                </div>
                            </div>
                            <hr className="border-t border-[#D0A151] flex-1 mt-10" />

                            <h1
                                className="text-transparent bg-clip-text bg-gradient-to-r
                            from-[#CC9A48] via-[#FFFFFF] to-[#C99748]

                            text-2xl sm:text-[30px] font-bold uppercase mt-10 leading-snug"
                            >
                                BEHIND THE BADASS BRANDS
                            </h1>

                            <div className="flex items-center w-full justify-center">
                                <img
                                    src="/Together/pc.png"
                                    className="w-[300px]"
                                />
                                <div className="text-white/70 flex flex-col">
                                    <span>INNOVATIVE INSIGHTS FROM 100+ ICONIC INTERNET INFLUENCERS</span>
                                    <button className="bg-[#D0A151] mt-5 w-fit px-4 text-black py-2 rounded-full cursor-pointer">
                                        SCHEDULE A MEETING
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="sm:hidden ">

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {meaningCards.map((card, index) => (
                                    <div key={index} className="flex flex-row gap-2">
                                        <img src={card.image} className="h-[70px]" alt={card.title} />
                                        <div className="flex flex-col text-start text-[10px]">
                                            <span className="text-[#CE9D4B] text-[20px] uppercase">
                                                {card.title}
                                            </span>
                                            <span className="text-white">{card.quote}</span>
                                            <span className="text-white">{card.author}</span>
                                            <span className="text-[#CE9D4B]">{card.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>



                            <div className="flex justify-center mt-10">
                                <div>
                                    <img
                                        src="/Together/border.png"
                                        className="h-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-2 flex w-full items-center justify-center flex-col">
                                <img
                                    src="/Together/pc.png"
                                    alt="Together"

                                />
                                <span className="bg-gradient-to-b from-[#CC9A48] via-[#FFFFFF] to-[#C99748] bg-clip-text text-[20px] font-semibold text-transparent">
                                    BEHIND THE BADASS BRANDS
                                </span>
                                <span className="text-white mt-2">
                                    INNOVATIVE INSIGHTS FROM 100+ ICONIC INTERNET INFLUENCERS
                                </span>
                                <button className="bg-[#D0A151] mt-10 py-2 w-[250px] rounded-full px-4 ">
                                    SCHEDULE A MEETING
                                </button>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreatTogether;
