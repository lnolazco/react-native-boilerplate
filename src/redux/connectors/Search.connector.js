import { connect } from 'react-redux';

import SearchLogic from '../logic/SearchLogic';
import SearchFilterLogic from '../logic/SearchFilterLogic';
import { fetchProfile } from '../actions/profile';
import {
  searchIsLoading,
  searchIsLoadingMore,
  searchData,
  searchStatus,
} from '../selectors/search';

const mapStateToProps = state => ({
  resultsMapState: {
    isLoading: searchIsLoading(state),
    isLoadingMore: searchIsLoadingMore(state),
    dataSource: searchData(state),
    status: searchStatus(state),
  },
});

const mapDispatchToProps = dispatch => ({
  resultsMapDispatch: {
    onLoad: () => dispatch(SearchLogic.fetchUsers()),
    onEndReached: () => dispatch(SearchLogic.fetchMoreUsers()),
    onSelectRow: userId => dispatch(fetchProfile(userId)),
  },
  filterMapDispatch: {
    onOpenFilter: () => dispatch(SearchFilterLogic.openFilter()),
  },
});

const SearchContainer = props =>
  props.render({
    results: { ...props.resultsMapState, ...props.resultsMapDispatch },
    filter: props.filterMapDispatch,
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
