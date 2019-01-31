import { ListView } from 'react-native';
import fetchUsersApi from '../../apis/users';
import { searchFilterFormSelector } from '../selectors/searchFilter';
// import { AsyncStorage } from 'react-native';
// import { FILTER_KEY } from '../../config/constants';

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
  status: SearchStatus.NONE,
};

const ActionType = {
  FETCH_REQUESTED: 'FETCH_REQUESTED',
  FETCH_SUCCEED: 'FETCH_SUCCEED',
  FETCH_FAILED: 'FETCH_FAILED',
  FETCH_MORE_REQUESTED: 'FETCH_MORE_REQUESTED',
  FETCH_MORE_SUCCEED: 'FETCH_MORE_SUCCEED',
};

const searchRequestedAction = () => ({
  type: ActionType.FETCH_REQUESTED,
});

const searchMoreRequestedAction = () => ({
  type: ActionType.FETCH_MORE_REQUESTED,
});

const searchSuccedAction = data => ({
  type: ActionType.FETCH_SUCCEED,
  payload: {
    data,
  },
});

const searchMoreSuccedAction = data => ({
  type: ActionType.FETCH_MORE_SUCCEED,
  payload: {
    data,
  },
});

const searchFailedAction = error => ({
  type: ActionType.FETCH_FAILED,
  error,
});

// const openFilterAction = () => (
//   { type: ActionType.OPEN_SEARCH_FILTER }
// );

// const closeFilterAction = () => (
//   { type: ActionType.CLOSE_SEARCH_FILTER }
// );

export default class SearchLogic {
  // action
  static fetchUsers() {
    return async (dispatch, getState) => {
      dispatch(searchRequestedAction());
      const state = getState();
      const filter = searchFilterFormSelector(state) || {};
      const { page } = state.search;

      fetchUsersApi({ ...filter, page })
        .then(data => {
          if (data.error) {
            dispatch(searchFailedAction(data.message));
          } else {
            dispatch(searchSuccedAction(data));
          }
        })
        .catch(error => {
          dispatch(searchFailedAction(error));
        });
    };
  }
  // action
  static fetchMoreUsers() {
    return async (dispatch, getState) => {
      const state = getState();
      const { page, isLoading, isLoadingMore, more } = state.search;
      const filter = searchFilterFormSelector(state);

      console.log(
        'FETCH MORE USERS ',
        'isLoading',
        isLoading,
        'isLoadingMore',
        isLoadingMore,
        'more',
        more
      );

      if (isLoading || isLoadingMore || !more) {
        console.log('Dont load');
        return;
      }

      dispatch(searchMoreRequestedAction());

      fetchUsersApi({ ...filter, page })
        .then(data => {
          if (data.error) {
            dispatch(searchFailedAction(data.message));
          } else {
            dispatch(searchMoreSuccedAction(data));
          }
        })
        .catch(error => {
          dispatch(searchFailedAction(error));
        });
    };
  }

  // reducer
  static reducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.FETCH_REQUESTED:
        return {
          ...initialState,
          isLoading: true,
          status: SearchStatus.REQUEST,
        };
      case ActionType.FETCH_SUCCEED:
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
        const data1 = action.payload.data.users;
        return {
          ...state,
          isLoading: false,
          dataSource: ds.cloneWithRows(data1),
          data: data1,
          more: action.payload.data.more,
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
        const data2 = state.data.concat(action.payload.data.users);
        return {
          ...state,
          isLoadingMore: false,
          dataSource: state.dataSource.cloneWithRows(data2),
          data: data2,
          more: action.payload.data.more,
          status: SearchStatus.SUCCESS,
        };
      default:
        return state;
    }
  }
}
