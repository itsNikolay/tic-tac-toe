import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"
import {newGameAction } from "../actions/board_action"

const NewGame = (props) => (
  <button onClick={props.newGame}>
    New Game
  </button>
);

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    newGame: () => dispatch(newGameAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame)
