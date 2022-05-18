import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './routes/App';

const initialState = {};

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
