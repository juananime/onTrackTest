import {Books} from '../../api/types';
import {
  SET_API_ERROR,
  SET_BOOKS_DATA,
  SET_FILTERS,
  SET_LOAD_PAGE,
  SET_NUMBER_OF_ITEMS_PER_PAGE,
  START_BOOKS_DATA,
} from './constants';
import {Reducer} from 'react';
export type BookReducerState = {
  booksData: Books | null;
  isLoading: boolean;
  filters: Array<string>;
  itemsPerPage: number;
  page: number;
  error: any | null;
};
const initialState: BookReducerState = {
  booksData: null,
  isLoading: false,
  filters: [],
  page: 1,
  itemsPerPage: 20,
  error: null,
};
const reducer: Reducer<any, any> = (
  state: BookReducerState = initialState,
  action,
): BookReducerState => {
  const {type, payload} = action;
  switch (type) {
    case START_BOOKS_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SET_BOOKS_DATA:
      return {...state, isLoading: false, booksData: payload};
    case SET_FILTERS:
      return {...state, filters: payload};
    case SET_API_ERROR:
      return {...state, error: payload};
    case SET_LOAD_PAGE:
      return {...state, page: payload};
    case SET_NUMBER_OF_ITEMS_PER_PAGE:
      return {...state, itemsPerPage: payload};
    default:
      return state;
  }
};

export {reducer};
