import fetchUsersApi from '../../apis/users';

export const ActionType = {
  FETCH_REQUESTED: 'FETCH_REQUESTED',
  FETCH_SUCCEED: 'FETCH_SUCCEED',
  FETCH_FAILED: 'FETCH_FAILED',
  FETCH_MORE_REQUESTED: 'FETCH_MORE_REQUESTED',
  FETCH_MORE_SUCCEED: 'FETCH_MORE_SUCCEED',
  OPEN_SEARCH_FILTER: 'OPEN_SEARCH_FILTER',
  CLOSE_SEARCH_FILTER: 'CLOSE_SEARCH_FILTER',   
};

export const fetchUsers = () => (dispatch, getState) => {
  const { page } = getState().users;

  dispatch({
    type: ActionType.FETCH_REQUESTED,
  });

  fetchUsersApi(page)
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
};

export const fetchMoreUsers = () => (dispatch, getState) => {
  const { page } = getState().users;

  dispatch({
    type: ActionType.FETCH_MORE_REQUESTED,
  });
  fetchUsersApi(page)
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
};

export const openFilter = () => ({ type: ActionType.OPEN_SEARCH_FILTER });
export const closeFilter = () => ({ type: ActionType.CLOSE_SEARCH_FILTER });
