import React from 'react';
import ContactForm from '../../components/Form/Form';
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
                    Tambien podes contactarme a traves de mail
                </h3>
            </div>

            <ContactForm />

        </div>

    </div>
  )
}

export default Contact