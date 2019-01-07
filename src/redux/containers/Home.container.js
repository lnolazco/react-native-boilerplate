import { connect } from 'react-redux';

import { logOut } from '../actions/auth';
import { navigateToChat, navigateToSearch } from '../actions/nav';
import {
  isUserProfileLoadingSelector,
  myselfProfileSelector,
} from '../selectors/profile';

const mapStateToProps = state => ({
  isLoading: isUserProfileLoadingSelector(state),
  user: myselfProfileSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onNavigateToChat: () => dispatch(navigateToChat()),
  onNavigateToSearch: () => dispatch(navigateToSearch()),
  onNavigateToLogout: () => dispatch(logOut()),
});

const HomeContainer = props => props.render(props);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
