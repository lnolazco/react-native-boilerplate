import React from 'react';
import { Container } from 'native-base';
import NavHeader from '../base/NavHeader';
import Chat from '../base/Chat/Chat';

const ChatScreen = () => (
  <Container>
    <NavHeader title="Chat" />
    <Chat />
  </Container>
);

export default ChatScreen;
