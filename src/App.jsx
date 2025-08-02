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
import BlogDetail from './Pages/BlogDetail';
import PodcastsDetail from './Pages/PodcastsDetail';
import EventsPage from './Pages/Events';
import PodcastsPage from './Pages/Podcasts';
import PricingPage from './Pages/Pricing';
import BooksPage from './Pages/Books';
import MentorsPage from './Pages/Mentors';
import HistoryPage from './Pages/History';
import CareersPage from './Pages/Careers';
import FAQsPage from './Pages/FAQs';

// This component aggregates all sections for the single-page style homepage.
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
        {/* The <Routes> component manages all the different URL paths. */}
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Blog pages */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          
          {/* Podcast pages */}
          <Route path="/podcasts" element={<PodcastsPage />} />
          {/* THIS IS THE NEWLY ADDED ROUTE.
            It listens for a URL like "/podcasts/1" or "/podcasts/2"
            and renders the PodcastsDetail component, passing the "id" as a parameter.
          */}
          <Route path="/podcasts/:id" element={<PodcastsDetail />} />

          {/* Other application pages */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ConnectMe />} />
        </Routes>
        
        {/* The Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
