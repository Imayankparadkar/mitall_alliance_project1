import React from 'react';
import Header from "../Components/Core/Header/Header_New"; // As requested

// Data for the testimonials to keep the JSX clean
const testimonialData = [
    {
        id: 1,
        image: "/Testimonials/testimonial3.png",
        name: "Dr. Sai Sanskrithi",
        role: "Professor, TEDx Speaker, Author",
        review: "Sarthak is a very intelligent and out-of-the-box thinker. He is highly professional and meticulous in his work, always bringing fresh ideas and unique perspectives to any task. His dynamic nature and innovative mindset make him stand out, constantly finding new ways of looking at challenges and opportunities.",
        review1:""},
    {
        id: 2,
        image: "/Testimonials/testimonial4.png",
        name: "Arab Khan",
        role: "CEO, UAV Systems",
        review: "I've had the pleasure of working with Sarthak Mittal, and I must say he brings an exceptional and dynamic personality to the table. His out-of-the-box thinking and innovative strategies in marketing and branding truly set him apart. Sarthak has an innate ability to connect with people easily, making collaboration seamless and enjoyable.        ",
        review1:"What stands out the most is his clarity in setting deliverables and consistently maintaining timelines. He leads teams with confidence, ensuring alignment, motivation, and results. If you're looking for someone who brings creativity, strategic insight, and reliable execution—Sarthak is the person you want on your side."
    },
    {
        id: 3,
        image: "/Testimonials/testimonial5.png",
        name: "Jahnavi Verma",
        role: "MBA-IIM ROHTAK 2023-26, Operations Manager",
        review: "I had the pleasure of working with Mr. Sarthak Mittal during my internship at Mittal Alliance, and I can confidently say that he is not only a helpful mentor but also someone with an insatiable hunger to learn, regardless of whether he is speaking with a junior or a senior. What stood out most about Sarthak was his remarkable dedication and work ethic. Every interaction with him was more than just a routine exchange of tasks; it was a session filled with guidance, insight, and meaningful reflection.",
        review1:"His ability to combine sharp professional acumen with a genuine interest in personal growth—both his own and that of others—left a lasting impact on me. Anyone who gets the opportunity to work with Sarthak will gain more than just a capable teammate; they will gain a thoughtful leader and an inspiring learner."
    },
    {
        id: 4,
        image: "/Testimonials/testimonial6.png",
        name: "Author Pawan Verma",
        role: "Author, Speaker & Management Consultant-Insurance",
        review: "What sets Sarthak apart is not just his fluency in AI, branding, and digital transformation, but his uncompromising belief in the power of youth. With a mission to turn students into CEOs and careers into legacies, he has mentored thousands, created tangible job opportunities, and built one of the most energetic and future-focused youth communities in India. Whether he's delivering a TEDx talk, conducting one of his 150+ workshops, or hosting his podcast, Sarthak brings clarity, credibility, and contagious energy to every interaction.",
        review1:"His personal brand is rooted in authenticity and bold ambition—qualities that reflect in his Mittal Millionaires community and his global leadership roadmap. From Fortune 500 consulting to grassroots mentorship, he operates at both altitude and depth. If you're looking to collaborate with someone who doesn't just dream big but executes bigger, Sarthak is the name to know. He isn’t just building companies—he’s building a legacy, and if you connect with him, he’ll challenge you to build yours too."
    }
];

// Reusable component for each testimonial card, now with alternating layout
// Reusable component for each testimonial card, now with alternating layout
const TestimonialCard = ({ image, name, role, review, review1, isReversed }) => (
    <div className={`bg-white border-2 border-[#D0A151] shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full ${isReversed ? 'md:flex-row-reverse' : ''} relative`}>
        
        {/* Testimonial Image */}
        <div className="flex-shrink-0">
            <img 
                src={image} 
                alt={`${name}'s testimonial`} 
                className="w-32 h-32 md:w-auto md:h-auto object-cover shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/192x192/FFFFFF/D0A151?text=Image'; }}
            />
        </div>

        {/* Testimonial Content */}
        <div className={`relative text-center ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
            
            {/* Quote Start */}
            <img
                src="/Core/q1.png"
                className="w-6 sm:w-8 absolute -top-2.5 left-0 transform -translate-x-1/2 -translate-y-1/2"
                alt="Quote Start"
            />

            <p className="text-base lg:text-lg italic mb-4 text-gray-700">"{review}"</p>
            {review1 && <p className="text-base lg:text-lg italic mb-4 text-gray-700">"{review1}"</p>}
            
            <h4 className="font-bold text-xl text-gray-900">{name}</h4>
            <p className="font-medium text-sm text-gray-600">{role}</p>

            {/* Quote End */}
            <img
                src="/Core/q1.png"
                className="w-6 sm:w-8 absolute -bottom-3.5 right-0 transform translate-x-1/2 translate-y-1/2 scale-x-[-1]"
                alt="Quote End"
            />
        </div>
    </div>
);



const Testimonials_InnerPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Decorative Images Section - removed shape styling */}
            <div className="">
                    <img 
                        src="/Testimonials/line.png" 
                        alt="Decorative line" 
                        className="" 
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/160x8/FFFFFF/000000?text='; }}
                    />
                    <div className="">
                        <img 
                            src="/Testimonials/testimonial1.png" 
                            alt="Testimonial collage 1" 
                            className=""
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/192x192/CCCCCC/FFFFFF?text=Img1'; }}
                        />
                        <img 
                            src="/Testimonials/testimonial2.png" 
                            alt="Testimonial collage 2" 
                            className=""
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/192x192/CCCCCC/FFFFFF?text=Img2'; }}
                        />
                    </div>
                </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
                

                {/* Page Heading Section */}
                <div className="text-center mb-10 md:mb-15">
                    <h1 
                        className="text-5xl md:text-5xl font-extrabold uppercase tracking-wider"
                        style={{ color: '#D0A151' }}
                    >
                        Voices Shaping Mittal Alliance Industries' Legacy
                    </h1>
                    <p 
                        className="text-lg md:text-4xl mt-2"
                        style={{ color: '#808080' }}
                    >
                        Real Stories, Real Impact at Mittal Alliance
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard 
                            key={testimonial.id}
                            image={testimonial.image}
                            name={testimonial.name}
                            role={testimonial.role}
                            review={testimonial.review}
                            review1={testimonial.review1}
                            isReversed={index % 2 !== 0} // This creates the alternating effect
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Testimonials_InnerPage;
