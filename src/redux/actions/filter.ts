import { ActionTypes } from './types';

export interface IFilterByName {
  type: ActionTypes.FILTER_BY_NAME;
  payload: string;
}
