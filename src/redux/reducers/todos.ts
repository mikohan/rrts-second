import { ITodos, ActionTypes, Action } from '../actions';

export const todosReducer = (state: ITodos[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo: ITodos) => todo.id !== action.payload);
    default:
      return state;
  }
};
