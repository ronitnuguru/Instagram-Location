import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async, ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
