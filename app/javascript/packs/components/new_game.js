import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { newGame } from '../features/boardSlice';

const NewGame = (props) => (
  <div className="row">
    <div className="col-md-12 text-center">
      <Button onClick={props.newGame} className="btn center top-margin">
        New Game
      </Button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch, props) => ({
  newGame: () => dispatch(newGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
