import { IRemoveFilter } from './filter';
import {
  IFilterThunk,
  IFetchTodosAction,
  IDeleteAction,
  IFilterByName,
  IRadioFilter,
} from './index';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO',
  FILTER_BY_NAME = 'FILTER_BY_NAME',
  APPLY_FILTERS = 'APPLY_FILTERS',
  REMOVE_FILTER = 'REMOVE_FILTER',
  RADIO_FILTER = 'RADIO_FILTER',
}

export type Action =
  | IFilterThunk
  | IFetchTodosAction
  | IDeleteAction
  | IFilterByName
  | IRemoveFilter
  | IRadioFilter;
