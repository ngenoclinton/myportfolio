import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

// import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SwiperCore, FreeMode} from 'swiper'; 

const Card = ({service}) => {
  return (
    <div className=''>     
        <div className='card'>
            <div className='image-content'>
              <div><span className='overlay'></span></div>
              <div className='card-image'>
               <img src ={service.icon} className='card-img'/>
              </div>
            </div>
              
              <span className='name'>{service.service}</span>
              <span className='description display-8'>    {service.description}</span>
        </div>
    </div>
  )
}

export default Card;