import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk));