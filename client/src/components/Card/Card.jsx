import React from 'react';
import { SwiperSlide } from 'swiper/react';

import './Card.css';


const Card = ({data}) => {
  
    const { title, description, id, image, link } = data;

    return (
        <SwiperSlide className='card_cnt' onClick={() => window.open(link)}>
            <div className='card_cnt--image'>
                <img src={image} alt={`Imagen de ${title}`} />
            </div>
            <div className='card_cnt--title'>
                <h3>{title}</h3>
            </div>
            {/* <div className='card_cnt--id'>
                <h6>{id}</h6>
            </div> */}
            <div className='card_cnt--description'>
                <p>{description}</p>
            </div>
        </SwiperSlide>
    )
}

export default Card