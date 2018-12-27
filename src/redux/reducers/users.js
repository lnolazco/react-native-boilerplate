import { ListView } from 'react-native';
import { ActionType } from '../actions/users';

const initialState = {
  isLoading: true,
  isLoadingMore: false,
  dataSource: null,
  data: null,
  page: 1,
};

export default function(state = initialState, action) {
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
    default:
      return state;
  }
}
