import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ChatScreen from './screens/ChatScreen';
import FlatListScreen from './screens/FlatListScreen';
import ListViewScreen from './screens/ListViewScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

// To customize the menu:
// https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  FlatList: FlatListScreen,
  ListView: ListViewScreen,
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
