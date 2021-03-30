import React from 'react';
import {render} from '@testing-library/react-native';
import {BookDetailScreen} from './book-detail-screen';
it('should display the correct label', () => {
  const {getByText} = render(<BookDetailScreen />);
});
