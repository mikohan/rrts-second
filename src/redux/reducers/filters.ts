import { Action } from '../actions';
import { ActionTypes } from '../actions';

const initState: string[] = [];

export const filterReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FILTER_BY_NAME:
      return ['lorem', 'ipsum'];
    default:
      return state;
  }
};
