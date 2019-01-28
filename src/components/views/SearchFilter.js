import React from 'react';

import {
  Button,
  Content,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';

import Dialog from '../base/Dialog';

const SearchFilter = props => (
  <Dialog
    isOpen={props.isFilterOpen}
    title="Filter"
    onClose={props.onCloseFilter}
  >
    <Content>
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: '#FF9501' }}>
            <Icon active name="airplane" />
          </Button>
        </Left>
        <Body>
          <Text>Airplane Mode</Text>
        </Body>
        <Right>
          <Switch value={false} />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: '#007AFF' }}>
            <Icon active name="wifi" />
          </Button>
        </Left>
        <Body>
          <Text>Wi-Fi</Text>
        </Body>
        <Right>
          <Text>GeekyAnts</Text>
          <Icon active name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: '#007AFF' }}>
            <Icon active name="bluetooth" />
          </Button>
        </Left>
        <Body>
          <Text>Bluetooth</Text>
        </Body>
        <Right>
          <Text>On</Text>
          <Icon active name="arrow-forward" />
        </Right>
      </ListItem>
    </Content>
  </Dialog>
);

export default SearchFilter;
