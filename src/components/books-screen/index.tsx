import React, {useEffect} from 'react';
import {Text, ListRenderItem, SafeAreaView, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {getBooksData, setNumberOfItemsPerPage} from './actions';

import {AppState} from '../../store/root-reducer';
import {Book} from '../../api/types';
import {BookCard} from '../book-card';
import {BookListFilter} from '../book-list-filter';
import {usePrevious} from '../../app/hooks/use-previous';
import {Route} from '../../navigator/types';
import {booksScreen} from '../../text/defaults';

const MainContainer = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.colours.brandBlue};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.paddings.mainPadding}px;
`;

const ListContainer = styled(SafeAreaView)`
  width: 100%;
  flex: 1;
`;
const ListFilterContainer = styled(SafeAreaView)`
  width: 100%;
  flex: 0.1;
`;
const BooksScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isLoading = useSelector(
    (state: AppState) => state.bookReducer.isLoading,
  );
  const booksData = useSelector(
    (state: AppState) => state.bookReducer.booksData,
  );
  const filters = useSelector((state: AppState) => state.bookReducer.filters);
  const error = useSelector((state: AppState) => state.bookReducer.error);
  const page = useSelector((state: AppState) => state.bookReducer.page);
  const itemsPerPage = useSelector(
    (state: AppState) => state.bookReducer.itemsPerPage,
  );

  const prevFilters = usePrevious(filters);
  const prevItemsPerPage = usePrevious(itemsPerPage);

  useEffect(() => {
    if (
      (!booksData?.books && !error) ||
      filters !== prevFilters ||
      itemsPerPage !== prevItemsPerPage
    ) {
      dispatch(getBooksData({page, filters, itemsPerPage}));
    }
  }, [
    booksData,
    dispatch,
    error,
    filters,
    itemsPerPage,
    page,
    prevFilters,
    prevItemsPerPage,
  ]);

  const goToBookDetail = (item: Book) => {
    navigation.navigate(Route.BookDetail, {id: item.id});
  };

  const renderListItem: ListRenderItem<Book> = ({item}) => (
    <BookCard item={item} onBookItemPressed={goToBookDetail} />
  );

  const loadMore = () => {
    dispatch(setNumberOfItemsPerPage(itemsPerPage + 20));
  };

  const keyExtractor = (item: Book, index: number) => `${index}_${item.id}`;
  return (
    <MainContainer>
      {isLoading && !booksData ? (
        <Text>{booksScreen.loading}</Text>
      ) : (
        <>
          <ListFilterContainer>
            <BookListFilter />
          </ListFilterContainer>
          <ListContainer>
            <FlatList
              data={booksData?.books}
              renderItem={renderListItem}
              keyExtractor={keyExtractor}
              onEndReached={loadMore}
              onEndReachedThreshold={0}
            />
            {isLoading && <Text>{booksScreen.loading}</Text>}
          </ListContainer>
        </>
      )}
    </MainContainer>
  );
};

export {BooksScreen};
