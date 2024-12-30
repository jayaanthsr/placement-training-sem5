import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Location from './components/Location';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <ContactUs/>
      <Location/>
    </div>
  );
}

export default App