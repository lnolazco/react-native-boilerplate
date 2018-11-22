import React, { Component } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import InfiniteFlatList from '../components/List/InfiniteFlatList';
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
      <ScreenContainer
        title="Infinite Flat List"
        navigation={this.props.navigation}
      >
        <InfiniteFlatList />
      </ScreenContainer>
    );
  }
}
