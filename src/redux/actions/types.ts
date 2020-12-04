import { IFetchTodosAction, IDeleteAction, IFilterByName } from './index';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO',
  FILTER_BY_NAME = 'FILTER_BY_NAME',
}

export type Action = IFetchTodosAction | IDeleteAction | IFilterByName;
