import React from 'react';
import './App.css';
import Hero  from './Hero/hero';
import Solutions from './Solutions/solutions';
import Features from './Features/features';
import About from './About/about';
import ContactUs from './Contact Us/contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Solutions/>
      <Features/>
      <About/>
      <ContactUs/>
    </div>
  );
}

export default App;
