import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { backgroundAction } from './strore/background';
import { counterAction } from './strore/counter';

function App() {
  const counter = useSelector((state) => state.counter.counter)
  const background = useSelector((state) => state.background.background)
  const dispatch = useDispatch();
  const colors = ['red', 'yellow', 'green', 'pink', 'cyan', 'blue', 'violet', 'white', 'marron']
  const getColorRandom = () => {
    let min = 0
    let index = Math.round(Math.random() * ((colors.length - 1) - min) + min)
    return colors[index]
  }
  const plus = () => {
    dispatch(counterAction.increment())
    dispatch(backgroundAction.changeBackground(getColorRandom()))
  }
  const minus = () => {
    dispatch(counterAction.decrement())
    dispatch(backgroundAction.changeBackground(getColorRandom()))
  }
  return (
    <div className="App" style={{ backgroundColor: background }}>

      <h1>Counter: {counter}</h1>
      <div className='btn'>
        <button onClick={plus}>Increment</button>
        <button onClick={minus}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
