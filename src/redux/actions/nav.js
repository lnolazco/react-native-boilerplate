export const ActionType = {
  NAV_AUTH: 'NAV_AUTH',
  NAV_LOGIN: 'NAV_LOGIN',
  NAV_LOGOUT: 'NAV_LOGOUT',
  NAV_FORGOTPASSWORD: 'NAV_FORGOTPASSWORD',
  NAV_APP: 'NAV_APP',
  NAV_HOME: 'NAV_HOME',
  NAV_CHAT: 'NAV_CHAT',
  NAV_LIST: 'NAV_LIST',
  NAV_USERPROFILE: 'NAV_USERPROFILE',
};

export const navigateToAuth = () => ({
  type: ActionType.NAV_AUTH,
});

export const navigateToApp = () => ({
  type: ActionType.NAV_APP,
});

export const navigateToLogin = () => ({
  type: ActionType.NAV_LOGIN,
});

export const navigateToLogout = () => ({
  type: ActionType.NAV_LOGOUT,
});

export const navigateToForgotPassword = () => ({
  type: ActionType.NAV_FORGOTPASSWORD,
});

export const navigateToHome = () => ({
  type: ActionType.NAV_HOME,
});

export const navigateToChat = () => ({
  type: ActionType.NAV_CHAT,
});

export const navigateToList = () => ({
  type: ActionType.NAV_LIST,
});

export const navigateToUserProfile = () => ({
  type: ActionType.NAV_USERPROFILE,
});
