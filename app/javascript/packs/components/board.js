import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';
import { connect } from "react-redux"
import {moveAction } from "../actions/board_action"

const Board = (props) => (
  <table>
    <tbody>
      <tr>
        <Cell className = "cell" id = "0" />
        <Cell className = "cell" id = "1" />
        <Cell className = "cell" id = "2" />
      </tr>
      <tr>
        <Cell className = "cell" id = "3" />
        <Cell className = "cell" id = "4" />
        <Cell className = "cell" id = "5" />
      </tr>
      <tr>
        <Cell className = "cell" id = "6" />
        <Cell className = "cell" id = "7" />
        <Cell className = "cell" id = "8" />
      </tr>
    </tbody>
  </table>
)

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveAction: () => dispatch(moveAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
