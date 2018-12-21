import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
import SignInScreen from './components/screens/SignInScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ChatScreen from './components/screens/ChatScreen';
import FlatListScreen from './components/screens/FlatListScreen';
import ListViewScreen from './components/screens/ListViewScreen';
import AuthLoadingScreen from './components/screens/AuthLoadingScreen';
import ProfileScreen from './components/screens/ProfileScreen';

// To customize the menu:
// https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  FlatList: FlatListScreen,
  ListView: ListViewScreen,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

export default createAppContainer(
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
