import React from 'react';
import { Icon } from 'native-base';

import HomeContainer from '../../redux/containers/Home.container';
import HomeView from '../views/HomeView';
import ScreenWrapper from '../base/ScreenWrapper';

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
      <ScreenWrapper title="Home" navigation={this.props.navigation}>
        <HomeContainer render={
          (props) => (
            <HomeView {...props} />
          )
        } />
      </ScreenWrapper>
    );
  }
};
