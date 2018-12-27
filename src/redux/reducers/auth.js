import { ActionType } from '../actions/auth';

const initialState = {
  authenticated: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return { ...state, authenticated: true };
    case ActionType.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
