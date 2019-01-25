import { ListView } from 'react-native';
import fetchUsersApi from '../../apis/users';

const SearchStatus = {
  NONE: 'NONE',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

const initialState = {
  isLoading: true,
  isLoadingMore: false,
  dataSource: null,
  data: null,
  page: 1,
  isFilterOpen: false,
  status: SearchStatus.NONE,
};

const ActionType = {
  FETCH_REQUESTED: 'FETCH_REQUESTED',
  FETCH_SUCCEED: 'FETCH_SUCCEED',
  FETCH_FAILED: 'FETCH_FAILED',
  FETCH_MORE_REQUESTED: 'FETCH_MORE_REQUESTED',
  FETCH_MORE_SUCCEED: 'FETCH_MORE_SUCCEED',
  OPEN_SEARCH_FILTER: 'OPEN_SEARCH_FILTER',
  CLOSE_SEARCH_FILTER: 'CLOSE_SEARCH_FILTER',
};

const searchRequestedAction = () => ({
  type: ActionType.FETCH_REQUESTED,
});

const searchMoreRequestedAction = () => ({
  type: ActionType.FETCH_MORE_REQUESTED,
});

const searchSuccedAction = users => ({
  type: ActionType.FETCH_SUCCEED,
  payload: {
    data: users,
  },
});

const searchMoreSuccedAction = users => ({
  type: ActionType.FETCH_MORE_SUCCEED,
  payload: {
    data: users,
  },
});

const searchFailedAction = error => ({
  type: ActionType.FETCH_FAILED,
  error,
});

export default class SearchLogic {
  // action
  static fetchUsers() {
    return (dispatch, getState) => {
      const { page } = getState().search;

      dispatch(searchRequestedAction());

      fetchUsersApi({ page })
        .then(users => {
          dispatch(searchSuccedAction(users));
        })
        .catch(error => {
          dispatch(searchFailedAction(error));
        });
    };
  }
  // action
  static fetchMoreUsers() {
    return (dispatch, getState) => {
      const state = getState();
      const { page, status } = state.search;

      if (status === SearchStatus.REQUEST) {
        return;
      }

      dispatch(searchMoreRequestedAction());
      fetchUsersApi({ page })
        .then(users => {
          dispatch(searchMoreSuccedAction(users));
        })
        .catch(error => {
          dispatch(searchFailedAction(error));
        });
    };
  }

  // action
  static openFilter() {
    return { type: ActionType.OPEN_SEARCH_FILTER };
  }
  // action
  static closeFilter() {
    return { type: ActionType.CLOSE_SEARCH_FILTER };
  }

  // reducer
  static reducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.FETCH_REQUESTED:
        return { ...state, isLoading: true, status: SearchStatus.REQUEST };
      case ActionType.FETCH_SUCCEED:
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
        const data1 = action.payload.data;
        return {
          ...state,
          isLoading: false,
          dataSource: ds.cloneWithRows(data1),
          data: data1,
          page: 2,
          status: SearchStatus.SUCCESS,
        };
      case ActionType.FETCH_FAILED:
        return {
          ...state,
          isLoading: false,
          isLoadingMore: false,
          status: SearchStatus.FAILED,
        };
      case ActionType.FETCH_MORE_REQUESTED:
        return {
          ...state,
          isLoadingMore: true,
          page: state.page + 1,
          status: SearchStatus.REQUEST,
        };
      case ActionType.FETCH_MORE_SUCCEED:
        const data2 = state.data.concat(action.payload.data);
        return {
          ...state,
          isLoadingMore: false,
          dataSource: state.dataSource.cloneWithRows(data2),
          data: data2,
          status: SearchStatus.SUCCESS,
        };
      case ActionType.OPEN_SEARCH_FILTER:
        return { ...state, isFilterOpen: true };
      case ActionType.CLOSE_SEARCH_FILTER:
        return { ...state, isFilterOpen: false };
      default:
        return state;
    }
  }
}
