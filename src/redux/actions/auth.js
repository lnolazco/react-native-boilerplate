import { AsyncStorage } from 'react-native';
import { fetchSignIn, fetchLogOut } from '../../apis/auth';
import { AUTH_USER_KEY } from '../../config/constants';
import { navigateToApp, navigateToLogin } from './nav';
import { fetchMyUserProfile } from './profile';

export const ActionType = {
  REQUEST_INIT: 'REQUEST_INIT',
  REQUEST_FAILED: 'REQUEST_FAILED',
  SIGN_IN: 'SIGN_IN',
  LOG_OUT: 'LOG_OUT',
};

const authRequestInitAction = () => ({ type: ActionType.REQUEST_INIT });
const authFailedAction = () => ({ type: ActionType.REQUEST_FAILED });
const authSignedInAction = () => ({ type: ActionType.SIGN_IN });
const authLogOutAction = () => ({ type: ActionType.LOG_OUT });

export const signIn = (email, password) => async dispatch => {
  dispatch(authRequestInitAction());

  const response = await fetchSignIn(email, password);
  if (response.err) {
    return dispatch(authFailedAction());
  }

  await AsyncStorage.setItem(AUTH_USER_KEY, response.token);

  dispatch(authSignedInAction());

  dispatch(navigateToApp());
};

export const logOut = () => async dispatch => {
  await fetchLogOut();

  await AsyncStorage.removeItem(AUTH_USER_KEY);

  dispatch(authLogOutAction());

  dispatch(navigateToLogin());
};

export const checkAuthentication = () => async dispatch => {
  dispatch(authRequestInitAction());

  const token = await AsyncStorage.getItem(AUTH_USER_KEY);

  if (token !== null) {
    dispatch(authSignedInAction());
    dispatch(fetchMyUserProfile());
    return dispatch(navigateToApp());
  }
  dispatch(authLogOutAction());
  return dispatch(navigateToLogin());
};
