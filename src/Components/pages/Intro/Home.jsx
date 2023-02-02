import React, { useState, useEffect } from "react";

import MyImage from '../../../Images/myImage.png'
import Brain from "../../../Images/brain.svg"
import Hero from "../../../Images/hero-devices.svg"
import './Home.css'; 
import { FaLinkedin,FaGithub, FaEnvelope, FaColumns} from "react-icons/fa";
const Home = (props) => {
        
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    return (
         <div className="home-container">
                  
        <div className="home" id="Home">
           
           {/* <div className="h-banner">
               <div><span>Why do software engineers love to code? Because it's the only time they get to use their brains without the internet.</span></div>
               <div><img src={Brain}></img></div>
           </div>   */}
           <div class="">
           <div class="banner">
           <div>Window width: {width}</div>
            <h2>Welcome to my website</h2>
            <p>Here you can find information about me, my work, and my services.</p>
            </div>          
              <div className="h-curved">             
           </div>
</div>
           <div>
           <span>Clinton Kipkoech, Arap Ngeno.</span>
           </div>

           <div className="intro">
             <div className="i-left">
                   <span>Hello 👋  I Am</span>
                   <span>A Front-end/Web Applications Developer with a passion for creating intuitive and visually stunning user experiences. Proficient in turning designs into fully-fledged web applications that provide real value to users. Let's work together to make your web application a standout success.</span>
                   
                   <span>Ready to bring your web application ideas to life?</span>
                   <button className="i-btn">Contact me</button>
                   <div className="i-icons">
                       <FaLinkedin />
                       <FaGithub />
                       <FaEnvelope/>
                   </div>
                   <div className="blur"></div>
                   
               </div>                
             <div className="i-right">
               <div className="image-container">
                   <span>Clinton Kipkoech Ngeno</span>
                   <img src={MyImage} alt='my Profile' className="i-img"></img>
               </div>  
               <div>
                   <div className="i-r-d">
                       <span>Email</span>
                       <span>clintonkipkoechngeno@gmail.com</span>
                   </div>
                   <div className="i-r-d">
                           <span>Phone</span>
                           <span>070 776 3494</span>
                   </div>
                   <div className="i-r-d">
                           <span>Position</span>
                           <span>Front-End Developer</span>
                   </div>      
               </div>             
             </div>                
           </div>
       </div>  
         </div>     
    )
}

export default Home;





                {/* <div className="background"> */}
                    {/* <span className="circle circle-1"></span> */}
                    {/* <span className="circle circle-2" ></span> */}
                    {/* <span className="circle circle-3"></span> */}
                {/* </div> */}                