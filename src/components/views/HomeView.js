import React from 'react';
import { Button, Body, Content, Text, Card, CardItem } from 'native-base';

export default props => (
  <Content padder>
    <Card>
      <CardItem>
        <Body>
          <Text>Chat App to talk some awesome people!</Text>
        </Body>
      </CardItem>
    </Card>
    <Button
      full
      rounded
      dark
      style={{ marginTop: 10 }}
      onPress={props.onNavigateToChat}
    >
      <Text>Chat With People</Text>
    </Button>
    <Button
      full
      rounded
      primary
      style={{ marginTop: 10 }}
      onPress={props.onNavigateToSearch}
    >
      <Text>Goto List</Text>
    </Button>
    <Button
      full
      rounded
      style={{ marginTop: 10 }}
      onPress={props.onNavigateToLogout}
    >
      <Text>Log out</Text>
    </Button>
    <Card>
      <CardItem header button>
        <Text>{props.user.title}</Text>
      </CardItem>
    </Card>
  </Content>
);
