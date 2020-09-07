const INITIAL_STATE = {
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  round: 0,
  currentPlayer: 0,
  winner: null
};

const winning = (board, player) => {
  return (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'move':
      const player = state.currentPlayer == 0 ? 'P1' : 'P2'
      const board = state.board.map((el, index) => (index == action.index ? player : el));
      return {
        ...state,
        ...{ board: board },
        ...{ round: state.round + 1 },
        ...{ currentPlayer: state.currentPlayer == 0 ? 1 : 0 },
        ...{ winner: winning(board, player) ? player : undefined }
      };
    default: return state;
  }
};
export default reducer;
