import React from 'react';
import { View } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class FlingGestureHandler extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, ...props } = this.props;
    return (
      <View testID="mocked-fling-gesture" {...props}>
        {children}
      </View>
    );
  }
}

FlingGestureHandler.onHandlerStateChange = jest.fn();

const RNGH = jest.createMockFromModule('react-native-gesture-handler');

RNGH.FlingGestureHandler = FlingGestureHandler;

module.exports = RNGH;
