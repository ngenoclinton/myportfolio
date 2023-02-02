import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTachographDigital, faLaptopMobile,} from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import FrontEnd from '../../../Images/front-end.png'
import Seo from '../../../Images/seo.png'
import Ecommerce from '../../../Images/ecommerce-solution.png'
import ResponsiveDesign from '../../../Images/responsive-website-design.png'
import SocialMedia from '../../../Images/social-media.png'
import ContentWriting from '../../../Images/website-content-writing.png'
import serviceImg from "../../../Images/AAQ.jpg"

//componets 
import Card from './ServiceCard';
import {services} from './servicesList'

import 'bootstrap/dist/css/bootstrap.min.css';
const Services = () => {   
     
    return (
     <div className='services-container' id='Services'> 
        
        <div className='title service-title'>
            <span>Things I Can Do</span>
            <span className='move sub-heading'>Provide Wide Range of Digital Services</span>
            <div className='underline-border'></div>
        </div>

        <div className='services grid bgMain'>
            {services.map((item, index)=>(    
                <div key={index} className="grid content">       
                    <Card 
                    service = {item}/>
                </div>
                )) }                
        </div>
        <div className='banner' style={{display:"none"}}>
            <span></span>
            <span>
            Are you ready to take your online presence to the next level?. Let's work together to create a website that exceeds your expectations and helps your business thrive. Contact me to start discussing your project and how I can help your business succeed. 
            </span>
            <p>Do you have a project in mind that you need a web developer for? Look no further! My web developer portfolio showcases my skills and experience in creating visually stunning and user-friendly websites. Let's work together to bring your project to life and make a lasting impact online.</p>

            <button>Contact me</button>
        </div>
</div>
    )
}

export default Services;



{/* <Swiper
                slidesPerView={3}
                slidesPerGroup={2}
                spaceBetween={10}
                loop={true}
                // loopFillGroupWithBlank={true}
                centeredSlide={true}
                fade={true}
                speed={2000}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                    slidesPerGroup: 1,
                    spaceBetween:30,
                },
                1336: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                }}
                >
                    <SwiperSlide></SwiperSlide>
                </Swiper> */}