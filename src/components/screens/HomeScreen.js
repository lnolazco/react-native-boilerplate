import React from 'react';
import { Container, Icon } from 'native-base';

import HomeContainer from '../../redux/containers/Home.container';
import HomeView from '../views/HomeView';
import NavHeader from '../base/NavHeader';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Icon
        ios="ios-menu"
        android="md-menu"
        style={{ fontSize: 20, color: 'red' }}
      />
    ),
  };

  render() {
    return (
      <Container>
        <NavHeader title="Home" />
        <HomeContainer render={props => <HomeView {...props} />} />
      </Container>
    );
  }
}
