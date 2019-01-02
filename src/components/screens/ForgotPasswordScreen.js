import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import NavHeader from '../base/NavHeader';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Forgot password',
  };

  send = () => {
    // call action
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <Container>
        <NavHeader title="Forgot password" />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Button full primary style={{ marginTop: 10 }} onPress={this.send}>
              <Text>Send</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
