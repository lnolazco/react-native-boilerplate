import { NavigationActions } from 'react-navigation';

import { ActionType } from '../actions/nav';
import AppNavigator from '../../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

const navigate = (props, state) =>
  AppNavigator.router.getStateForAction(
    NavigationActions.navigate(props),
    state
  );

export default function nav(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case ActionType.NAV_AUTH:
      nextState = navigate({ routeName: 'Auth' }, state);
      break;
    case ActionType.NAV_APP:
      nextState = navigate({ routeName: 'App' }, state);
      break;
    case ActionType.NAV_LOGIN:
      nextState = navigate({ routeName: 'SignIn' }, state);
      break;
    case ActionType.NAV_LOGOUT:
      nextState = navigate({ routeName: 'AuthLoading' }, state);
      break;
    case ActionType.NAV_FORGOTPASSWORD:
      nextState = navigate({ routeName: 'ForgotPassword' }, state);
      break;
    case ActionType.NAV_HOME:
      nextState = navigate({ routeName: 'Home' }, state);
      break;
    case ActionType.NAV_CHAT:
      nextState = navigate({ routeName: 'Chat' }, state);
      break;
    case ActionType.NAV_SEARCH:
      nextState = navigate({ routeName: 'Search' }, state);
      break;
    case ActionType.NAV_USERPROFILE:
      nextState = navigate({ routeName: 'Profile' }, state);
      break;
    case ActionType.NAV_TO:
      nextState = navigate({ routeName: action.payload.route }, state);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
