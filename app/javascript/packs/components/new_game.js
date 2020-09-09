import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"
import {newGameAction } from "../actions/board_action"
import Button from 'react-bootstrap/Button';

const NewGame = (props) => (
  <div className="row">
    <div className="col-md-12 text-center">
      <Button onClick={props.newGame} className="btn center top-margin">
        New Game
      </Button>
    </div>
  </div>
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
