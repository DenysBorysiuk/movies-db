import { createStore } from 'redux';

import moviesReducer from './reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
