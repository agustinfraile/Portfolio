import React, { useState } from 'react';
import Card from '../Card/Card';
import './Carrusel.css';



const Carrusel = ({cards}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // función para avanzar al siguiente elemento
  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  }

  // función para retroceder al elemento anterior
  const goToPrev = () => {
    setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className='carrusel'>
      <Card data={cards[currentIndex]}/>
      <button 
        onClick={goToPrev} 
        disabled={currentIndex === 0}
      >
        Anterior
      </button>
      <button 
        onClick={goToNext} 
        disabled={currentIndex === cards.length - 1}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Carrusel