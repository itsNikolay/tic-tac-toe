import { createSlice } from '@reduxjs/toolkit';
import consumer from '../channels/consumer';

const getCookie = (name) => document.cookie.split(';').some((c) => c.trim().startsWith(`${name}=`));

const deleteCookie = (name, path, domain) => {
  if (getCookie(name)) {
    document.cookie = `${name}=${
      (path) ? `;path=${path}` : ''
    }${(domain) ? `;domain=${domain}` : ''
    };expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  }
};

export const slice = createSlice({
  name: 'currentUser',
  initialState: {
    id: null,
    name: null,
  },
  reducers: {
    signOut: (state) => {
      deleteCookie('user_id', '/', null);
      window.location = '/';
    },
    create: (state, action) => {
      state.channel = consumer.subscriptions.create('AuthChannel', { received: action.payload.received });
    },
    build: (state, action) => {
      state.id = action.payload.current_user_id;
      state.name = action.payload.current_user_name;
    },
  },
});

export const { signOut, create, build } = slice.actions;

export default slice.reducer;
