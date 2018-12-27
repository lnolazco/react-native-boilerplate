import React from 'react';
import {
  Container,
  Icon,
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
} from 'native-base';

export default ({ navigation, title, children }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon ios="ios-menu" android="md-menu" style={{ fontSize: 20 }} />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
    {children}
  </Container>
);