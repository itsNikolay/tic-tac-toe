import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"

const Winner = (props) => (
  <h1 className="notification">
    { props.winner ? null : "Your Turn!" }
    { props.winner == "P1" ? 'Winner is Player 1!' : null }
    { props.winner == "P2" ? 'Winner is Player 2!' : null }
  </h1>
);


const mapStateToProps = (state) => {
  const winner = state.board.winner;
  return {
    winner: state.board.winner
  }
}

export default connect(mapStateToProps)(Winner)
