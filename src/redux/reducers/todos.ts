import { ITodos, ActionTypes, Action } from '../actions';

export const initState = [];

export const todosReducer = (state = initState, action: Action): ITodos[] => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      const deleted = state.filter(
        (todo: ITodos) => todo.id !== action.payload
      );
      return deleted;
    default:
      return state;
  }
};
