import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import Cell from './cell';
import {buildBoardAction } from "../actions/board_action"
import {createChannelAction } from "../actions/channel_actions"

const Board = (props) => {
  useEffect(() => {
    props.subscribe()
  }, []);

  return (
    <table className="tik-tak-toe-table">
      <tbody>
        <tr>
          <Cell className="cell" id="0" />
          <Cell className="cell" id="1" />
          <Cell className="cell" id="2" />
        </tr>
        <tr>
          <Cell className="cell" id="3" />
          <Cell className="cell" id="4" />
          <Cell className="cell" id="5" />
        </tr>
        <tr>
          <Cell className="cell" id="6" />
          <Cell className="cell" id="7" />
          <Cell className="cell" id="8" />
        </tr>
      </tbody>
    </table>
  );
}

const mapStateToProps = ( state, props ) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const received = result => dispatch(buildBoardAction(result))

  return {
    subscribe: () => dispatch(createChannelAction('RoomChannel', received))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
