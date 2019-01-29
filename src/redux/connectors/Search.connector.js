import { connect } from 'react-redux';

import SearchLogic from '../logic/SearchLogic';
import { fetchProfile } from '../actions/profile';
import {
  searchIsLoading,
  searchIsLoadingMore,
  searchData,
  filterIsOpen,
  searchStatus,
  countrySelected,
  regionSelected,
} from '../selectors/search';

const mapStateToProps = state => ({
  resultsMapState: {
    isLoading: searchIsLoading(state),
    isLoadingMore: searchIsLoadingMore(state),
    dataSource: searchData(state),
    status: searchStatus(state),
  },
  filterMapState: {
    isFilterOpen: filterIsOpen(state),
    country: countrySelected(state),
    region: regionSelected(state),
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
    onCountrySelected: (value) => dispatch(SearchLogic.onCountrySelected(value)),
    onRegionSelected: (value) => dispatch(SearchLogic.onRegionSelected(value)),
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
