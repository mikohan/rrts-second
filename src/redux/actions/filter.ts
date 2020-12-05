import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface IFilterByName {
  type: ActionTypes.FILTER_BY_NAME;
  payload: string;
}

export interface IFilterThunk {
  type: ActionTypes.APPLY_FILTERS;
  payload: string[];
}

export const addFilterAction = (filter: string): IFilterByName => {
  return {
    type: ActionTypes.FILTER_BY_NAME,
    payload: filter,
  };
};

export const filterThunk = (payload: string[]) => {
  return function (dispatch: Dispatch) {
    dispatch({
      type: ActionTypes.APPLY_FILTERS,
      payload: payload,
    });
  };
};
