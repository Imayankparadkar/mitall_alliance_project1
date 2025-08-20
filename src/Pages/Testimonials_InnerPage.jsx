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
    },
    {
        id: 5,
        image: "/Testimonials/testimonial7.png",
        name: "Andriana Nunez",
        role: "Delivering Tangible Results",
        review: "In just a brief interaction, Sarthak Mittal completely shifted how I view branding. He reminded me that a powerful brand and authentic voice start with purpose, not just a portfolio. Through real examples, he showed me what it truly means to showcase your essence — not just what you do, but who you are. The clarity he brought to this concept was incredible, and his approach made the idea feel both inspiring and attainable.",
        review1:"Sarthak didn’t stop at theory — he gave me actionable, immediately applicable steps to elevate my online presence and align it with my deeper mission. His ability to distill complex branding ideas into clear, practical insights is rare, and his generosity in sharing his expertise is even rarer. If you’re looking for someone who can help you uncover and express your true brand essence, Sarthak is the person you want in your corner."
    },
    {
        id: 6,
        image: "/Testimonials/testimonial8.png",
        name: "Divyansh Agarwal",
        role: "Solution Principal @HighRadius | Student at Chandigarh University | Machine Learning & Python Enthusiast | Former Secretary @IEEE CUSB & Eloquence Consortium | Aspiring Soft Skills Coach",
        review: "I had the absolute privilege of working under Mr. Sarthak Mittal during my internship at BADVERSE.IN, where he was not just a mentor but also a great friend and guide. Meeting him in person at BAD Talks: The CEO Summit 2025 was truly inspiring, as I witnessed firsthand his passion, dedication, and visionary leadership in action. Throughout my internship, he consistently provided guidance, support, and encouragement, helping me navigate challenges with confidence and turning even the toughest moments into valuable learning experiences.",
        review1:"Sarthak sir is an exceptional leader, a true innovator, and someone who deeply believes in his initiatives. His mentorship played a crucial role in my personal and professional growth, and I truly appreciate his commitment to empowering others. Whether it was strategic decision-making or problem-solving during event execution, he was always there to help. I highly recommend him as a mentor to anyone looking to learn, grow, and excel in their journey, and I look forward to collaborating with him again in the future."
    },
    {
        id: 7,
        image: "/Testimonials/testimonial9.png",
        name: "Bruno Salazar Molinero",
        role: "Creator @Brunospeaks.com | Human-centered Native Spanish Coach | 5+ Years Experience",
        review: "Sarthak and his team in Mittal are one of a kind. They came out of nowhere, and are helping me to get my business to the next level. Professional, trustworthy, and always helpful. I'm looking forward to see where our collaboration in the future will take us.",
        // review1:"His personal brand is rooted in authenticity and bold ambition—qualities that reflect in his Mittal Millionaires community and his global leadership roadmap. From Fortune 500 consulting to grassroots mentorship, he operates at both altitude and depth. If you're looking to collaborate with someone who doesn't just dream big but executes bigger, Sarthak is the name to know. He isn’t just building companies—he’s building a legacy, and if you connect with him, he’ll challenge you to build yours too."
    },
    {
        id: 8,
        image: "/Testimonials/testimonial10.png",
        name: "Kartik Sharma",
        role: "Simplifying Artificial Intelligence for everyone!",
        review: "I had the privilege of being featured on a podcast hosted by Sarthak, and it was an inspiring experience to witness his passion for making a difference in the lives of young people. Sarthak is a remarkable young entrepreneur who is not just focused on his own growth but is deeply committed to uplifting the youth community by bridging the gap between academia and industry. His ability to create opportunities, foster meaningful connections, and share knowledge through his platforms is truly commendable, and during our podcast discussion on AI, his knack for engaging conversations and drawing out valuable insights was evident.",
        review1:"His dedication to empowering young minds, coupled with his entrepreneurial spirit, positions him as a true leader and changemaker. I’m excited to see how his initiatives will continue to inspire and positively impact the next generation. I highly recommend Sarthak to anyone seeking to collaborate with someone who is driven, innovative, and genuinely invested in creating value for the community. Keep up the great work, Sarthak — the future is bright with leaders like you paving the way."
    },
    {
        id: 9,
        image: "/Testimonials/testimonial11.png",
        name: "Sahil Kumar Nagpal",
        role: "International Life Coach | Best Selling Author | Keynote Speaker | Executive Coach To Leaders | Unconventional Leadership Trainer | Founder @ Optimum Living Media",
        review: "Sarthak is a very dynamic, down to earth yet proactive individual. His sincerity and resilience outshines his experience. I did a podcast with him and his questions were very good. Good questions lead to a good show. He is a visionary with a doubt. I appreciate him for his work and wish him great luck for the future.",
        // review1:"His personal brand is rooted in authenticity and bold ambition—qualities that reflect in his Mittal Millionaires community and his global leadership roadmap. From Fortune 500 consulting to grassroots mentorship, he operates at both altitude and depth. If you're looking to collaborate with someone who doesn't just dream big but executes bigger, Sarthak is the name to know. He isn’t just building companies—he’s building a legacy, and if you connect with him, he’ll challenge you to build yours too."
    },
    {
        id: 10,
        image: "/Testimonials/testimonial12.png",
        name: "Saurab Gupta",
        role: "Democratising Coaching with AI-Native Enterprise Platfrom ⚡ Founder at Enablerz || Making Coaching Accessible to Every Employee with Impact at Scale || Ex-Tata Motors, BNP, Ghari || Learner || Explorer || Poet",
        review: "I had the pleasure of being featured on Sarthak's podcast as the Founder of Enablerz, where we discussed my journey in building a B2B SaaS product for the global market. Sarthak is an incredibly talented and energetic podcaster, blogger, and speaker who brings a unique blend of enthusiasm, insight, and professionalism to his work. From the very beginning, his ability to ask thoughtful, engaging questions was evident, creating an environment that felt both comfortable and stimulating, allowing for an authentic exchange of ideas. His deep understanding of the tech and startup ecosystem added tremendous value to our conversation, making it not only informative but also inspiring for listeners.",
        review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    

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

            <p className="text-base lg:text-lg  mb-4 text-gray-700">"{review}"</p>
            {review1 && <p className="text-base lg:text-lg  mb-4 text-gray-700">"{review1}"</p>}
            
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

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-15">
                

                {/* Page Heading Section */}
                <div className="text-center mb-10 md:mb-15">
                    <h1 
                        className="text-4xl md:text-4xl font-extrabold uppercase "
                        style={{ color: '#D0A151' }}
                    >
                        Voices Shaping Mittal Alliance Industries' Legacy
                    </h1>
                    <p 
                        className="text-sm md:text-4xl mt-2"
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
