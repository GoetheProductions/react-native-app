import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './app/Router';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      reduxThunk,
      loggerMiddleware,
    )
  );
  return createStore(reducers, initialState, enhancer);
};

const store = configureStore({});

const AppWithRedux = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent('shipster', () => AppWithRedux);
