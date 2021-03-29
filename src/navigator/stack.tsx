import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BooksScreen} from '../components/books-screen';
import {BookDetailScreen} from '../components/book-detail-screen';
import {Route} from './types';

const Stack = createStackNavigator();
const MainStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={Route.BookList} component={BooksScreen} />
    <Stack.Screen name={Route.BookDetail} component={BookDetailScreen} />
  </Stack.Navigator>
);
export {MainStack};
