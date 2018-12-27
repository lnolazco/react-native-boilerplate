import { fetchSignIn, fetchLogOut } from '../../apis/auth';
import { AUTH_USER_KEY } from '../../config/constants';
import { AsyncStorage } from 'react-native';

export const ActionType = {
  SIGN_IN: 'SIGN_IN',
  LOG_OUT: 'LOG_OUT',
};

export const signIn = (email, password) => async dispatch => {
  const response = await fetchSignIn(email, password);

  await AsyncStorage.setItem(AUTH_USER_KEY, response.token);

  dispatch({ type: ActionType.SIGN_IN });
};

export const logOut = () => async dispatch => {
  await AsyncStorage.removeItem(AUTH_USER_KEY);

  await fetchLogOut();

  dispatch({ type: ActionType.LOG_OUT });
};

export const checkAuthentication = () => async dispatch => {
  const token = await AsyncStorage.getItem(AUTH_USER_KEY);

  const action = {
    type: token !== null ? ActionType.SIGN_IN : ActionType.LOG_OUT,
  };
  dispatch(action);
};
