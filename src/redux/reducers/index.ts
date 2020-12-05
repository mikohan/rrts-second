import { combineReducers } from 'redux';
import { todosReducer } from './todos';

export interface IStoreState {
  products: any;
}

export const rootReducer = combineReducers<IStoreState>({
  products: todosReducer,
});
