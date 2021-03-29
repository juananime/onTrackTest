import {call, takeLatest, put} from 'redux-saga/effects';
import {GET_BOOK_DETAIL} from './constants';
import {setBookDetail, startBooksDetail} from './actions';

import {ActionDispatch, setAPIError} from '../books-screen/actions';
import {getBookDetailAPI} from '../../services/get-book-detail';

export function* getBookDetailSaga({
  payload: id,
}: ActionDispatch<number>): Generator<any, any, any> {
  try {
    yield put(startBooksDetail());
    const response = yield call(getBookDetailAPI, id);

    yield put(setBookDetail(response.data.book));
  } catch (err) {
    yield put(setAPIError(err));
  }
}

export default function* bookDetailSaga() {
  yield takeLatest(GET_BOOK_DETAIL, getBookDetailSaga);
}
