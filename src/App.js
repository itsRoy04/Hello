
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Our from './components/Our';
import WhyChoose from './components/WhyChoose';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import OurBlog from './components/OurBlog';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import MobileNav from './components/MobileNav';

// import slider from 'react-slick/lib/slider';

function App() {
  return (<div className='App'>

{/* <MobileNav/> */}
    <Navbar  />
    {/* <Routes>
      <Route path="/contact" element={<Footer />} />
      <Route path="/about" element={<About />} />
      <Route path="/our" element={<Our />} />
      <Route path="/blog" element={<OurBlog />} />
    </Routes> */}
    <Banner />
    <WhatWeDo />
    <About />
    <Our />
    <WhyChoose />
    <OurTeam />
    <Testimonials />
    <OurBlog />
    <Footer />
  

  </div>
  );
}

export default App;
