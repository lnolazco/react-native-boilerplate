import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

import { signIn } from '../actions/auth';
import { navigateToApp, navigateToForgotPassword } from '../actions/nav';
import { SIGNUP_URL } from '../../config/constants';

const mapStateToProps = state => ({
  isLoading: 
  signUpUrl: SIGNUP_URL,
});

const mapDispatchToProps = dispatch => ({
  signIn: (user, password) => {
    dispatch(signIn(user, password));
  },
  forgotPassword : () => dispatch(navigateToForgotPassword()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
