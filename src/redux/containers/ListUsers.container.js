import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import ListUsersView from '../../components/views/ListUsersView';
import { fetchUsers, fetchMoreUsers } from '../actions/users';
import { fetchProfile } from '../actions/profile';

const mapStateToProps = state => ({
  isLoading: state.users.isLoading,
  isLoadingMore: state.users.isLoadingMore,
  dataSource: state.users.dataSource,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: () => dispatch(fetchUsers()),
  onEndReached: () => dispatch(fetchMoreUsers()),
  openProfile: (userId, onSuccess) => dispatch(fetchProfile(userId, onSuccess)),
});

class ListUsersContainer extends React.Component {
  onSelectRow = userId => {
    this.props.openProfile(userId, () => {
      this.props.navigation.navigate('Profile');
    });
  }
  render() {
    return (<ListUsersView {...this.props} onSelectRow={this.onSelectRow} />)
  }
}

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsersContainer));
