import React, {createRef, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {setFilters} from '../books-screen/actions';
import {stringFilterToArray} from './utils/string-filter-to-array';
import {booksScreen} from '../../text/defaults';
import {AppState} from '../../store/root-reducer';
import {renderFilterString} from './utils/render-filter-strings';
import {Pressable, Text, TextInput} from 'react-native';

const MainContainer = styled.View`
  flex: 1;
  height: 100%;
`;

const ClearButtonContainer = styled.View`
  padding: 10px;
  height: 100%;
  justify-content: center;
`;

const InputTextFilter = styled.TextInput`
  padding: 20px;
`;

const FilterContainer = styled.View`
  background-color: ${({theme}) => theme.colours.textInputBackground};
  flex-direction: row;
  justify-content: space-between;
`;

const BookListFilter: React.FC = () => {
  const dispatch = useDispatch();
  const inputTextRef = createRef<TextInput>();
  const {filterPlaceholder, clearFilters} = booksScreen;
  const filtersApplied = useSelector(
    (state: AppState) => state.bookReducer.filters,
  );
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      const filters = stringFilterToArray(text);
      //Dispatches when space triggered
      if (text[text.length - 1] === ' ') {
        dispatch(setFilters(filters));
        // inputTextRef.current?.blur();
      }
    }
  }, [dispatch, text]);

  const onClearFilters = () => {
    dispatch(setFilters([]));
    inputTextRef.current?.blur();
  };

  return (
    <MainContainer>
      <FilterContainer>
        <InputTextFilter
          ref={inputTextRef}
          placeholder={
            filtersApplied.length > 0
              ? renderFilterString(filtersApplied)
              : filterPlaceholder
          }
          onChangeText={text => setText(text)}
          defaultValue={
            filtersApplied.length > 0 ? renderFilterString(filtersApplied) : ''
          }
        />
        <ClearButtonContainer>
          <Pressable onPress={onClearFilters}>
            <Text>{clearFilters}</Text>
          </Pressable>
        </ClearButtonContainer>
      </FilterContainer>
    </MainContainer>
  );
};

export {BookListFilter};
