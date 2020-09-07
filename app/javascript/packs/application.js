// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import './board';
// import './tic-tac-toe';

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Hello from './components/hello';
// import Board from './components/board';

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Board />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })


import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

// import App from './components/app'
import Board from './components/board';

const rootElement = document.getElementById('root')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Board />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
