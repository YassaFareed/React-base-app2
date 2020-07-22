import React from 'react';
import './Hello.css'

function Hello({firstname}) {
  return <h1 className="myname">Hello <strong>{firstname}</strong></h1>
  
}

export default Hello;
