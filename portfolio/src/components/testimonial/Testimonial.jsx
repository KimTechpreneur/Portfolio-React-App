import React from 'react'
import './testimonial.css'
import T1 from '../../assets/AFR.png'
import T2 from '../../assets/me1.png'
import T3 from '../../assets/doubletikklogo.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    review:
      "The web development and design service provided by cyril exceeded my expectations. ",avatar: T1,
    name: "Africa Quanza",
  },
  {
    id: 2,
    review:
      "Thanks to their SEO and Google Ads service, my website's visibility and traffic have significantly increased. .",avatar: T2,
    name: "Proservice INC",
  },
  {
    id: 3,
    review:
      "The content creation service offered by cyril has been outstanding. ",avatar: T3,
    name: "Doubletikk",
  },
  {
    id: 4,
    review:
      "The UI/UX design service provided by Cyril for FoodyDash was exceptional. ",
    avatar: T2,
    name: "Saurer Kim",

  },
];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          
        </SwiperSlide>
          )
           })
         
         }
        
      </Swiper>
    </section>
  )
}

export default Testimonial
