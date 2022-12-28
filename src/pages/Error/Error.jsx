import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
  return (
    <div> 
      <h1>ERROR: REDIRIGIRSE A </h1>
      <Link to='/'>
        <button>HOME</button>
      </Link> 

    </div>
    
  )
}

export default Error