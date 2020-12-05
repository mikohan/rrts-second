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
      let appliedFilters: string[] = state.appliedFilters;
      let value = action.payload;
      if (value) {
        appliedFilters = addFilterIfNotExists(value, appliedFilters);
      }
      let todos = state.todos;
      let filtredTodos: ITodos[] = [];
      appliedFilters.forEach((el: string) => {
        let fs: ITodos[] = todos.filter((todo: ITodos) => {
          return todo.title.includes(el);
        });
        filtredTodos.push(fs);
      });

      return { ...state, todos: filtredTodos, appliedFilters: appliedFilters };
    case ActionTypes.REMOVE_FILTER:
      let appliedFilters2: string[] = state.appliedFilters;
      let filter = action.payload;
      appliedFilters2 = removeFilter(filter, appliedFilters2);
      let filtredTodos2 = state.todos.filter((todo: ITodos) => {
        return !appliedFilters2.includes(todo.title);
      });
      return { ...state, todos: filtredTodos2 };

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

function removeFilter(filter: string, appliedFilters: string[]): string[] {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}
