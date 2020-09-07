import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import {moveAction } from "../actions/board_action"

const backgroundColor = (player) => (
  (player == 'P1' ? 'black' : null) || (player == 'P2' ? 'white' : null)
)

const Cell = (props) => (
  <td
    className="cell"
    style={{ backgroundColor: backgroundColor(props.player) }}
    id={props.id}
    onClick={props.finished ? null : props.moveAction}
  >
  </td>
);

const mapStateToProps = ( state, props ) => {
  return {
    player: state.board.board[props.id],
    finished: state.board.finished
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    moveAction: () => dispatch(moveAction(props.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
