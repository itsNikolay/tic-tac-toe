const INITIAL_STATE = {
  room: { cells: [] },
  currentUserId: null,
  currentUserName: null,
  currentUserTurn: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'buildBoard':
      const currentUserId =
        action.board && action.board.current_user_id || state.currentUserId
      const currentUserName =
        action.board && action.board.current_user_name || state.currentUserName;
      const actionTurn = action.board.room && action.board.room.current_turn_user_id || state.room.current_turn_user_id
      const currentUserTurn = currentUserId === actionTurn;

      console.log(currentUserId, actionTurn, currentUserTurn);

      return {
        ...state,
        ...action.board,
        currentUserId,
        currentUserName,
        currentUserTurn
      };
    default: return state;
  }
};
export default reducer;
