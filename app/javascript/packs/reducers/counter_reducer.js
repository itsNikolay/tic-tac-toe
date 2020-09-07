// import { INCREMENT, DECREMENT } from './counter.types';
const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state, count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state, count: state.count - 1,
      };
    default: return state;
  }
};
export default reducer;
