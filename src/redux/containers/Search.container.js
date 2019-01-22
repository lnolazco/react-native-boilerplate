import { connect } from 'react-redux';

// import {
//   fetchUsers,
//   fetchMoreUsers,
//   openFilter,
//   closeFilter,
// } from '../actions/users';
import SearchLogic from '../logic/SearchLogic';
import { fetchProfile } from '../actions/profile';

const mapStateToProps = state => ({
  resultsMapState: {
    isLoading: state.search.isLoading,
    isLoadingMore: state.search.isLoadingMore,
    dataSource: state.search.dataSource,
  },
  filterMapState: {
    isFilterOpen: state.search.isFilterOpen,
  },
});

const mapDispatchToProps = dispatch => ({
  resultsMapDispatch: {
    onLoad: () => dispatch(SearchLogic.fetchUsers()),
    onEndReached: () => dispatch(SearchLogic.fetchMoreUsers()),
    onSelectRow: userId => dispatch(fetchProfile(userId)),
  },
  filterMapDispatch: {
    onOpenFilter: () => dispatch(SearchLogic.openFilter()),
    onCloseFilter: () => dispatch(SearchLogic.closeFilter()),
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
