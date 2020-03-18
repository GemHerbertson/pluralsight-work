import React from 'react';
import './App.css';

// function logRandom() {
//   console.log(Math.random());
// }

function Button() {
  const [counter, setCounter] = React.useState(5);
  return (
    <button onClick={() => setCounter(counter*2)}>{counter}</button>
  )
}

export default Button;
