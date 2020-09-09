import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { move } from '../features/boardSlice';

const backgroundColor = (player) => (
  (player == 1 ? 'black' : null) || (player == 2 ? 'white' : null)
)

const Cell = (props) => (
  <td
    className="cell"
    style={{ backgroundColor: backgroundColor(props.player) }}
    id={props.id}
    onClick={!props.winner && props.isCurrentUserTurn ? props.moveAction : () => {}}
  >
  </td>
);

const mapStateToProps = ( state, props ) => {
  const { cells, current_turn_user_id, winner } = state.board.room;
  return {
    player: cells[props.id],
    isCurrentUserTurn: current_turn_user_id === state.currentUser.id,
    winner
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    moveAction: () => dispatch(move(props.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
