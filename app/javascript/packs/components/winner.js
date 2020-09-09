import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const Winner = (props) => (
  <h1 className="center">
    { !props.winner && props.current_turn_user_id == 1 ? 'Tobias turn' : null }
    { !props.winner && props.current_turn_user_id == 2 ? 'Nikolay turn' : null }
    { props.winner == 1 ? 'Winner is Tobias!' : null }
    { props.winner == 2 ? 'Winner is Nikolay!' : null }
  </h1>
);

const mapStateToProps = (state) => {
  const { winner, current_turn_user_id } = state.board.room;
  return {
    winner,
    current_turn_user_id,
  };
};

export default connect(mapStateToProps)(Winner);
