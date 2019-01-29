import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import SideMenu from './components/base/SideMenu/SideMenu';
import SideMenuConnector from './redux/connectors/SideMenu.connector';
import HomeScreen from './components/screens/HomeScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ChatScreen from './components/screens/ChatScreen';
import SearchScreen from './components/screens/SearchScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import SignInScreen from './components/screens/SignInScreen';
import AuthScreen from './components/screens/AuthScreen';

import DemoList from './components/screens/DemoList';
import IconsScreen from './components/screens/IconsScreen'

const AppStack = createDrawerNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Search: SearchScreen,
    Profile: ProfileScreen,
    Demo: DemoList,
    Icons: IconsScreen,
  },
  {
    initialRouteName: 'Home',
    contentComponent: () => (
      <SideMenuConnector render={props => <SideMenu {...props} />} />
    ),
  }
);

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default AppNavigator;
