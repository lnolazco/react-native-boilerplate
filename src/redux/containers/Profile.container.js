import { connect } from 'react-redux';

import {
  isUserProfileLoadingSelector,
  userProfileSelector,
} from '../selectors/profile';

const mapStateToProps = state => ({
  isLoading: isUserProfileLoadingSelector(state),
  user: userProfileSelector(state),
});

const UserProfileContainer = props => props.render(props);

export default connect(
  mapStateToProps,
  null
)(UserProfileContainer);
