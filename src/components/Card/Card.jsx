import React from 'react';
import { SwiperSlide } from 'swiper/react';

import './Card.css';


const Card = ({data}) => {
  
    const { title, description, id } = data;

    return (
        <SwiperSlide className='card_cnt'>
            <h3>{title}</h3>
            <h6>{id}</h6>
            <p>{description}</p>
        </SwiperSlide>
    )
}

export default Card