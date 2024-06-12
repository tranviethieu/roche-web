import authReducer from './reducer/auth';
import permisstionReducer from './reducer/permisstion';
import { combineReducers } from 'redux';
import siteReducer from './reducer/site';
import userReducer from './reducer/user';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  site: siteReducer,
  permisstion: permisstionReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
