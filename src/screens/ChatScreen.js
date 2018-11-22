import React, { Component } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Chat from '../components/Chat/Chat';
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
      <ScreenContainer title="Chat" navigation={this.props.navigation}>
        <Chat />
      </ScreenContainer>
    );
  }
}
