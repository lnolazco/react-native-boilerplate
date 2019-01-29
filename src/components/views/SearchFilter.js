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
  Form,
} from 'native-base';

import Dialog from '../base/Dialog';
import { IconBase } from '../base/Icons';
import CountryRegionPicker from './CountryRegionPicker';

/*
isFilterOpen
onCloseFilter

country
region

 */
const SearchFilter = props => (
  <Dialog
    isOpen={props.isFilterOpen}
    title="Filter"
    onClose={props.onCloseFilter}
  >
    <Content>
      <Form>
        <CountryRegionPicker
          country={props.country}
          region={props.region}
          onCountrySelected={props.onCountrySelected}
          onRegionSelected={props.onRegionSelected}
        />
      </Form>
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: '#FF9501' }}>
            <IconBase active name="airplane" />
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
