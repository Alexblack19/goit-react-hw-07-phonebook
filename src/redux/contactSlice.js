import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: InitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.name !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
