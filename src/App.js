import React from 'react';

import { Header, Departments, AboutUs, WhyUs, Intro, Statistics, Partners, Footer } from './container';
import { Navbar } from './components';



import './App.css';

const App = () => {
  
  return (
  <div> 
    <Navbar />
    <Header />
    <Departments />
    <AboutUs />
    <WhyUs />
    <Intro />
    <Statistics />
    <Partners />
      <Footer />
  </div>
  );
}


export default App;
