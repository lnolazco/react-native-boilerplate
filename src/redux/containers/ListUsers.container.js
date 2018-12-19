import { connect } from 'react-redux';

import InfiniteListView from '../../components/List/InfiniteListView/InfiniteListView';
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
  onSelectRow: userId => dispatch(fetchProfile(userId, ownProps.navigation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfiniteListView);
