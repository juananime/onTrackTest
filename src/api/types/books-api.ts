import {Books} from './books';

export type BooksAPI = {
  data: Books;
};

export type BooksPostParams = {
  filters: Array<string> | undefined;
  page: number | undefined;
  itemsPerPage: number | undefined;
};
