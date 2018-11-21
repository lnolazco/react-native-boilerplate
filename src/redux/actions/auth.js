import { SIGN_IN, LOG_OUT } from './types';

export const signIn = () => ({
  type: SIGN_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});
