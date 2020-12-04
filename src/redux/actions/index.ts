import axios from 'axios';

import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: ITodos[];
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
