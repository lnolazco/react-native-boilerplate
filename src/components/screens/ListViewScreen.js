import React, { Component } from 'react';
import { Icon } from 'native-base';

import ScreenWrapper from '../base/ScreenWrapper';
import ListUsersContainer from '../../redux/containers/ListUsers.container';

export default class ListScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'List View',
    drawerIcon: () => (
      <Icon
        ios="ios-people"
        android="md-people"
        style={{ fontSize: 20, color: 'red' }}
      />
    ),
  };

  render() {
    return (
      <ScreenWrapper
        title="Infinite List View"
        navigation={this.props.navigation}
      >
        <ListUsersContainer navigation={this.props.navigation} />
      </ScreenWrapper>
    );
  }
}
