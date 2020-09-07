const INITIAL_STATE = {
  room: { cells: [] }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'buildBoard':
      return {
        ...state,
        ...action.board
      };
    default: return state;
  }
};
export default reducer;
