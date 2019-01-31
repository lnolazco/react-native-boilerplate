import SearchLogic from './SearchLogic';

// import { ListView } from 'react-native';
// import fetchUsersApi from '../../apis/users';

const initialState = {
  isFilterOpen: false,
  form: {},
};

const ActionType = {
  OPEN_SEARCH_FILTER: 'OPEN_SEARCH_FILTER',
  CLOSE_SEARCH_FILTER: 'CLOSE_SEARCH_FILTER',
  SAVE_SEARCH_FILTER: 'SAVE_SEARCH_FILTER',
};

const openFilterAction = () => ({ type: ActionType.OPEN_SEARCH_FILTER });

const closeFilterAction = () => ({ type: ActionType.CLOSE_SEARCH_FILTER });

const saveFilterAction = values => ({
  type: ActionType.SAVE_SEARCH_FILTER,
  payload: values,
});

export default class SearchFilterLogic {
  // action
  static openFilter() {
    return openFilterAction();
  }
  // action
  static closeFilter() {
    return closeFilterAction();
  }

  static doneFilter(values) {
    console.log('SearchFilterLogic DONE FILTER', values);
    // save filter asyncstorage
    // close filter
    // fetch Search
    return dispatch => {
      dispatch(saveFilterAction(values));
      dispatch(closeFilterAction());
      dispatch(SearchLogic.fetchUsers());
    };
  }

  // reducer
  static reducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.OPEN_SEARCH_FILTER:
        return { ...state, isFilterOpen: true };
      case ActionType.CLOSE_SEARCH_FILTER:
        return { ...state, isFilterOpen: false };
      case ActionType.SAVE_SEARCH_FILTER:
        return { ...state, form: action.payload };
      default:
        return state;
    }
  }
}
