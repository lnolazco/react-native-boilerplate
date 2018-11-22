import React, { Component } from 'react';
import allReducers from './redux/reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

const store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
