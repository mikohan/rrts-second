import { ActionTypes } from './types';

export interface IFilterByName {
  type: ActionTypes.FILTER_BY_NAME;
  payload: string;
}

export const addFilterAction = (filter: string): IFilterByName => {
  return {
    type: ActionTypes.FILTER_BY_NAME,
    payload: filter,
  };
};
