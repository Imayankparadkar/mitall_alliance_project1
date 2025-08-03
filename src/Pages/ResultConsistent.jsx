import React from "react";

const ResultConsistent = () => {
    // ✅ Array of Inner Images
    const acquiredBusinesses = [
        { id: 1, image: "/ConsistentMatrix/l1.png" },
        { id: 2, image: "/ConsistentMatrix/l2.png" },
        { id: 3, image: "/ConsistentMatrix/l3.png" },
        { id: 4, image: "/ConsistentMatrix/l4.png" },
    ];

    return (
        <div
            className="flex px-20 w-full justify-center sm:h-screen h-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/ConsistentMatrix/bg.png')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10">

                <h1
                    className="text-transparent bg-clip-text bg-gradient-to-r 
                     from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                     via-[#DDB56D] to-[#CE9D4B] 
                     text-2xl sm:text-[50px] font-bold w-xs sm:w-full mt-15 uppercase"
                >
                    Result of My Consistency & Pain
                </h1>

                <div>
                    <img
                        src="/ConsistentMatrix/border.png"
                        className="w-sm sm:w-[960px]"
                        alt="Border"
                    />
                </div>


                <div className="mt-3">
                    <span className="text-white sm:text-center w-full flex sm:text-[20px]">
                        Businesses & Industries Acquired by Mittal Alliance
                    </span>
                </div>


                <div className="relative w-full justify-center items-center gap-4 sm:flex-row flex-col flex mt-10 sm:mt-20">
                    {acquiredBusinesses.map((business) => (
                        <div
                            key={business.id}
                            className="relative w-[200px] h-[200px]"
                        >

                            <img
                                src="/ConsistentMatrix/Polygon.png"
                                className="w-full h-full"
                                alt="Polygon"
                            />


                            <div className="absolute inset-0 flex justify-center items-center">
                                <img
                                    src={business.image}
                                    className="h-[100px] rounded-2xl"
                                    alt={`Business ${business.id}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sm:mt-20 mt-5 mb-10">
                    <span className="text-white font-semibold sm:text-center w-full flex justify-center text-[12px] sm:text-[25px]">
                        A Multinational “MITTAL” Brand Expanding by 2030
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ResultConsistent;
