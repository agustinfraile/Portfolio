import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro_cnt'>
        <div className='first_cnt'>
            <div className='first_cnt-img'>
               <div className='first_cnt-img--inside'></div> 
            </div>
        </div>
        <div className='sec_cnt'>
            <div className='sec_cnt-text'>
                <h1>Hola! soy Agustin</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Intro