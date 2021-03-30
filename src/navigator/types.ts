import {Route} from './route';

export type SupportsPassingBookId = {
  id: number;
};

export type MainStackParamList = {
  [Route.BookList]: undefined;
  [Route.BookDetail]: SupportsPassingBookId;
};
export {Route};
