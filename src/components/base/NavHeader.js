import React from 'react';
import { Icon, Header, Left, Button, Body, Title, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

const NavHeader = ({ navigation, title, backButton, buttonsRight }) => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() =>
          backButton ? navigation.goBack() : navigation.openDrawer()
        }
      >
        {backButton ? (
          <Icon
            ios="ios-arrow-back"
            android="md-arrow-back"
            style={{ fontSize: 20 }}
          />
        ) : (
          <Icon ios="ios-menu" android="md-menu" style={{ fontSize: 20 }} />
        )}
      </Button>
    </Left>

    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>{buttonsRight ? buttonsRight : null}</Right>
  </Header>
);

export default withNavigation(NavHeader);
