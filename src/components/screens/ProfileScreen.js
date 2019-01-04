import React, { Component } from 'react';
import { Container, Icon } from 'native-base';

import NavHeader from '../base/NavHeader';
import ProfileContainer from '../../redux/containers/Profile.container';
import ProfileView from '../views/ProfileView';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: () => (
      <Icon
        ios="ios-chatbubbles"
        android="chat"
        style={{ fontSize: 20, color: 'red' }}
      />
    ),
  };

  render() {
    return (
      <Container>
        <NavHeader title="Profile" backButton={true} />
        <ProfileContainer render={props => <ProfileView {...props} />} />
      </Container>
    );
  }
}
