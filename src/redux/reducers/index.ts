import { combineReducers } from 'redux';
import { ITodos } from '../actions';
import { filterReducer } from './filters';
import { todosReducer } from './todos';

export interface IStoreState {
  todos: ITodos[];
  filter: any;
}

export const rootReducer = combineReducers<IStoreState>({
  todos: todosReducer,
  filter: filterReducer,
});
