import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store, AppWithNavigation } from './redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}
