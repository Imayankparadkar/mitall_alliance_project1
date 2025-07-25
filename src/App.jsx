import React from 'react'
import Header from './Components/Core/Header/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import SuccessMatrix from './Pages/SuccessMatrix'
import ResultConsistent from './Pages/ResultConsistent'
import ConnectMe from './Pages/ConnectMe'
import PainfulBegining from './Pages/PainfulBegining/PainfulBegining'
import Rebellion from './Pages/PainfulBegining/Rebellion'
import Leadership from './Pages/Leadership'
import FrameworkBad from './Pages/FrameworkBad'
import Services from './Pages/Services'
import Testimonials from './Pages/Testimonials'
import Podcast from './Pages/Podcast'
import Book from './Pages/Book'
import Blog from './Pages/Blog'
import GreatTogether from './Pages/GreatTogether'
import Awards from './Pages/Awards'
import TedxSection from './Pages/TedxSection'
import Footer from './Components/Core/Footer/Footer'


const App = () => {
  return (
    <div>
      <div>

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
        <Footer />



      </div>
    </div >
  )
}

export default App