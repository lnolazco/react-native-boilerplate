import { ActionType } from '../actions/profile';

const initialState = {
  isLoading: false,
  data: null,
  myselfData: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.FETCH_REQUESTED:
      return { ...state, isLoading: true };
    case ActionType.FETCH_SUCCEED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ActionType.FETCH_MYSELF_SUCCEED:
      return {
        ...state,
        isLoading: false,
        myselfData: action.payload,
      };
    case ActionType.FETCH_FAILED:
      return initialState;
    default:
      return state;
  }
}
