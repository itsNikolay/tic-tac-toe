const INITIAL_STATE = {
  room: { cells: [] },
  current_user_id: null,
  currentUserTurn: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'buildBoard':
      const current_user_id =
        action.board && action.board.current_user_id ||
        state && state.current_user_id

      const currentUserTurn = current_user_id ===  state.room.current_turn_user_id

      return {
        ...state,
        ...action.board,
        ...current_user_id,
        currentUserTurn
      };
    default: return state;
  }
};
export default reducer;
