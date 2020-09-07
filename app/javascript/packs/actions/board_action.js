export const moveRoomChannelAction = (index) => { 
  return {
    type: 'moveRoomChannelAction',
    index
  };
};

export const newGameAction = () => {
  return {
    type: 'newGameAction'
  };
};

export const buildBoardAction = (board) => { 
  return {
    type: 'buildBoard',
    board
  };
};
