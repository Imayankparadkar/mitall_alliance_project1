import React from 'react'

const Landing = () => {

    const logos = [
        { img: 'Landing/Logo/l1.png' },
        { img: 'Landing/Logo/l2.png' },
        { img: 'Landing/Logo/l3.png' },
        { img: 'Landing/Logo/l4.png' },
        { img: 'Landing/Logo/l5.png' },
        { img: 'Landing/Logo/l6.png' },
        { img: 'Landing/Logo/l7.png' },
        { img: 'Landing/Logo/l8.png' },
        { img: 'Landing/Logo/l9.png' },
        { img: 'Landing/Logo/l10.png' },
        { img: 'Landing/Logo/l11.png' },
        { img: 'Landing/Logo/l12.png' },
        { img: 'Landing/Logo/l13.png' },
        { img: 'Landing/Logo/l14.png' },
        { img: 'Landing/Logo/l15.png' },
    ];

    const logotwo = [
        { img: 'Landing/Logo2/l1.png' },
        { img: 'Landing/Logo2/l2.png' },
        { img: 'Landing/Logo2/l3.png' },
        { img: 'Landing/Logo2/l4.png' },
        { img: 'Landing/Logo2/l5.png' },
        { img: 'Landing/Logo2/l6.png' },
        { img: 'Landing/Logo2/l7.png' },
    ];


    return (
        <div className='w-full h-full space-y-5 '>
            <div className='flex flex-col h-full w-full justify-center items-center'>
                <h1 className='uppercase flex sm:flex-row flex-col  mt-13 sm:space-x-5 justify-center items-center text-center text-[40px] sm:text-[50px] text-[#CE9D4B]'>
                    <span className='font-bold'>Mittal</span><span className='text-white/70 sm:text-[50px] text-[20px] sm:text-start text-center '>CREATE</span>
                </h1>

                <span
                    className="uppercase text-[20px] text-center sm:text-start sm:text-[40px] font-bold 
             bg-gradient-to-r from-[#D0A151] via-[#E6C584] via-[#CE9D4B] to-[#E2BE7A]
             bg-clip-text text-transparent mt-5 sm:mt-0"
                >
                    VISIONARY CEO's <span className='text-white'>&</span> INDUSTRY-LEADING ENTERPRISES
                </span>

            </div>

            <div className='flex gap-3 flex-col sm:mt-10 text-[17px] text-center sm:text-start sm:text-[30px] w-full justify-center h-full items-center text-white'>
                <span>
                    I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES</span>
                <span className='sm:text-[30px] text-[15px]'>
                    Blending Soul & Strategy to Shape Legacy, Influence, and Impact
                </span>
            </div>

            <>
                <div className='w-full h-full flex sm:text-xl justify-center mt-8 sm:mt-12 uppercase'>
                    <span className='text-[#CE9D4B]'>My Work has reached audiences at</span>
                </div>

                <div className="hidden sm:flex flex-col items-center">

                    <div className="flex flex-wrap sm:space-x-9 justify-center sm:gap-4">
                        {logos.slice(0, 11).map((logo, index) => (
                            <img
                                key={index}
                                src={logo.img}
                                alt={`logo-${index + 1}`}
                                className="w-20 h-auto object-contain"
                            />
                        ))}
                    </div>


                    <div className="flex items-center justify-center sm:gap-4">
                        {logos.slice(11).map((logo, index) => (
                            <img
                                key={index}
                                src={logo.img}
                                alt={`logo-${index + 12}`}
                                className={`object-contain ${index === 0 ? "sm:w-27 w-10 sm:scale-200 sm:mr-15 h-auto" : "w-20 h-auto"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </>

            <>
                <div className="sm:hidden flex flex-col items-center w-full overflow-hidden">
                    <div className="w-full overflow-hidden">
                        <div className="marquee flex animate-marquee">
                            {[...logos.slice(0, 11), ...logos.slice(0, 11)].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.img}
                                    alt={`logo-${index + 1}`}
                                    className="w-12 h-auto object-contain mx-4"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full overflow-hidden mt-2">
                        <div className="marquee flex animate-marquee">
                            {[...logos.slice(11), ...logos.slice(11)].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.img}
                                    alt={`logo-${index + 12}`}
                                    className={`object-contain mx-4 ${index === 0 ? "w-10" : "w-20"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </>


            <>
                <div className='w-full h-full flex sm:text-xl justify-center sm:mt-12 uppercase'>
                    <span className='text-[#CE9D4B]'>TRUSTED BY</span>
                </div>

                <div className="flex flex-col items-center">

                    <div className="flex text-[8px] text-center sm:text-start sm:text-sm flex-wrap sm:space-x-9 justify-center gap-4 text-white">
                        <span>Industry Icons | Conscious Companies | Soulful Celebrities | Internet Influencers | Passionate Professionals | Solopreneurs | Industrialists | Legacy-Driven Leaders</span>
                    </div>


                    <div className="sm:flex hidden sm:flex-row flex-col items-center justify-center w-full sm:mt-2 sm:space-x-12">
                        <img src={logotwo[0].img} alt="logo-1" className="object-contain w-10" />
                        <img src={logotwo[1].img} alt="logo-2" className="object-contain w-30 scale-150" />
                        <img src={logotwo[2].img} alt="logo-3" className="object-contain w-30 scale-100" />
                        <img src={logotwo[3].img} alt="logo-4" className="object-contain w-30 scale-150" />
                        <img src={logotwo[4].img} alt="logo-5" className="object-contain w-10" />
                        <img src={logotwo[5].img} alt="logo-6" className="object-contain w-10" />
                        <img src={logotwo[6].img} alt="logo-7" className="object-contain w-20 scale-120" />
                    </div>


                    <div className="sm:hidden flex flex-col items-center w-full mt-2 overflow-hidden">
                        <div className="marquee flex animate-marquee">
                            {[...logotwo, ...logotwo].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.img}
                                    alt={`logo-${index + 1}`}
                                    className={`object-contain mx-3 ${index % 7 === 0
                                            ? "w-10"
                                            : index % 7 === 1
                                                ? "w-20"
                                                : index % 7 === 2
                                                    ? "w-20"
                                                    : index % 7 === 3
                                                        ? "w-20"
                                                        : index % 7 === 4
                                                            ? "w-10"
                                                            : index % 7 === 5
                                                                ? "w-10"
                                                                : "w-16"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>



                </div>
            </>




        </div>
    )
}

export default Landing