import { useState, useEffect } from 'react';
import About from '../pages/About/About';
import Contact from '../pages/contacts/Contact';
import Home from '../pages/Intro/Home';
import Services from '../pages/services/Services';
import Footer from '../pages/footer/Footer';
import Skills from '../pages/Skills/Skills';
import Works from '../pages/Works/Works';

import './SplitPane.css'

const SplitPane = (props) =>{
    const divStyle = {
        // display:'block',
        marginLeft:200

      };
    
    
    return (
        <div>
        <div className='top-container'>
            <div className='top-nav'>
            <div>Clint the Icon</div>
            <div>
            <span>About</span>
            <span>Blog</span>
            </div>
            </div>
        </div>
            <div className='SplitPane' 
            style={{
                transition:"0.1s",
                // width:props.isOpen ? "1150px" : "1380px"
                // left:props.isOpen ? "200px" : "60px", 
            }}>

            <div className='splitpane-left'>
                {props.left}
            </div>
            
            <div className='splitpane-right'>                <Home />
                <Works />
                <About />
                <Skills />
                <Services />                
                <Contact />
                <Footer />
            </div>
        </div>
        </div>
    )
}

export default SplitPane;