import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Index from './App/Index';
import SplitPane from './Components/SplitPane/SplitPane';
import Home from './Components/pages/Intro/Home';
import About from './Components/pages/About/About';
import Skills from './Components/pages/Skills/Skills';
import Services from './Components/pages/services/Services';

import Works from './Components/pages/Works/Works';

import Browser from './Components/pages/Browser';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div>
      <Index/>
      {/* <Home/> */}
      {/* <About />
      <Skills />
      <Services/>
      <Works/>
      <Contact/> */}
    </div>
    // <BrowserRouter>
   
    //   <Routes>
    //         <Route path='/' element={<Index/>}/>
    //         <Route path='home' element={<Home/>}/>
    //         <Route path='about' element={<About />}/>
    //         <Route path='skills' element={<Skills />}></Route>
    //         <Route path='services' element={<Services/>}/>
    //         <Route path='works' element={<Works/>}/>
    //         <Route path='contact' element={<Contact/>}/>
            
    // </Routes>
    //     </BrowserRouter>
  );
}

export default App;
