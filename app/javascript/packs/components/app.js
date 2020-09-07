import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/hello';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Board />,
    document.body.appendChild(document.createElement('div')),
  )
})
