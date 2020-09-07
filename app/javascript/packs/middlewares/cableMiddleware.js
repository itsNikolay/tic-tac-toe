import consumer from "../channels/consumer"

export default function cableMiddleware() {
  const cable = consumer;

  return ({ dispatch, getState }) => next => (action) => {
    if (typeof(action) === 'function') {
      return next(action)
    }

    const {
      channel,
      room,
      leave,
    } = action;
    let { received } = action;

    if (!channel) {
      return next(action);
    }

    if (leave) {
      const subscription =
        cable
        .subscriptions
        .subscriptions
        .find(sub => sub.identifier === JSON.stringify({ channel, room }))

      return cable.subscriptions.remove(subscription);
    }

    if (typeof(received) === 'string') {
      received = result => dispatch({ type: received, result })
    }

    return cable.subscriptions.create({ channel, room }, { received });
  };
}
