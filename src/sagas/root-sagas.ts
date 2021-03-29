import {all} from 'redux-saga/effects';

import booksSaga from '../components/books-screen/saga';
import bookDetailSaga from '../components/book-detail-screen/saga';

export default function* rootSaga(): Generator<any, any, any> {
  yield all([booksSaga(), bookDetailSaga()]);
}
