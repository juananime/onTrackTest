import {api} from '../api';
import {BooksPostParams} from '../api/types/books-api';

const API_BOOKS = '/api/books';

const getBooks = async ({page, itemsPerPage, filters}: BooksPostParams) => {
  const filtersParam =
    filters && filters?.length > 0 ? [{type: 'all', values: filters}] : [];

  try {
    return await api.post(API_BOOKS, {
      page,
      itemsPerPage,
      filters: filtersParam,
    });
  } catch (error) {
    throw error;
  }
};

export {getBooks};
