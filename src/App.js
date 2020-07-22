import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App(props) {
  return <div>
    <h2>Sum is {props.sum} and i am inside div</h2>
    <br/>
    <h3> Hover to see effect</h3>
   

    <br/>
    <Hello firstname={props.name}></Hello>
  </div>
  
}

export default App;
