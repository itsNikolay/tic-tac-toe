import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
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
    );
  }
}

Board.propTypes = {
};

export default Board;
