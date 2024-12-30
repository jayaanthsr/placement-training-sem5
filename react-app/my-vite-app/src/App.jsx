import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Location from './components/Location';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  var name="ashwin"
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home Name={name} Friend="jana"/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/location' element={<Location/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App
     