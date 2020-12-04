import { Action } from 'redux';
import { IStoreState } from '.';
import { ActionTypes, ITodos } from '../actions';

const initialState = {
  appliedFilters: [],
};

export const filterReducer = (state: IStoreState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FILTER_BY_NAME:
      return 'some';
    default:
      return state;
  }
};
