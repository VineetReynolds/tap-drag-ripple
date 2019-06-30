import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ripple from './Ripple.js';

function App() {
  return (
  <div className="center">
    <Ripple classes="btn">
      <div className="block"></div>
      Click Me
    </Ripple>
  </div>
  );
}

export default App;
