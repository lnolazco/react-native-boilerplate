import fetchApi from '../../apis/profile';

export const ActionType = {
  FETCH_REQUESTED: 'PROFILE_FETCH_REQUESTED',
  FETCH_SUCCEED: 'PROFILE_FETCH_SUCCEED',
  FETCH_FAILED: 'PROFILE_FETCH_FAILED',
};

export const fetchProfile = (userId, navigation) => dispatch => {
  dispatch({
    type: ActionType.FETCH_REQUESTED,
  });

  fetchApi(userId)
    .then(response => {
      navigation.navigate('Profile');
      console.log('Profile response', response);

      dispatch({
        type: ActionType.FETCH_SUCCEED,
        payload: response.user,
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
