import React from 'react';
import profilePicture from '../../assets/images/image-profile.png';
import AOS from 'aos';

import './Intro.css';

const Intro = () => {
  AOS.init()
  return (
    <div className='intro_cnt'>
        <div className='first_cnt'>

            <div 
                className='first_cnt-img'                  data-aos="fade-right"
                data-aos-duration='2000'
            >

               <div className='first_cnt-img--inside' >
                    <img src={profilePicture} alt="Imagen de perfil" />
               </div>

            </div>

            {/* <div className='first_cnt-box'></div> */}

        </div>
        <div className='sec_cnt'>
            <div 
                className='sec_cnt-text'
                data-aos="fade-down"
                data-aos-duration='2000'
            >
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