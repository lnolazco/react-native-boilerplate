import { ActionType } from '../actions/auth';

const initialState = {
  loading: false,
  authenticated: false,
  failed: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.REQUEST_INIT:
      return { ...state, loading: true };
    case ActionType.SIGN_IN:
      return { ...state, loading: false, authenticated: true };
    case ActionType.REQUEST_FAILED:
      return { ...state, loading: false, authenticated: false, failed: true };
    case ActionType.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
