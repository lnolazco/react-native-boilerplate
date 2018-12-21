import React, { Component } from 'react';
import { Icon } from 'native-base';

import ScreenWrapper from '../base/ScreenWrapper';
import ProfileContainer from '../../redux/containers/Profile.container';

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
      <ScreenWrapper title="Profile" navigation={this.props.navigation}>
        <ProfileContainer />
      </ScreenWrapper>
    );
  }
}
