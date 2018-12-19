export const ActionType = {
  SIGN_IN: 'SIGN_IN',
  LOG_OUT: 'LOG_OUT',
};

export const signIn = () => ({
  type: ActionType.SIGN_IN,
});

export const logOut = () => ({
  type: ActionType.LOG_OUT,
});
