import {createStore, applyMiddleware} from 'redux';
import {Platform} from 'react-native';
import createSagaMiddleware from 'redux-saga';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import {composeWithDevTools} from 'remote-redux-devtools';
import allSagas from '../sagas/root-sagas';
import {rootReducer} from './root-reducer';

import {persistStore} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

// The following enables Redux debugging in React Native Debugger with a fallback for the browser.
// Why? React Native Debugger allows for inspecting network requests.
const composer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

const composeEnhancer = composer({
  realtime: true,
  hostname: 'localhost',
  name: Platform.OS,
  port: 56789,
});

const enhancers = composeEnhancer(
  applyAppStateListener(),
  applyMiddleware(sagaMiddleware),
);

const configureStore = () => {
  const store = createStore(rootReducer, enhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(allSagas);
  return {store, persistor};
};

export {configureStore};
