export function subscribeAction(channel, room, received) {
  return {
    channel,
    room,
    received
  }
}

export function unsubscribe(channel, room) {
  return {
    channel,
    room,
    leave: true,
  }
}

export const createChannelAction = (channel, received) => { 
  return {
    type: 'createChannel',
    channel,
    received
  };
};

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
