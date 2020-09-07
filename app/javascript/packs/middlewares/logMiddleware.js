export default function logMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    return next(action)
  };
}
