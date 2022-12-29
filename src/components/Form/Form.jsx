import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form_cnt'>
        <form>
            {/* <label htmlFor="name">Nombre</label> */}
            <input type="text" name="name" placeholder='Nombre' />

            {/* <label htmlFor="email">Correo</label> */}
            <input type="email" name="email" placeholder='Correo electronico' />

            {/* <label htmlFor="text">Mensaje</label> */}
            <textarea name="text" placeholder='Escriba aqui su mensaje'></textarea>

            <button type="submit">Enviar mensaje</button>
        </form>
    </div>
  )
}

export default Form