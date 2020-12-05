import { Action, ActionTypes } from '../actions';

const initState: string[] = [];

export const filterReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FILTER_BY_NAME:
      return ['lorem', 'ipsum'];
    case ActionTypes.APPLY_FILTERS:
      console.log(state);
      return state;

    default:
      return state;
  }
};
