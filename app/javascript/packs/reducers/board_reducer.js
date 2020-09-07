const INITIAL_STATE = {
  board: [null, null, null, null, null, null, null, null, null],
  round: 0,
  currentPlayer: 0,
  winner: null,
  finished: false
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
  switch (action.type) {
    case 'move':
      const player = state.currentPlayer == 0 ? 'P1' : 'P2'
      const board = state.board.map((el, index) => (index == action.index ? player : el));
      const winner = winning(board, player) ? player : undefined ;

      return {
        ...state,
        ...{ board: board },
        ...{ round: state.round + 1 },
        ...{ currentPlayer: state.currentPlayer == 0 ? 1 : 0 },
        ...{ winner: winner },
        ...{ finished: !!winner }
      };
    case 'buildBoard':
      return {
        ...state,
        ...{ board: action.board.room.cells }
      };
    default: return state;
  }
};
export default reducer;
