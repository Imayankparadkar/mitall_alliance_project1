import React from "react";

const Services = () => {

    const primaryServices = [
        {
            id: 1,
            title: "Executive Mentoring",
            description:
                "Refine strategic thinking, executive presence, decision-making, and leadership communication. Designed for CEOs, founders, and emerging leaders looking to scale with clarity and confidence.",
        },
        {
            id: 2,
            title: "Effective Communication",
            description:
                "Develop clear, confident, and persuasive communication skills across platforms. From boardrooms to public stages, enhance your ability to influence and connect.",
        },
        {
            id: 3,
            title: "Business Expansion into Asia",
            description:
                "Advisory support for entering high-growth Asian markets. Includes strategic research, regional alignment, and on-ground execution planning to ensure a smooth and successful expansion.",
        },
    ];


    const additionalServices = [
        {
            id: 4,
            title: "Sales Enablement",
            description:
                "Equip your sales team with effective messaging, engagement strategies, and closing techniques. Convert conversations into consistent conversions with a structured, proven framework.",
        },
        {
            id: 5,
            title: "How to Own Any Stage Like a Pro",
            description:
                "Build a commanding presence on any stage. Learn vocal mastery, body language, and energy control to leave a memorable impression every time you speak.",
        },
        {
            id: 6,
            title: "Professional Development",
            description:
                "Accelerate your career with mindset mastery, leadership skills, and executive confidence. Stay future-ready with tools that position you ahead in competitive markets.",
        },
        {
            id: 7,
            title: "The Ultimate Power Dressing Workshop",
            description:
                "Transform your appearance into a strategic asset. Discover the principles of dressing for  confidence, credibility, and lasting impressions.",
        },
        {
            id: 8,
            title: "Executive Presence for Advancing Career",
            description:
                "Elevate your leadership image. Learn the behaviors, body language, and mindset needed to  gain authority and accelerate career growth.",
        },
        {
            id: 9,
            title: "Mastering Powerful Presentations – Sci/Tech",
            description:
                "Translate complex scientific or technical concepts into impactful presentations. Learn to  simplify, visualize, and deliver data with clarity and persuasion.",
        },

        {
            id: 10,
            title: "Mastering Software Demos (2-Day Workshop)",
            description:
                "Move beyond technical walkthroughs to persuasive solution-selling. Learn how to present  software demos that engage, qualify, and convert decision-makers.",
        },
        {
            id: 11,
            title: "Acing a TEDx Presentation",
            description:
                "Design and deliver a TEDx-level talk that moves people. Learn how to simplify your  message, connect with the audience, and inspire ideas worth spreading.",
        },
        {
            id: 12,
            title: "Creating Your Unforgettable New Brand",
            description:
                "Build a personal brand that positions you as an expert. From narrative and positioning to  visuals and voice, craft a brand identity that gets noticed and rewarded.",
        },
        {
            id: 13,
            title: "Mastering Business Presentations",
            description:
                "Develop professional, compelling business presentations that deliver results. Structure your  message, engage your audience, and close your pitch effectively.",
        },
        {
            id: 14,
            title: "Storytelling Workshop",
            description:
                "Master the art of storytelling to influence, inspire, and connect. Learn frameworks that help  you drive emotion and action in any personal or professional setting.",
        },
        {
            id: 15,
            title: "Sales Enablement Workshop (3-Day Program)",
            description:
                "A deep-dive program to transform your software sales team. Focus on trust-building,  objection handling, and structured closing to scale results efficiently.",
        },
        {
            id: 16,
            title: "Becoming a Super Salesperson",
            description:
                "Take your sales skills to the next level. Master the psychology of selling,  relationship-building, and market positioning to collect revenue like a pro.",
        },
        {
            id: 17,
            title: "Business Consulting Services",
            description:
                "A tailored advisory program focused on market positioning, growth strategy, brand clarity,  and operational efficiency to unlock your next business milestone.",
        },
    ];



    return (
        <div className="bg-black relative">
            {/* Divider */}
            <div className="absolute -mt-[6px]">
                <img
                    src="/Core/BDivider.png"
                    className="scale-75"
                    alt="Divider"
                />
            </div>

            {/* Main Section */}
            <div className="flex px-5 sm:px-20 w-full bg-cover bg-center relative">
                <div className="absolute inset-0"></div>

                <div className="relative z-10 w-full">
                    <div className="text-center mb-10">
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r 
                            from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                            via-[#DDB56D] to-[#CE9D4B] 
                            text-2xl sm:text-[50px] font-bold uppercase mt-15"
                        >
                            <span className="text-[#D0A151]">Services</span>
                        </h1>

                        <img
                            src="/ConsistentMatrix/border.png"
                            className="w-[250px] h-[8px] mx-auto mb-4"
                            alt="Border"
                        />
                        <span className="text-[#E0E0E0]">
                            We offer various impactful programs
                        </span>
                    </div>


                    <div className="mt-10 flex justify-center mb-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {primaryServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="border w-[320px] h-[260px] border-white text-white uppercase p-5 flex flex-col justify-between "
                                >
                                    <div className="font-semibold text-sm mb-3">
                                        {service.title}
                                    </div>
                                    <div className="text-justify text-[12px] mb-4">
                                        {service.description}
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <button className="border  w-[230px] py-2 text-sm transition  cursor-pointer">
                                            KNOW MORE
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex justify-center mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {additionalServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="border w-[320px] h-[200px] border-white text-white uppercase p-5 flex flex-col justify-between rounded-lg"
                                >
                                    <div className="font-semibold text-sm mb-3">
                                        {service.title}
                                    </div>
                                    <div className="text-justify text-[12px]">
                                        {service.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
