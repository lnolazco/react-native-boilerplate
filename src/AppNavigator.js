import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
// import SignInScreen from './components/screens/SignInScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ChatScreen from './components/screens/ChatScreen';
import ListViewScreen from './components/screens/ListViewScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import AuthContainer from './redux/containers/Auth.container';
import SignInContainer from './redux/containers/SignIn.container';

// To customize the menu:
// https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  ListView: ListViewScreen,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  SignIn: SignInContainer,
  ForgotPassword: ForgotPasswordScreen,
});

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthContainer,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default AppNavigator;
