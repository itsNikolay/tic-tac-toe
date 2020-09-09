import { createSlice } from '@reduxjs/toolkit';
import consumer from "../channels/consumer"

export const slice = createSlice({
  name: 'board',
  initialState: {
    room: { cells: [], winner: null },
    channel: null,
  },
  reducers: {
    build: (state, { payload: { room } }) => {
      state.room = room;
    },
    create: (state, action) => {
      state.channel =
        consumer.subscriptions.create("RoomChannel", { received: action.payload.received });
    },
    move: (state, action) => {
      state.channel.perform('move', { index: action.payload });
    },
    newGame: (state, action) => {
      state.channel.perform('new_game');
    }
  },
});

export const { build, create, move, newGame } = slice.actions;

export default slice.reducer;
