import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/container';
import createStore from './store';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
