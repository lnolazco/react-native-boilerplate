import React from 'react';
import { connect } from 'react-redux';

import { isAuthenticatedSelector } from '../selectors/auth';
import { logOut } from '../actions/auth';
import { navigateToChat, navigateToList } from '../actions/nav';

const mapDispatchToProps = dispatch => ({
  onNavigateToChat: () => dispatch(navigateToChat()),
  onNavigateToList: () => dispatch(navigateToList()),
  onNavigateToLogout: () => dispatch(logOut()),
});

const HomeContainer = props => props.render(props);

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
