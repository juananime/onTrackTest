import React from 'react';
import * as ReactNative from 'react-native';

export const Platform = {
  ...ReactNative.Platform,
};

export const Switch = (props) => {
  return <ReactNative.View {...props} />;
};

let newRN = Object.defineProperty(ReactNative, 'Platform', {
  get() {
    return Platform;
  },
});
newRN = Object.defineProperty(ReactNative, 'Switch', {
  get() {
    return Switch;
  },
});

module.exports = newRN;
