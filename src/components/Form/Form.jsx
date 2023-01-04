import React, { useState } from 'react';
import './Form.css';

// Creamos un componente de formulario que maneje la lógica de validación
const ContactForm = () => {
  // Inicializamos el estado para cada uno de los campos del formulario
  const [name, setName] = useState({ value: '', isValid: false });
  const [email, setEmail] = useState({ value: '', isValid: false });
  const [reason, setReason] = useState({ value: '', isValid: false });
  const [message, setMessage] = useState('');

  // Creamos una función que se ejecutará cada vez que el usuario escriba algo en un campo
  const handleChange = (event) => {
    // Obtenemos el valor y el nombre del campo que ha cambiado
    const { name, value } = event.target;
    // Si el campo está vacío, marcamos el campo como inválido
    if (value === '') {
      if (name === 'name') {
        setName({ value, isValid: false });
      } else if (name === 'email') {
        setEmail({ value, isValid: false });
      } else {
        setReason({ value, isValid: false });
      }
    // Si el campo es el de correo, comprobamos si el formato es válido
    } else if (name === 'email') {
      // Creamos una expresión regular para comprobar el formato del correo
      // Empiece con cualquier carácter que no sea <, >, (, ), [, ], \, ., ,, ;, :, , @, o ". Esto se hace con la expresión [^<>()[\]\\.,;:\s@"]+.
      // Puede haber un punto (.) seguido de cualquier carácter que no sea <, >, (, ), [, ], \, ., ,, ;, :, , @, o ". Esto se hace con la expresión (\.[^<>()[\]\\.,;:\s@"]+)*.
      // O bien, puede haber una cadena de caracteres entre comillas dobles ("). Esto se hace con la expresión ".+".
      // Después de esto, debe haber un arroba (@).
      // A continuación, puede haber una cadena entre corchetes ([]) que represente una dirección IP. Esto se hace con la expresión \[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\].
      // O bien, puede haber una cadena que contenga un nombre de dominio. Esto se hace con la expresión ([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}.
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // Si el correo cumple con el patrón, marcamos el campo como válido
      setEmail({ value, isValid: emailRegex.test(value) });
    // Si el campo es cualquier otro, marcamos el campo como válido
    } else {
      if (name === 'name') {
        setName({ value, isValid: true });
      } else {
        setReason({ value, isValid: true });
      }
    }
  };

  // Creamos una función que se ejecutará cuando el usuario envíe el formulario
  const handleSubmit = (event) => {
    // Prevenimos que la página se recargue
    event.preventDefault();
    // Si algún campo no es válido, mostramos un mensaje de error
    if (!name.isValid || !email.isValid || !reason.isValid) {
      setMessage('Por favor, rellena todos los campos correctamente');
      // Si todos los campos son válidos, mostramos un mensaje de éxito y reseteamos los campos
    } else {
      setMessage('Formulario enviado correctamente');
      setName({ value: '', isValid: false });
      setEmail({ value: '', isValid: false });
      setReason({ value: '', isValid: false });
      // Después de 2 segundos, limpiarnos el mensaje
      setTimeout(() => {
        setMessage('');
        // Llevamos al usuario al inicio de la página
        window.scrollTo(0, 0);
      }, 1500);
      // Recargamos la página
      // window.location.reload();
    }
  };

  return (
    // Creamos el formulario con los campos y la función de envío
    <div className='form_cnt'>
      <form onSubmit={handleSubmit}>
        <div className='form_cnt--input'>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={name.value}
            onChange={handleChange}
          />
          {!name.isValid && name.value !== '' && <p className="error">Por favor, introduce un nombre válido</p>}
          {name.isValid && <p className="success">Nombre válido</p>}
          <br />
          <label htmlFor="email">Correo:</label>
          <input
            type="text"
            name="email"
            value={email.value}
            onChange={handleChange}
          />
          {!email.isValid && email.value !== '' && <p className="error">Por favor, introduce un correo válido</p>}
          {email.isValid && <p className="success">Correo válido</p>}
        </div>
        <br />
        <label htmlFor="reason">Motivo del contacto:</label>
        <select name="reason" value={reason.value} onChange={handleChange}>
          <option value="">Selecciona una opción</option>
          <option value="consulta">Consulta</option>
          <option value="sugerencia">Sugerencia</option>
          <option value="otro">Otro</option>
        </select>
        <br />
        {/* Si hay un mensaje, lo mostramos */}
      {message && <p className="form__message">{message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
