import React from "react";

const Struggle = () => {
  const acquiredBusinesses = [
    { id: 1, image: "/Struggle/struggle1.png" },
    { id: 2, image: "/Struggle/struggle2.png" },
    { id: 3, image: "/Struggle/struggle3.png" },
    { id: 4, image: "/Struggle/struggle4.png" },
    { id: 5, image: "/Struggle/struggle5.png" },
    { id: 6, image: "/Struggle/struggle6.png" },
    { id: 7, image: "/Struggle/struggle7.png" },
    { id: 8, image: "/Struggle/struggle8.png" },
    { id: 9, image: "/Struggle/struggle9.png" },
    { id: 10, image: "/Struggle/struggle10.png" },
    { id: 11, image: "/Struggle/struggle11.png" },
    { id: 12, image: "/Struggle/struggle12.png" },
  ];

  return (
    <>
      <div className="bg-black relative">
        {/* Divider */}
        <div className="absolute -mt-[6px]">
          <img src="/Core/BDivider.png" className="scale-75" alt="Divider" />
        </div>

        {/* --- FIX: Added very large padding-bottom (pb-96) to extend the background --- */}
        <div className="flex flex-col items-center px-6 sm:px-20 w-full justify-center bg-cover bg-center relative pb-40">
          <div className="relative z-10 text-center">
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r 
                         from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                         via-[#DDB56D] to-[#CE9D4B] 
                         text-xl sm:text-[50px] font-bold mt-35 uppercase" // Changed mt-30 to standard mt-20
            >
              My Struggles Made me Humble & grounded
            </h1>
            <div className="mt-2">
              <img
                src="/ConsistentMatrix/border.png"
                className="sm:w-[820px] w-full mx-auto"
                alt="Border"
              />
            </div>

            {/* --- ADDED SUBHEADING --- */}
            <p className="text-white text-lg sm:text-xl mt-10">
              Some moments which made my life memorable
            </p>
            {/* --- END SUBHEADING --- */}


            {/* Changed mt-40 to mt-20 and gap-35 to gap-y-28 for vertical space */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-28 gap-x-0 mt-30 place-items-center">
              {acquiredBusinesses.map((business) => (
                <div
                  key={business.id}
                  // --- KEPT the scale-220 class as requested ---
                  className="flex items-center justify-center rounded-xl p-4 scale-220 transition-transform duration-300"
                >
                  <img
                    src={business.image}
                    alt={`Business ${business.id}`}
                    className="object-contain max-w-full max-h-28"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Struggle;