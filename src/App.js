
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

// import slider from 'react-slick/lib/slider';

function App() {
  return (<div className='App'>

  <Navbar/>
  <Banner/>
  <WhatWeDo/>
  <About/>
  <Our/>
  <WhyChoose/>
  <OurTeam/>
  <Testimonials/>
  <OurBlog/>
  <Footer/>

  </div>
  );
}

export default App;
