import { IFetchTodosAction, IDeleteAction } from './index';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO',
}

export type Action = IFetchTodosAction | IDeleteAction;
