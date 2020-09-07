import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import Cell from './cell';

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

export default connect(mapStateToProps)(Board)
