const INITIAL_STATE = {
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  round: 0,
  currentPlayer: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'move':
      const player = state.currentPlayer == 0 ? 'P1' : 'P2'
      return {
        ...state,
        ...{ board: state.board.map((el, index) => (index == action.index ? player : el)) },
        ...{ round: state.round + 1 },
        ...{ currentPlayer: state.currentPlayer == 0 ? 1 : 0 }
      };
    default: return state;
  }
};
export default reducer;
