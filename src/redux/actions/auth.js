import { fetchSignIn, fetchLogOut } from '../../apis/auth';
import { AUTH_USER_KEY } from '../../config/constants';
import { AsyncStorage } from 'react-native';

export const ActionType = {
  SIGN_IN: 'SIGN_IN',
  LOG_OUT: 'LOG_OUT',
};

export const signIn = (email, password) => async (dispatch) => {
  const response = await fetchSignIn(email, password);

  await AsyncStorage.setItem(AUTH_USER_KEY, response.token);

  dispatch({ type: ActionType.SIGN_IN });
}

export const logOut = () => async (dispatch) => {
  await AsyncStorage.removeItem(AUTH_USER_KEY);

  dispatch({ type: ActionType.LOG_OUT });
};
