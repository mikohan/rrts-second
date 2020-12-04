import axios from 'axios';

import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface IDeleteAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export interface IFetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: ITodos[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodos[]>(url);

    dispatch<IFetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): IDeleteAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
