import React, { Component } from 'react';
import { Container, Header, Content, Icon, Button, Text } from 'native-base';

import { iconNames } from '../../config/constants';

export default class IconsScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {
            iconNames.map(iconName => (
           <Button transparent key={`key-${iconName}`}>
              <Icon ios={`ios-${iconName}`} android={`md-${iconName}`} />
              <Text>{iconName}</Text>
            </Button>
            ))
          }
        </Content>
      </Container>
    );
  }
}