export const moveAction = (index) => {
  return {
    type: 'move',
    index
  };
};

export const buildBoardAction = (board) => { 
  return {
    type: 'buildBoard',
    board
  };
};
