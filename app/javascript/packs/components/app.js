import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board';
import Winner from './winner';

const App = () => (
  <div>
    <Winner />
    <Board />
  </div>
);

export default App;
