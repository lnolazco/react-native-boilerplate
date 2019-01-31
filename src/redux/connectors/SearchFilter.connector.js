import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import SearchFilterLogic from '../logic/SearchFilterLogic';
import {
  isFilterOpenSelector,
  searchFilterFormSelector,
} from '../selectors/searchFilter';

const mapStateToProps = state => ({
  isFilterOpen: isFilterOpenSelector(state),
  country: formValueSelector('searchFilterForm')(state, 'country'),
  region: formValueSelector('searchFilterForm')(state, 'region'),
  initialValues: searchFilterFormSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onOpenFilter: () => dispatch(SearchFilterLogic.openFilter()),
  onCloseFilter: () => dispatch(SearchFilterLogic.closeFilter()),
  onDoneFilter: values => dispatch(SearchFilterLogic.doneFilter(values)),
});

const SearchFilterConnector = props => props.render(props);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilterConnector);
