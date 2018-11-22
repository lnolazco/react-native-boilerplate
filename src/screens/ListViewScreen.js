import React, { Component } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import InfiniteListView from '../components/List/InfiniteListView';
import { Icon } from 'native-base';

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
        <InfiniteListView />
      </ScreenContainer>
    );
  }
}
