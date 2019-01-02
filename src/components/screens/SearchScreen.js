import React, { Component } from 'react';
import { Container, Icon } from 'native-base';

import NavHeader from '../base/NavHeader';
// import ScreenWrapper from '../base/ScreenWrapper';
import SearchContainer from '../../redux/containers/Search.container';
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
          render={props => <ListUsersView {...props.results} />}
        />
      </Container>
    );
  }
}
