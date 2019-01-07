import fetchApi from '../../apis/profile';
import { navigateToUserProfile } from './nav';

export const ActionType = {
  FETCH_REQUESTED: 'PROFILE_FETCH_REQUESTED',
  FETCH_SUCCEED: 'PROFILE_FETCH_SUCCEED',
  FETCH_MYSELF_SUCCEED: 'FETCH_MYSELF_SUCCEED',
  FETCH_FAILED: 'PROFILE_FETCH_FAILED',
};

export const fetchProfile = userId => dispatch => {
  dispatch({
    type: ActionType.FETCH_REQUESTED,
  });

  fetchApi(userId)
    .then(user => {
      dispatch({
        type:
          userId === 'myself'
            ? ActionType.FETCH_MYSELF_SUCCEED
            : ActionType.FETCH_SUCCEED,
        payload: user,
      });

      dispatch(navigateToUserProfile());
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
  dispatch({
    type: ActionType.FETCH_REQUESTED,
  });

  fetchApi('myself')
    .then(user => {
      dispatch({
        type: ActionType.FETCH_MYSELF_SUCCEED,
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
