import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import ChatScreen from './screens/ChatScreen';
import ListScreen from './screens/ListScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

import React, { Component } from 'react';
import allReducers from './redux/reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// To customize the menu:
// https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  List: ListScreen,
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

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
