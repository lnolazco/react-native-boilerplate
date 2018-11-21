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

const AppStack = createDrawerNavigator({ Home: HomeScreen, Chat: ChatScreen, List: ListScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

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
