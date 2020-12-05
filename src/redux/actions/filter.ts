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

export interface IRemoveFilter {
  type: ActionTypes.REMOVE_FILTER;
  payload: string;
}

export interface IRadioFilter {
  type: ActionTypes.RADIO_FILTER;
  payload: boolean;
}

export const addFilterAction = (filter: string): IFilterByName => {
  return {
    type: ActionTypes.FILTER_BY_NAME,
    payload: filter,
  };
};

export const radioFilter = (filter: boolean): IRadioFilter => {
  return {
    type: ActionTypes.RADIO_FILTER,
    payload: filter,
  };
};
export const removeFilter = (filter: string): IRemoveFilter => {
  return {
    type: ActionTypes.REMOVE_FILTER,
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
