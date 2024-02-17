import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>

    <div className='bg-site bg-no-repeat bg-cover 
    overflow-hidden'>
      <Header />
      <Banner />
      <Nav/>
      <About/>
      <Services />
      <Work />
      <Contact />
      <ToastContainer />
      <div className='h-[450px]'></div>
    </div> 
    </BrowserRouter>
  );
};

export default App;