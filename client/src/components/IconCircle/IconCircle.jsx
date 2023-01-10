import React from 'react';
import './IconCircle.css';

const IconCircle = ({ image, link }) => {

  const isEmail = link.includes("@");

  return (
    <div 
      className='icons_cnt-icon'
      onClick={() => isEmail ? window.open(`mailto:${link}`) : window.open(link)}
    >
      <img src={image} alt={`Imagen de ${image}`} />
    </div>
  )
}

export default IconCircle