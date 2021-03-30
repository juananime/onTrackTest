import {GET_BOOK_DETAIL, SET_BOOK_DETAIL, START_BOOK_DETAIL} from './constants';
import {ActionDispatch} from '../books-screen/actions';
import {Book} from '../../api/types';
const getBookDetail = (id: number): ActionDispatch<number> => ({
  type: GET_BOOK_DETAIL,
  payload: id,
});
const startBooksDetail = () => ({
  type: START_BOOK_DETAIL,
});

const setBookDetail = (book: Book) => ({
  type: SET_BOOK_DETAIL,
  payload: book,
});

export {getBookDetail, startBooksDetail, setBookDetail};
