import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import currentUser from './features/currentUserSlice';
import board from './features/boardSlice';

export default configureStore({
  reducer: {
    currentUser,
    board,
  },
  middleware: [
    logger,
  ],
});
