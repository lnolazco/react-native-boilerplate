import React from 'react';
import { Container } from 'native-base';

import AuthContainer from '../../redux/containers/Auth.container';
import LoadingScreen from './LoadingScreen';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <Container>
        <AuthContainer render={props => (<LoadingScreen {...props} />)} />
      </Container>
      );
  }
}
