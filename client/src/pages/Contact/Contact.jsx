import React from 'react';
import ContactForm from '../../components/Form/Form';
import IconCircle from '../../components/IconCircle/IconCircle';
import IconsComponent from '../../components/IconsComponent/IconsComponent';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-cnt'>

        <div className='contact_cnt-icons'>

            <div className='contact_cnt-title'>
                <h2>Podes encontrarme en</h2>
            </div>
            
            <IconsComponent />

        </div>

        <div className='contact_cnt-form'>

            <div className='contact_cnt-form-subtitle'>
                <h3>
                    Tambien podes contactarme dejandome un correo
                </h3>
            </div>

            <div className='contact_cnt-form-icon'>
                <IconCircle />
            </div>            
            {/* <ContactForm /> */}

        </div>

    </div>
  )
}

export default Contact