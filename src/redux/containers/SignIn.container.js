import { connect } from 'react-redux';
import { Linking } from 'react-native';

import { signIn } from '../actions/auth';
import { navigateToForgotPassword } from '../actions/nav';
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
  forgotPassword: () => dispatch(navigateToForgotPassword()),
});

const SignInContainer = props => props.render(props);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
