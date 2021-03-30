import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList, Route} from '../../navigator/types';
import {useDispatch, useSelector} from 'react-redux';
import {getBookDetail} from './actions';
import {AppState} from '../../store/root-reducer';
import {booksDetailScreen, booksScreen} from '../../text/defaults';

const MainContainer = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.colours.brandBlue};
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: ${({theme}) => theme.paddings.mainPadding}px;
`;

const BookDetailContainer = styled.View`
  background-color: ${({theme}) => theme.colours.lightBackground};
  padding: ${({theme}) => theme.paddings.mainPadding}px;
  width: 100%;
`;

const BookRow = styled.View`
  flex-direction: row;
  width: 100%;
`;

type BookDetailScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  Route.BookDetail
>;

type Props = {
  navigation: BookDetailScreenNavigationProp;
  route: RouteProp<MainStackParamList, Route.BookDetail>;
};

const BookDetailScreen: React.FC<Props> = ({route}) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: AppState) => state.bookDetailReducer.isLoading,
  );
  const book = useSelector((state: AppState) => state.bookDetailReducer.book);
  useEffect(() => {
    if (!book) {
      dispatch(getBookDetail(route.params.id));
    }
  }, [book, dispatch, route.params.id]);
  return (
    <MainContainer>
      {isLoading && <Text>{booksScreen.loading}</Text>}
      {book && (
        <BookDetailContainer>
          <BookRow>
            <Text>{booksDetailScreen.id}: </Text>
            <Text>{book.id}</Text>
          </BookRow>
          <BookRow>
            <Text>{booksDetailScreen.author}: </Text>
            <Text>{book.book_author}</Text>
          </BookRow>
          <BookRow>
            <Text>{booksDetailScreen.year}: </Text>
            <Text>{book.book_publication_year}</Text>
          </BookRow>
          <BookRow>
            <Text>{booksDetailScreen.country}: </Text>
            <Text>{book.book_publication_country}</Text>
          </BookRow>
          <BookRow>
            <Text>{booksDetailScreen.city}: </Text>
            <Text>{book.book_publication_city}</Text>
          </BookRow>
          <BookRow>
            <Text>{booksDetailScreen.pages}: </Text>
            <Text>{book.book_pages}</Text>
          </BookRow>
        </BookDetailContainer>
      )}
    </MainContainer>
  );
};

export {BookDetailScreen};
