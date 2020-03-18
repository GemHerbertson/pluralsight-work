import React from 'react';
import ReactDOM from 'react-dom';

// function logRandom() {
//   console.log(Math.random());
// }

function Button (props) {
  // const handleClick = () => setCounter(counter+1);
  return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

// App

function App () {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <div>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));

  // export default Button;