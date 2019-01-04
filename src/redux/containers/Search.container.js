import { connect } from 'react-redux';

import {
  fetchUsers,
  fetchMoreUsers,
  openFilter,
  closeFilter,
} from '../actions/users';
import { fetchProfile } from '../actions/profile';

const mapStateToProps = state => ({
  resultsMapState: {
    isLoading: state.users.isLoading,
    isLoadingMore: state.users.isLoadingMore,
    dataSource: state.users.dataSource,
  },
  filterMapState: {
    isFilterOpen: state.users.isFilterOpen,
  },
});

const mapDispatchToProps = dispatch => ({
  resultsMapDispatch: {
    onLoad: () => dispatch(fetchUsers()),
    onEndReached: () => dispatch(fetchMoreUsers()),
    onSelectRow: userId => dispatch(fetchProfile(userId)),
  },
  filterMapDispatch: {
    onOpenFilter: () => dispatch(openFilter()),
    onCloseFilter: () => dispatch(closeFilter()),
  },
});

const SearchContainer = props =>
  props.render({
    results: { ...props.resultsMapState, ...props.resultsMapDispatch },
    filter: { ...props.filterMapState, ...props.filterMapDispatch },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
