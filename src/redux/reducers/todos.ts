import { ITodos, IFetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const todoReducer = (
  state: ITodos[] = [],
  action: IFetchTodosAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
