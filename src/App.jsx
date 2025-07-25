// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Footer from './Components/Core/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import SuccessMatrix from './Pages/SuccessMatrix';
import ResultConsistent from './Pages/ResultConsistent';
import ConnectMe from './Pages/ConnectMe';
import PainfulBegining from './Pages/PainfulBegining/PainfulBegining';
import Rebellion from './Pages/PainfulBegining/Rebellion';
import Leadership from './Pages/Leadership';
import FrameworkBad from './Pages/FrameworkBad';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Podcast from './Pages/Podcast';
import Book from './Pages/Book';
import Blog from './Pages/Blog';
import GreatTogether from './Pages/GreatTogether';
import Awards from './Pages/Awards';
import TedxSection from './Pages/TedxSection';

// Import REAL pages
import BlogsPage from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail'; // <-- IMPORT THE NEW DETAIL COMPONENT
import EventsPage from './Pages/Events';
import PodcastsPage from './Pages/Podcasts';
import PricingPage from './Pages/Pricing';
import BooksPage from './Pages/Books';
import MentorsPage from './Pages/Mentors';
import HistoryPage from './Pages/History';
import CareersPage from './Pages/Careers';
import FAQsPage from './Pages/FAQs';

const HomePage = () => (
  <>
    <Home />
    <About />
    <SuccessMatrix />
    <ResultConsistent />
    <ConnectMe />
    <PainfulBegining />
    <Leadership />
    <FrameworkBad />
    <Services />
    <Awards />
    <TedxSection />
    <Testimonials />
    <Podcast />
    <Book />
    <Blog />
    <GreatTogether />
    <ConnectMe />
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* <-- ADD THIS NEW ROUTE */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ConnectMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
