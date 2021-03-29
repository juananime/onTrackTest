import {Book} from '../../api/types';
import {SET_BOOK_DETAIL, START_BOOK_DETAIL} from './constants';
import {Reducer} from 'react';
export type BookDetailReducerState = {
  book: Book | null;
  isLoading: boolean;
  error: any | null;
};
const initialState: BookDetailReducerState = {
  book: null,
  isLoading: false,
  error: null,
};
const reducer: Reducer<any, any> = (
  state: BookDetailReducerState = initialState,
  action,
): BookDetailReducerState => {
  const {type, payload} = action;
  switch (type) {
    case START_BOOK_DETAIL:
      return {
        ...state,
        isLoading: true,
      };
    case SET_BOOK_DETAIL:
      return {...state, isLoading: false, book: payload};
    default:
      return state;
  }
};

export {reducer};
