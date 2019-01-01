import { AsyncStorage } from 'react-native';
import { fetchSignIn, fetchLogOut } from '../../apis/auth';
import { AUTH_USER_KEY } from '../../config/constants';
import { navigateToApp, navigateToLogin } from './nav';

export const ActionType = {
  REQUEST_INIT: 'REQUEST_INIT',
  REQUEST_FAILED: 'REQUEST_FAILED',
  SIGN_IN: 'SIGN_IN',
  LOG_OUT: 'LOG_OUT',
};

export const signIn = (email, password) => async dispatch => {
  dispatch({ type: ActionType.REQUEST_INIT });

  const response = await fetchSignIn(email, password);
  if (response.err) {
    return dispatch({ type: ActionType.REQUEST_FAILED });
  }

  await AsyncStorage.setItem(AUTH_USER_KEY, response.token);

  dispatch({ type: ActionType.SIGN_IN });

  dispatch(navigateToApp());
};

export const logOut = () => async dispatch => {
  await AsyncStorage.removeItem(AUTH_USER_KEY);

  await fetchLogOut();

  dispatch({ type: ActionType.LOG_OUT });

  dispatch(navigateToLogin());
};

export const checkAuthentication = () => async dispatch => {
  dispatch({ type: ActionType.REQUEST_INIT });
  
  const token = await AsyncStorage.getItem(AUTH_USER_KEY);

  const action = {
    type: token !== null ? ActionType.SIGN_IN : ActionType.LOG_OUT,
  };
  dispatch(action);
};
