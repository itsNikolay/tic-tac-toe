import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cell from './cell';
import { create, build } from '../features/boardSlice';

const Board = (props) => {
  useEffect(() => {
    props.subscribe();
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
};

const mapStateToProps = (state, props) => ({
  state,
});

const mapDispatchToProps = (dispatch, props) => {
  const received = (result) => dispatch(build(result));

  return {
    subscribe: () => dispatch(create({ room: 'RoomChannel', received })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
