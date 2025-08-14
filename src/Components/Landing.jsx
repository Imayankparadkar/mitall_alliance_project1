import React from 'react';

const Landing = () => {
    const logos = [
        { img: '/Landing/Logo/l1.png' }, { img: '/Landing/Logo/l2.png' },
        { img: '/Landing/Logo/l3.png' }, { img: '/Landing/Logo/l4.png' },
        { img: '/Landing/Logo/l5.png' }, { img: '/Landing/Logo/l6.png' },
        { img: '/Landing/Logo/l7.png' }, { img: '/Landing/Logo/l8.png' },
        { img: '/Landing/Logo/l9.png' }, { img: '/Landing/Logo/l10.png' },
        { img: '/Landing/Logo/l11.png' }, { img: '/Landing/Logo/l12.png' },
        { img: '/Landing/Logo/l13.png' }, { img: '/Landing/Logo/l14.png' },
        { img: '/Landing/Logo/l15.png' },
    ];

    const logotwo = [
        { img: '/Landing/Logo2/l1.png' }, { img: '/Landing/Logo2/l2.png' },
        { img: '/Landing/Logo2/l3.png' }, { img: '/Landing/Logo2/l4.png' },
        { img: '/Landing/Logo2/l5.png' }, { img: '/Landing/Logo2/l6.png' },
        { img: '/Landing/Logo2/l7.png' },
    ];

    const getTrustedBySize = (index) => {
        const i = index % 7;
        if (i === 1 || i === 2 || i === 3) return "w-20 sm:w-32";
        if (i === 6) return "w-16 sm:w-20";
        return "w-10 sm:w-12";
    }

    return (
        <div className='w-full h-full space-y-10 py-10'>
            {/* --- HEADER AND TEXT SECTIONS (Unchanged) --- */}
            <div className='flex flex-col h-full w-full justify-center items-center'>
                <h1 className='uppercase flex sm:flex-row flex-col sm:space-x-5 justify-center items-center text-center text-[55px] sm:text-[50px] text-[#CE9D4B]'>
                    <span className='font-bold'>Mittal</span>
                    <span className='text-white sm:text-[50px] text-[30px] sm:text-start text-center '>CREATE</span>
                </h1>
                <span className="uppercase text-[20px] text-center sm:text-start sm:text-[40px] font-bold bg-gradient-to-r from-[#D0A151] via-[#E6C584] via-[#CE9D4B] to-[#E2BE7A] bg-clip-text text-transparent mt-5 sm:mt-0">
                    VISIONARY CEO's <span className='text-white'>&</span> INDUSTRY-LEADING ENTERPRISES
                </span>
            </div>
            <div className='flex gap-3 flex-col text-[17px] text-center sm:text-[30px] w-full justify-center items-center text-white'>
                <span>I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES</span>
                <span className='sm:text-[30px] text-[15px]'>Blending Soul & Strategy to Shape Legacy, Influence, and Impact</span>
            </div>

            {/* --- "MY WORK" LOGO SECTION --- */}
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-[16px] sm:text-xl'>My Work has reached audiences at</span>
                </div>
                {/* Row 1 - Continuous */}
                <div className="overflow-x-hidden">
                    <div className="py-2 animate-marquee whitespace-nowrap">
                        {/* Render logos twice for the loop */}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`orig-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        
                    </div>
                </div>
                {/* Row 2 - Continuous */}
                <div className="overflow-x-hidden">
                     <div className="py-2 animate-marquee whitespace-nowrap">
                        {/* Render logos twice for the loop */}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`orig-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- "TRUSTED BY" SECTION --- */}
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-lg sm:text-xl'>TRUSTED BY</span>
                </div>
                <div className="text-center text-sm sm:text-0.5xl text-white px-4">
                    <span>Industry Icons | Conscious Companies | Soulful Celebrities | Internet Influencers | Passionate Professionals | Solopreneurs | Industrialists | Legacy-Driven Leaders</span>
                </div>
            </div>
        </div>
    );
};

export default Landing;