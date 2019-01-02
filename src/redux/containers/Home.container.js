import { connect } from 'react-redux';

import { logOut } from '../actions/auth';
import { navigateToChat, navigateToSearch } from '../actions/nav';

const mapDispatchToProps = dispatch => ({
  onNavigateToChat: () => dispatch(navigateToChat()),
  onNavigateToSearch: () => dispatch(navigateToSearch()),
  onNavigateToLogout: () => dispatch(logOut()),
});

const HomeContainer = props => props.render(props);

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
