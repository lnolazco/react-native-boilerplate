import React from 'react';
import { Container } from 'native-base';

import SignInContainer from '../../redux/containers/SignIn.container';
import SignInView from '../views/SignInView';
import LoadingScreen from './LoadingScreen';

const SignInScreen = () => (
  <Container>
    <SignInContainer
      render={props =>
        props.isLoading ? <LoadingScreen /> : <SignInView {...props} />
      }
    />
  </Container>
);

export default SignInScreen;
