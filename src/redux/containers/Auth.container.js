import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

import { isAuthenticatedSelector } from '../selectors/auth';
import { checkAuthentication } from '../actions/auth';
import { navigateToAuth, navigateToApp } from '../actions/nav';

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch((_, getState) => {
      dispatch(checkAuthentication()).then(() => {
        const state = getState();

        isAuthenticated = isAuthenticatedSelector(state);

        dispatch(isAuthenticated ? navigateToApp() : navigateToAuth());
      });
    });
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    props.onLoad();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AuthContainer);
