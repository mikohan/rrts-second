import { ITodos, ActionTypes, Action } from '../actions';

export const initState = {
  todos: [],
  appliedFilters: [],
};

export interface ITodosState {
  todos: ITodos[];
  appliedFilters: string[];
}

export const todosReducer = (
  state = initState,
  action: Action
): ITodosState => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return { ...state, todos: action.payload };
    case ActionTypes.DELETE_TODO:
      const deleted = state.todos.filter(
        (todo: ITodos) => todo.id !== action.payload
      );

      return { ...state, todos: deleted };
    case ActionTypes.FILTER_BY_NAME:
      return { ...state, appliedFilters: ['some', 'strings'] };
    default:
      return state;
  }
};
