import React, { useState } from 'react';
import Header from '../Components/Core/Header/Header_New';
import { Plus, Minus } from 'lucide-react';

// Data for the FAQ section - now with unique IDs for each item
const faqData = [
    { id: 1, question: 'Who is Sarthak Mittal?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 2, question: 'What inspired Sarthak Mittal to start his entrepreneurial journey?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 3, question: 'What is Sarthak Mittal known for?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 4, question: 'How did Sarthak Mittal overcome academic challenges?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 5, question: 'When was Sarthak Mittal born?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 6, question: 'What impact has the Young Leaders Community had on students?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 7, question: 'What is Mittal Alliance?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 8, question: 'What is the significance of December 1, 2003, in Sarthak Mittal’s life?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 9, question: 'Who founded the Mittal Group?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 10, question: 'What is MentorMenti.com?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 11, question: 'What is BadBusiness.in?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 12, question: 'How did Sarthak Mittal’s early failures shape his career?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 13, question: 'What role does Sarthak Mittal play at BadBusiness.in?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 14, question: 'What are the key objectives of BadBusiness.in?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 15, question: 'What is AnjuCreations Indie?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 16, question: 'How does the Young Leaders Community benefit students?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 17, question: 'What is the Young Leaders Community?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 18, question: 'What is Sarthak Mittal’s vision for the future?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 19, question: 'How did Sarthak Mittal start his entrepreneurial journey?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 20, question: 'How does Mittal Alliance promote the growth of MSMEs?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 21, question: 'What educational background does Sarthak Mittal have?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 22, question: 'What challenges did Sarthak Mittal face in his early career?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 23, question: 'What industries does Mittal Alliance support?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 24, question: 'What is the significance of the Mittal Group in India’s industrial history?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 25, question: 'How has Sarthak Mittal contributed to the education sector?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 26, question: 'How has Sarthak Mittal balanced his education and entrepreneurial ventures?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 27, question: 'What is Sarthak Mittal’s role in the biomass briquette industry?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
    { id: 28, question: 'What is the role of technology in Mittal Alliance’s strategy?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' },
];


const FAQs = () => {
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const handleToggle = (e, id) => {
        e.stopPropagation(); 
        setOpenQuestionId(openQuestionId === id ? null : id);
    };
    
    return (
        <div className="bg-white">
            <Header />
            {/* Divider image */}
            <img src="/Blog/line.png" alt="divider" className="w-full block" />
            
            {/* --- Hero Section (New Responsive Design) --- */}
            <div className="relative">
                <img src="/Faq/faq1.png" alt="Frequently Asked Questions" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
                    {/* The question mark image is now part of the hero for better responsive control */}
                </div>
            </div>
            
            {/* The arrow divider scales with the width of the screen. */}
            <img src="/Faq/faq2.png" alt="arrow divider" className="w-full block -mt-px" />

            {/* --- Main Content Section --- */}
            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D0A151]">CLARITY, INSIGHT, AND INSPIRATION FOR ALL</h2>
                    <div className="h-1 w-20 bg-[#D0A151] mx-auto mt-2"></div>
                </div>

                {/* --- FAQ Grid --- */}
                {/* This grid is responsive. It's a single column on mobile and becomes a two-column grid on medium screens (md:grid-cols-2). */}
                <div className="grid md:grid-cols-2 gap-6">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="bg-[#FFF4E1] rounded-lg transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={(e) => handleToggle(e, faq.id)}>
                            <div className="flex justify-between items-center p-4">
                                <p className="text-[#C27C06] font-semibold pr-4">{faq.question}</p>
                                <div className="bg-[rgba(208,161,81,0.15)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                    {openQuestionId === faq.id ? <Minus size={20} className="text-[#D0A151]" /> : <Plus size={20} className="text-[#D0A151]" />}
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openQuestionId === faq.id ? 'max-h-40 p-4' : 'max-h-0'}`}>
                                <p className="text-[#C27C06]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FAQs;
