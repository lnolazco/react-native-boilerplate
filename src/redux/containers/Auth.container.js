import { connect } from 'react-redux';

import { isAuthenticatedSelector } from '../selectors/auth';
import { checkAuthentication } from '../actions/auth';
import { navigateToAuth, navigateToApp } from '../actions/nav';
import LoadingScreen from '../../components/screens/LoadingScreen';

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

export default connect(
  null,
  mapDispatchToProps
)(LoadingScreen);
