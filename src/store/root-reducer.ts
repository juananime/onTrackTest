import {combineReducers} from 'redux';
import {Reducer} from 'react';
import {
  reducer as bookReducer,
  BookReducerState,
} from '../components/books-screen/reducer';
import {
  reducer as bookDetailReducer,
  BookDetailReducerState,
} from '../components/book-detail-screen/reducer';
const allReducers = combineReducers({bookReducer, bookDetailReducer});

export type AppState = {
  bookReducer: BookReducerState;
  bookDetailReducer: BookDetailReducerState;
};

const rootReducer: Reducer<any, any> = (state: AppState, action: any) => {
  return allReducers(state, action);
};
export {rootReducer};
