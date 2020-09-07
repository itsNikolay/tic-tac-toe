// import RoomChannel from '../channels/room_channel';
import consumer from "../channels/consumer"

const INITIAL_STATE = {
  roomChannel: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'createChannel':
      const roomChannel = consumer.subscriptions.create("RoomChannel", { received: action.received });

      return {
        ...state,
        roomChannel
      };
    case 'moveRoomChannelAction':
      state.roomChannel.perform('move', { index: action.index });

      return {
        ...state,
      };
    case 'newGameAction':
      state.roomChannel.perform('new_game');

      return {
        ...state,
      };
    case 'buildBoard':
      return {
        ...state,
        ...action.board
      };
    default: return state;
  }
};
export default reducer;
