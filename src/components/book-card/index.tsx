import React from 'react';
import styled from 'styled-components/native';

import {Book} from '../../api/types';
import {Pressable} from 'react-native';

const BookListItem = styled.View`
  background-color: ${({theme}) => theme.colours.lightBackground};
  padding-vertical: ${({theme}) => theme.paddings.cardBookPadding}px;
  padding-horizontal: 15px;
`;

const BookTitle = styled.Text`
  color: ${({theme}) => theme.colours.bookTitle};
`;

type Props = {
  item: Book;
  onBookItemPressed: (item: Book) => void;
};
const BookCard: React.FC<Props> = ({item, onBookItemPressed}) => {
  const onBookPressed = () => {
    onBookItemPressed(item);
  };
  return (
    <Pressable onPress={onBookPressed}>
      <BookListItem>
        <BookTitle>{item.book_title}</BookTitle>
      </BookListItem>
    </Pressable>
  );
};

export {BookCard};
