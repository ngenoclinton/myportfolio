import "./About.css";
import MyImage from "../../../Images/me-about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserOutlined, FieldTimeOutlined} from '@ant-design/icons';
import {  FaPhoneAlt,  FaTimesCircle } from "react-icons/fa";
import { faPhone, faEnvelope, faSuitcase, faHeadset} from "@fortawesome/free-solid-svg-icons";


const About = () => {
    return (
        <div className="about" id='About'>
            <div className="a-header">
                <div className="about-title">
                    <span >About Me</span>
                    <div className="underline-border"></div>
                </div>
            </div>

            <div className="about-content">
                <div className="about-left" >   
                   <div className="about_img">
                     <img src={MyImage} alt ="img/images"/>
                   </div>    
                </div>

                <div className="a-right move-btn">   
                <span className="move">Front-end Developer</span>             
                    <div className="a-right-content">
                    <span>As a front-end web developer, I take pride in creating visually appealing and user-friendly websites and web apps that engage and convert users. With a strong foundation in HTML, CSS, and JavaScript, I have the ability to bring designs to life and create seamless user experiences.</span>

<span>With a keen eye for aesthetics and a passion for delivering seamless user experiences</span>
<span>I write standards based code that is semantic, accessible, search-engine friendly, easy to maintain, cross browser compatible, and performant.</span>
<span>I am also skilled in building systems that implement business logic and interact with server-side technology via APIs and tools such as React and Redux, as well as testing code using tools such as Jasmine.</span>
<span>I have a special interest working on websites that have seamless transitions and require high-level performance to maintain a smooth and appealing website.</span>
<span style={{display:"none"}}>I am dedicated to helping businesses like yours succeed online. From custom website design to responsive coding, I offer a full range of web development services to bring your project to life. 
Take a look at my past work and let's discuss how I can help your business thrive with a beautifully crafted website.</span>

<span>I can quickly and efficiently join your team using continuous-integration methods and tools such as Git and Agile.</span>
                    </div>
                </div>
            </div>
            <div className='education'>
                    <p>Education</p>
                    <ul className="edu-li">
                        <li>BSc. Kenya Methodist University</li>
                        <li>Zero To Mastery Academy</li>
                        <li>The App Brewery</li>
                    </ul>
            </div>
        </div>
    )
}

export default About; 

{/* <div className="a-right">
                    <div className="a-i">
                        <span>Inforamtion</span>
                            <div>
                                <div>
                                    <UserOutlined className="a-icon"/> 
                                    <span>Clinton Kipkoech Ngeno</span></div>
                                <div>
                                    <FaPhoneAlt className="a-icon"/>  
                                    <span>070-776-3494</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} className="a-icon"/>                    
                                    <span>clintonkipkoechngeni@gmail.com</span>
                                </div>
                            </div>
                    </div>
                    <div className="a-i">
                        <span>Experience and Support</span>
                            <div> 
                                <div>
                                    <FieldTimeOutlined className="a-icon"/>
                                    <span>Entry level developer</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faSuitcase} className="a-icon"/>                             <div className="a-es">
                                      <span>5+ Projects</span>
                                      <span>completed</span>
                                    </div>
                                </div>   
                                <div>
                                    <FontAwesomeIcon icon={faHeadset} className="a-icon"/>                      
                                    <div className="a-es">
                                       <span>Support</span>
                                       <span> Online 24/7</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div> */}