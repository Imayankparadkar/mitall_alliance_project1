import React from 'react'

const Section3 = () => {
    return (
        <div>
            <div className="min-h-[600px] px-4 sm:px-10 mt-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">

                {/* ✅ Text Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-[#CE9D4B] uppercase font-bold text-xl sm:text-2xl lg:text-[40px] mb-4 lg:mb-5">
                        The Rise of an Entrepreneur
                    </h1>

                    <div className="text-white max-w-full sm:max-w-lg lg:w-xl space-y-4 sm:space-y-6 lg:space-y-10 text-sm sm:text-base leading-relaxed px-2 lg:px-0">
                        <p>
                            In <strong>2022</strong>, I joined <strong>NMIMS Indore</strong> for a <strong>B.Tech + MBA.</strong>
                            But my soul belonged to <strong>entrepreneurship.</strong>
                        </p>

                        <p>
                            I founded <strong>Mittal Alliance Industries</strong> (2020) to help
                            <strong> MSMEs with AI and digital transformation.</strong>
                            <br />
                            Then came <strong>BAD Youth Media, BadTalks,</strong> and a <strong>C++ WhatsApp community</strong>
                            that grew to <strong>1,000+ members.</strong>
                        </p>

                        <p>
                            I built <strong>MentorMenti</strong>, my first <strong>tech startup.</strong>
                            It eventually shut down — but gave me <strong>leadership, clarity</strong>,
                            and the gift of <strong>real-world learning.</strong>
                        </p>
                    </div>
                </div>

                {/* ✅ Image Section */}
                <div className="mt-6 lg:mt-0 flex justify-center">
                    <img
                        src="/Core/Team.jpg"
                        alt="Team"
                        className="h-[250px] sm:h-[300px] lg:h-[400px] rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section3
