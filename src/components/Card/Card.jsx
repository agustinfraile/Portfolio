import React from 'react';
import './Card.css';


const Card = ({data}) => {
  
    const { title, description, id } = data;

    return (
        <div className='card_cnt'>
            <h3>{title}</h3>
            <h6>{id}</h6>
            <p>{description}</p>
        </div>
    )
}

export default Card