import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Icon } from 'native-base';

import NavHeader from '../base/NavHeader';
import SearchContainer from '../../redux/containers/Search.container';
import UsersFilter from '../base/UsersFilter';
import ListUsersView from '../views/ListUsersView';

export default class SearchScreen extends Component {
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
      <Container>
        <NavHeader title="Search" />
        <SearchContainer
          render={props => (
            <View>
              <UsersFilter {...props.filter} />
              <ListUsersView {...props.results} />
            </View>
          )}
        />
      </Container>
    );
  }
}
