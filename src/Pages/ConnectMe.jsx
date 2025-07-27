import React from "react";

const ConnectMe = () => {
    const socialLogos = [
        { id: 1, image: "/Connect/l1.png", alt: "LinkedIn", link: "https://linkedin.com" },
        { id: 2, image: "/Connect/l2.png", alt: "Twitter", link: "https://twitter.com" },
        { id: 3, image: "/Connect/l3.png", alt: "Instagram", link: "https://instagram.com" },
        { id: 4, image: "/Connect/l4.png", alt: "YouTube", link: "https://youtube.com" },
        { id: 5, image: "/Connect/l5.png", alt: "Website", link: "https://example.com" },
        { id: 6, image: "/Connect/l6.png", alt: "Facebook", link: "https://facebook.com" },
        { id: 7, image: "/Connect/l7.png", alt: "GitHub", link: "https://github.com" },
    ];

    return (
        <div>
            {/* Divider */}
            <div>
                {/* <img
                    src="/Core/Divider.png"
                    className="h-4 sm:scale-75 -mt-[2px] sm:-mt-[7px]"
                    alt="Divider"
                /> */}
            </div>

            {/* Main Section */}
            <div className="flex px-5 sm:px-20 w-full justify-center h-[550px] bg-cover bg-center relative mb-10 sm:mb-0">
                <div className="absolute inset-0"></div>

                <div className="relative z-10 text-center">
                    <h1
                        className="text-transparent bg-clip-text bg-gradient-to-r 
                       from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                       via-[#DDB56D] to-[#CE9D4B] 
                       text-2xl sm:text-[50px] font-bold w-xs sm:w-full mt-15 uppercase"
                    >
                        Connect with me
                    </h1>

                    <div>
                        <img
                            src="/ConsistentMatrix/border.png"
                            className="w-[280px] sm:w-[510px] h-[8px] mx-auto"
                            alt="Border"
                        />
                    </div>

                    {/* Connection Box */}
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex flex-col items-center mt-12 w-full sm:w-[1000px] h-auto py-6 border border-[#CE9D4B] rounded-lg bg-white/10">
                            <span className="text-lg text-[#D0A151] font-semibold uppercase">
                                Connect with Sarthak
                            </span>

                            {/* ✅ Responsive Logos */}
                            <div
                                className="
                                    mt-6 gap-4 sm:gap-6
                                    grid grid-cols-3
                                    sm:flex sm:flex-row sm:justify-center sm:items-center
                                "
                            >
                                {socialLogos.map((logo, index) => (
                                    <a
                                        key={logo.id}
                                        href={logo.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex justify-center ${index === socialLogos.length - 1 ? "col-span-3 sm:col-span-1" : ""
                                            }`}
                                    >
                                        <div className="border rounded-lg border-[#D0A151] p-3 sm:p-4 w-[80px] h-[80px] sm:w-auto sm:h-auto flex justify-center items-center">
                                            <img
                                                src={logo.image}
                                                alt={logo.alt}
                                                className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] hover:scale-110 transition-transform"
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectMe;
