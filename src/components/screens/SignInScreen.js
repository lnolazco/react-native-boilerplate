import React from 'react';
import { AsyncStorage, Linking } from 'react-native';
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

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  signIn = async () => {
    await AsyncStorage.setItem('auth-user-key', 'abc');
    this.props.navigation.navigate('App');
  };

  signUp = () => {
    const url = 'https://www.mignonne.com/inscription.php';
    Linking.openURL(url);
  };

  forgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  render() {
    return (
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
              onPress={this.signIn}
            >
              <Text>Sign in</Text>
            </Button>
            <Button full light style={{ marginTop: 10 }} onPress={this.signUp}>
              <Text>Sign up</Text>
            </Button>
            <Button
              transparent
              full
              style={{ marginTop: 10 }}
              onPress={this.forgotPassword}
            >
              <Text>Forgot password</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
