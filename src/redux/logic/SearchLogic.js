import { ListView } from 'react-native';
import fetchUsersApi from '../../apis/users';

const initialState = {
  isLoading: true,
  isLoadingMore: false,
  dataSource: null,
  data: null,
  page: 1,
  isFilterOpen: false,
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

export default class SearchLogic {
  static fetchUsers() {
    return (dispatch, getState) => {
      const { page } = getState().search;

      dispatch({
        type: ActionType.FETCH_REQUESTED,
      });

      fetchUsersApi({ page })
        .then(users => {
          dispatch({
            type: ActionType.FETCH_SUCCEED,
            payload: {
              data: users,
            },
          });
        })
        .catch(error => {
          console.error(error);
          dispatch({
            type: ActionType.FETCH_FAILED,
            error,
          });
        });
    }
  };

  static fetchMoreUsers() {
    return (dispatch, getState) => {
      const { page } = getState().search;

      dispatch({
        type: ActionType.FETCH_MORE_REQUESTED,
      });
      fetchUsersApi({ page })
        .then(users => {
          dispatch({
            type: ActionType.FETCH_MORE_SUCCEED,
            payload: {
              data: users,
            },
          });
        })
        .catch(error => {
          console.error(error);
          dispatch({
            type: ActionType.FETCH_FAILED,
            error,
          });
        });
    }
  };

  static openFilter() { return ({ type: ActionType.OPEN_SEARCH_FILTER }) };
  static closeFilter() { return ({ type: ActionType.CLOSE_SEARCH_FILTER }) };

  static reducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.FETCH_REQUESTED:
        return { ...state, isLoading: true };
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
        };
      case ActionType.FETCH_FAILED:
        return { ...state, isLoading: false, isLoadingMore: false };
      case ActionType.FETCH_MORE_REQUESTED:
        return {
          ...state,
          isLoadingMore: true,
          page: state.page + 1,
        };
      case ActionType.FETCH_MORE_SUCCEED:
        const data2 = state.data.concat(action.payload.data);
        return {
          ...state,
          isLoadingMore: false,
          dataSource: state.dataSource.cloneWithRows(data2),
          data: data2,
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
