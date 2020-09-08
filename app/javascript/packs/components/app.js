import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board';
import Auth from './auth';
import Winner from './winner';
import NewGame from './new_game';

const App = () => (
  <div className="container">
    <Auth />
    <NewGame />
    <Winner />
    <Board />
  </div>
);

export default App;
