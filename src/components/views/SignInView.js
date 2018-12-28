import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return this.props.isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    ) : (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Button
              full
              primary
              style={{ marginTop: 10 }}
              onPress={this.props.onSignIn}
            >
              <Text>Sign in</Text>
            </Button>
            <Button
              full
              light
              style={{ marginTop: 10 }}
              onPress={this.props.onSignUp}
            >
              <Text>Sign up</Text>
            </Button>
            <Button
              transparent
              full
              style={{ marginTop: 10 }}
              onPress={this.props.onForgotPassword}
            >
              <Text>Forgot password</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
