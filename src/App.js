import React from 'react';
import './App.css';
import Keypad from './Keypad';
import Output from './Output';

function App() {
  return (
    <div className="App">
      <Keypad buttonPressed = { (name) => console.log(name) }/>
      <Output result = '0'/>
    </div>
  );
}

export default App;
