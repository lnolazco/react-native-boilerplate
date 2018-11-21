import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home drawer',
    drawerIcon: () => (
      <Icon
        ios="ios-menu"
        android="md-menu"
        style={{ fontSize: 20, color: 'red' }}
      />
    ),
  };

  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon ios="ios-menu" android="md-menu" style={{ fontSize: 20 }} />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
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
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('List')}
          >
            <Text>Goto List</Text>
          </Button>
          <Button full rounded style={{ marginTop: 10 }} onPress={this.signOut}>
            <Text>Log out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
