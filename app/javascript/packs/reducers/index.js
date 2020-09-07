import { combineReducers } from 'redux';
import counter from './counter_reducer';
import board from './board_reducer';


const rootReducer = combineReducers({
  counter,
  board
});

export default rootReducer;
