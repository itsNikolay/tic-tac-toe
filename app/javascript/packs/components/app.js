import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board';
import Auth from './auth';
import Winner from './winner';
import NewGame from './new_game';
import UserContext from './UserContext';

const App = () => (
  <UserContext>
    <div className="container">
      <Auth />
      <Winner />
      <Board />
      <NewGame />
    </div>
  </UserContext>
);

export default App;
