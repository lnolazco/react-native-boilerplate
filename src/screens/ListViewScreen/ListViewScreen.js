import React, { Component } from 'react';
import { Icon } from 'native-base';

import ScreenContainer from '../../components/ScreenContainer';
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
      <ScreenContainer
        title="Infinite List View"
        navigation={this.props.navigation}
      >
        <ListUsersContainer navigation={this.props.navigation} />
      </ScreenContainer>
    );
  }
}
