import { combineReducers } from 'redux';
import board from './board_reducer';
import channels from './channel_reducers';


const rootReducer = combineReducers({
  board,
  channels
});

export default rootReducer;
