import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"

const Winner = (props) => (
  <h1 className="notification">
    { !props.winner && props.currentPlayer == 1 ? 'Tobias turn' : null }
    { !props.winner && props.currentPlayer == 2 ? 'Nikolay turn' : null }
    { props.winner == 1 ? 'Winner is Tobias!' : null }
    { props.winner == 2 ? 'Winner is Nikolay!' : null }
  </h1>
);


const mapStateToProps = (state) => {
  const winner = state.board.winner;
  return {
    winner: state.board.winner,
    currentPlayer: state.board.currentPlayer
  }
}

export default connect(mapStateToProps)(Winner)
