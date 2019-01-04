import { connect } from 'react-redux';

import { checkAuthentication } from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(checkAuthentication()),
});

const AuthContainer = props => props.render(props);

export default connect(
  null,
  mapDispatchToProps
)(AuthContainer);
