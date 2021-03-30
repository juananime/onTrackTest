import {call, takeLatest, put} from 'redux-saga/effects';

import {getBooks} from '../../services/get-books';
import {GET_BOOKS_DATA} from './constants';
import {
  ActionDispatch,
  setAPIError,
  setBooksData,
  startBooksData,
} from './actions';
import type {BooksAPI} from '../../api/types';
import {BooksPostParams} from '../../api/types/books-api';

export function* getBooksData({
  payload: bookParams,
}: ActionDispatch<BooksPostParams>): Generator<any, any, any> {
  try {
    yield put(startBooksData());
    const response: BooksAPI = yield call(getBooks, bookParams);
    console.log(response.data);
    yield put(setBooksData(response.data));
  } catch (err) {
    yield put(setAPIError(err));
  }
}

export default function* booksSaga() {
  yield takeLatest(GET_BOOKS_DATA, getBooksData);
}
