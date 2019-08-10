import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducer'
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = Immutable.Map();
let store = createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App/>
    </ThemeProvider>
  </Provider>,
  
  document.querySelector('#root'),
);
