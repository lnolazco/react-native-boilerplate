import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import logger from 'redux-logger';

import allReducers from '../redux/reducers/index.js';
import AppNavigator from '../AppNavigator';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'AuthLoading',
  state => state.nav,
);

const AppWithNavigationState = reduxifyNavigator(AppNavigator, 'AuthLoading');

const mapStateToProps = state => ({
    state: state.nav,
});
  
const AppWithNavigation = connect(mapStateToProps)(AppWithNavigationState);

const store = createStore(
  allReducers,
  applyMiddleware(thunk, navigationMiddleware, logger)
);

export { store, AppWithNavigation };
