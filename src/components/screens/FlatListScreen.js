import React, { Component } from 'react';
import ScreenWrapper from '../base/ScreenWrapper';
import InfiniteFlatList from '../base/List/InfiniteFlatList';
import { Icon } from 'native-base';

export default class ListScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Flat List',
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
        title="Infinite Flat List"
        navigation={this.props.navigation}
      >
        <InfiniteFlatList />
      </ScreenWrapper>
    );
  }
}
