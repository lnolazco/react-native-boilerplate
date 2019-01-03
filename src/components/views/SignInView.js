import React from 'react';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

export default class SignInScreen extends React.Component {
  render() {
    return (
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
    );
  }
}
