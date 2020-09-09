import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import {moveRoomChannelAction } from "../actions/board_action"

const backgroundColor = (player) => (
  (player == 1 ? 'black' : null) || (player == 2 ? 'white' : null)
)

const Cell = (props) => (
  <td
    className="cell"
    style={{ backgroundColor: backgroundColor(props.player) }}
    id={props.id}
    onClick={!props.winnder && props.currentUserTurn ? props.moveAction : () => {}}
  >
  </td>
);

const mapStateToProps = ( state, props ) => {
  return {
    player: state.board.room.cells[props.id],
    currentUserTurn: state.board.currentUserTurn,
    winner: state.board.room.winner
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    moveAction: () => dispatch(moveRoomChannelAction(props.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
