import { combineReducers } from 'redux';
import { todoReducer } from './toDoReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  userReducer,
  todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;