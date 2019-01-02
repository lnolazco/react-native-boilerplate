import React, { Component } from 'react';
import { Container, Icon } from 'native-base';
import NavHeader from '../base/NavHeader';
import Chat from '../base/Chat/Chat';

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
      <Container>
        <NavHeader title="Chat" />
        <Chat />
      </Container>
    );
  }
}
