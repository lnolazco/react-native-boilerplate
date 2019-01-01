import { ActionType } from '../actions/auth';

const initialState = {
  loading: false,
  authenticated: false,
  failed: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.REQUEST_INIT:
      return { ...initialState, loading: true };
    case ActionType.SIGN_IN:
      return { ...initialState, authenticated: true };
    case ActionType.REQUEST_FAILED:
      return { ...initialState, failed: true };
    case ActionType.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
