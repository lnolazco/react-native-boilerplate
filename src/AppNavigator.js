import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import SideMenu from './components/base/SideMenu/SideMenu';
import HomeScreen from './components/screens/HomeScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ChatScreen from './components/screens/ChatScreen';
import SearchScreen from './components/screens/SearchScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import SignInScreen from './components/screens/SignInScreen';
import AuthScreen from './components/screens/AuthScreen';

const routes = [
  {
    name: 'Home New',
    route: 'Home',
    icon: 'menu',
  },
  {
    name: 'Messages',
    route: 'Chat',
    icon: 'chatboxes',
    badge: {
      text: 'New',
      backgroundColor: '#BE6F50',
    },
  },
  {
    name: 'Search',
    route: 'Search',
    icon: 'people',
  },
];

const AppStack = createDrawerNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Search: SearchScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      routes,
    },
    contentComponent: SideMenu,
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
