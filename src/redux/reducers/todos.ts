import { ITodos, ActionTypes, Action } from '../actions';

export const initState = {
  todos: [],
  filtredTodos: [],
  appliedFilters: ['dol'],
};

export interface ITodosState {
  todos: ITodos[];
  filtredTodos: ITodos[];
  appliedFilters: string[];
}

export const todosReducer = (
  state = initState,
  action: Action
): ITodosState => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return { ...state, todos: action.payload, filtredTodos: action.payload };
    case ActionTypes.DELETE_TODO:
      const deletedObj = state.filtredTodos.splice(
        state.filtredTodos.findIndex((i: ITodos) => i.id === action.payload)
      );

      return {
        ...state,
        filtredTodos: deletedObj,
      };
    case ActionTypes.FILTER_BY_NAME:
      let appliedFilters: string[] = state.appliedFilters;
      let value = action.payload;
      if (value) {
        appliedFilters = addFilterIfNotExists(value, appliedFilters);
      }
      let todos = state.todos;
      let filtredTodos: any = [];
      appliedFilters.forEach((el: string) => {
        let fs: ITodos[] = todos.filter((todo: ITodos) => {
          return todo.title.includes(el);
        });
        filtredTodos.push(...fs);
      });

      return {
        ...state,
        filtredTodos: filtredTodos,
        appliedFilters: appliedFilters,
      };
    case ActionTypes.REMOVE_FILTER:
      const allTodos: ITodos[] = state.todos;
      return { ...state, filtredTodos: allTodos };
    case ActionTypes.RADIO_FILTER:
      let filtredRadioTodos = state.todos.filter((todo: ITodos) => {
        return todo.completed === action.payload;
      });
      return { ...state, filtredTodos: filtredRadioTodos };

    default:
      return state;
  }
};

// helpers need to be refactored later
function addFilterIfNotExists(filter: string, appliedFilters: string[]) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);
  return appliedFilters;
}
