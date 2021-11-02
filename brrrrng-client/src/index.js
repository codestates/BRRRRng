import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import Reducer from './_reducers/index';

import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise'

import thunk from "redux-thunk";


const createStoreWith = applyMiddleware(promiseMiddleware, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWith(
    Reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>,    
  document.getElementById('root')
);
