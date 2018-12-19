import { ActionType } from '../actions/auth';

const initialState = {
  name: '',
  authenticated: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return { ...state, name: 'Test', authenticated: true };
    case ActionType.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
