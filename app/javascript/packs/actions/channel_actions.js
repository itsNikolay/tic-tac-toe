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
