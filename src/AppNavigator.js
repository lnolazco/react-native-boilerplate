import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ChatScreen from './components/screens/ChatScreen';
import SearchScreen from './components/screens/SearchScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import SignInScreen from './components/screens/SignInScreen';
import AuthScreen from './components/screens/AuthScreen';

// To customize the menu:
// https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  Search: SearchScreen,
  Profile: ProfileScreen,
});

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
