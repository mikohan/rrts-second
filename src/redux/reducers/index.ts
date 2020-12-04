import { combineReducers } from 'redux';
import { ITodos } from '../actions';
import { todosReducer } from './todos';

export interface IStoreState {
  todos: ITodos[];
}

export const rootReducer = combineReducers<IStoreState>({
  todos: todosReducer,
});
