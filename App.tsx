import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {theme} from './src/app/theme';
import {configureStore} from './src/store';
import {MainStack} from './src/navigator/stack';

const App: React.FC = () => {
  const {store} = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
