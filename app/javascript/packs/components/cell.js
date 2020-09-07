import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    return (
      <td
        className="cell ${this.props.state}"
        id={this.props.id}
        onClick={this.handleClick}
      >
      </td>
    );
  }
}

Cell.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string
};

export default Cell;
