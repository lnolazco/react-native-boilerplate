import { connect } from 'react-redux';

import { fetchUsers, fetchMoreUsers } from '../actions/users';
import { fetchProfile } from '../actions/profile';
import { navigateToUserProfile } from '../actions/nav';

const mapStateToProps = state => ({
  resultsMapState: {
    isLoading: state.users.isLoading,
    isLoadingMore: state.users.isLoadingMore,
    dataSource: state.users.dataSource,
  },
});

const mapDispatchToProps = dispatch => ({
  resultsMapDispatch: {
    onLoad: () => dispatch(fetchUsers()),
    onEndReached: () => dispatch(fetchMoreUsers()),
    onSelectRow: userId =>
      dispatch(fetchProfile(userId, () => dispatch(navigateToUserProfile()))),
  },
});

const SearchContainer = props =>
  props.render({
    results: { ...props.resultsMapState, ...props.resultsMapDispatch },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
