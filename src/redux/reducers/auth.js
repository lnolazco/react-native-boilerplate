import { SIGN_IN, LOG_OUT } from '../actions/types';

const initialState = {
  name: '',
  authenticated: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, name: 'Test', authenticated: true };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
