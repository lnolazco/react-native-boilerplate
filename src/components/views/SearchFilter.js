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
import Picker from '../base/Pickers/Picker';
import CountryRegionPicker from '../base/Pickers/CountryRegionPicker';
import {
  countries,
  regionLabel,
  regionLabelDefault,
  regions,
  genders,
} from '../../config/constants';

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
          countrySelected={props.country}
          countries={countries}
          regionLabel={regionLabel[props.country] || regionLabelDefault}
          regionSelected={props.region}
          regions={regions[props.country]}
          onCountryChange={props.onCountrySelected}
          onRegionChange={props.onRegionSelected}
        />
        <Picker label="Gender testing this" items={genders} />
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
