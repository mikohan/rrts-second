import { combineReducers } from 'redux';
import { filterReducer } from './filters';
import { todosReducer } from './todos';

export interface IStoreState {
  todos: any;
  filter: any;
}

export const rootReducer = combineReducers<IStoreState>({
  todos: todosReducer,
  filter: filterReducer,
});
