import { connect } from 'react-redux';
import { navigateTo } from '../actions/nav';
import { routes } from '../../config/constants';

const mapStateToProps = state => ({
  routes,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(navigateTo(route)),
});

const SideMenuConnector = props => props.render(props);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuConnector);
