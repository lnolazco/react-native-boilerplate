import React from 'react';
import { Container } from 'native-base';

import SignInContainer from '../../redux/containers/SignIn.container';
import SignInView from '../views/SignInView';
import NavHeader from '../base/NavHeader';
import LoadingScreen from './LoadingScreen';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <Container>
        <SignInContainer render={props => 
          props.isLoading
          ? <LoadingScreen />
          : <SignInView {...props} />
        } />
      </Container>
    );
  }
}
