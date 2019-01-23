import React from 'react';
import { Container } from 'native-base';

import AuthContainer from '../../redux/containers/Auth.container';
import LoadingScreen from './LoadingScreen';

const AuthScreen = () => (
  <Container>
    <AuthContainer render={props => <LoadingScreen {...props} />} />
  </Container>
);

export default AuthScreen;
