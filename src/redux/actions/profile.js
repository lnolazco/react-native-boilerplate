import fetchApi from '../../apis/profile';

export const ActionType = {
  FETCH_REQUESTED: 'PROFILE_FETCH_REQUESTED',
  FETCH_SUCCEED: 'PROFILE_FETCH_SUCCEED',
  FETCH_FAILED: 'PROFILE_FETCH_FAILED',
};

export const fetchProfile = (userId, onSuccess) => dispatch => {
  dispatch({
    type: ActionType.FETCH_REQUESTED,
  });

  fetchApi(userId)
    .then(user => {
      onSuccess();

      dispatch({
        type: ActionType.FETCH_SUCCEED,
        payload: user,
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

export const fetchMyUserProfile = () => dispatch => {
  
}