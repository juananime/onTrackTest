import {
  GET_BOOKS_DATA,
  SET_API_ERROR,
  SET_BOOKS_DATA,
  SET_FILTERS,
  SET_LOAD_PAGE,
  SET_NUMBER_OF_ITEMS_PER_PAGE,
  START_BOOKS_DATA,
} from './constants';
import {Books} from '../../api/types';
import {BooksPostParams} from '../../api/types/books-api';

export type ActionDispatch<T> = {
  type: string;
  payload: T;
};

export const getBooksData = (
  bookParams: BooksPostParams,
): ActionDispatch<BooksPostParams> => ({
  type: GET_BOOKS_DATA,
  payload: bookParams,
});
export const startBooksData = () => ({
  type: START_BOOKS_DATA,
});
export const setBooksData = (booksData: Books): ActionDispatch<Books> => ({
  type: SET_BOOKS_DATA,
  payload: booksData,
});

export const setAPIError = (error: any): ActionDispatch<any> => ({
  type: SET_API_ERROR,
  payload: error,
});

export const setFilters = (
  filters: Array<string>,
): ActionDispatch<Array<string>> => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setLoadPage = (page: number) => ({
  type: SET_LOAD_PAGE,
  payload: page,
});

export const setNumberOfItemsPerPage = (itemsPerPage: number) => ({
  type: SET_NUMBER_OF_ITEMS_PER_PAGE,
  payload: itemsPerPage,
});
