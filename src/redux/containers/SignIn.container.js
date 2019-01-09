import { connect } from 'react-redux';
import { Linking } from 'react-native';

import { signIn, forgotPassword } from '../actions/auth';
import { SIGNUP_URL } from '../../config/constants';
import { isAuthLoadingSelector } from '../selectors/auth';

const mapStateToProps = state => ({
  isLoading: isAuthLoadingSelector(state),
  onSignUp: () => {
    Linking.openURL(SIGNUP_URL);
  },
});

const mapDispatchToProps = dispatch => ({
  onSignIn: (user, password) =>
    dispatch(signIn('plumette@lamethode.com', 'pout1000')),
  forgotPassword: () => dispatch(forgotPassword()),
});

const SignInContainer = props => props.render(props);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
