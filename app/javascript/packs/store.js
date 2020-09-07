import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
// import cableMiddleware from './middlewares/cableMiddleware';
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
  // applyMiddleware(cableMiddleware())
);

export default store;

