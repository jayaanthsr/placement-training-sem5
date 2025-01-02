import React from 'react'
import Home from './components/Home'
import AboutUs from './components/UseRef';
import ContactUs from './components/UseContext';
import UseEffect from './components/UseEffect';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
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
          <Route path='/location' element={<UseEffect/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App
     