import React, { Component } from 'react';
import ScreenWrapper from '../base/ScreenWrapper';
import Chat from '../base/Chat/Chat';
import { Icon } from 'native-base';

export default class ChatScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Chat',
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
      <ScreenWrapper title="Chat" navigation={this.props.navigation}>
        <Chat />
      </ScreenWrapper>
    );
  }
}
