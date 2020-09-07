import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "../actions/counter_action"

const Board = (props) => (
  <div className="App">
    <div>Count: {props.count}</div>
    <button onClick={() => props.increaseCounter()}>Increase Count</button>
    <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
  </div>
)

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
