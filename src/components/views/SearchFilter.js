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
  Item,
  Input,
} from 'native-base';

import { Field,reduxForm } from 'redux-form';

import Dialog from '../base/Dialog';
import { IconBase } from '../base/Icons';
import Picker from '../base/Pickers/Picker';
// import CountryRegionPicker from '../base/Pickers/CountryRegionPicker';
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

const FormSwitch = ({ input: { onChange, value }, label, icon }) => (
  <ListItem icon>
    <Left>{icon ? icon : null}</Left>
    <Body>
      <Text>{label}</Text>
    </Body>
    <Right>
      <Switch 
        onValueChange={(value) => onChange(value)} 
        value={value} 
      /> 
    </Right>
  </ListItem>
);

const FormPicker = ({ input: { onChange, value }, label, items, icon }) => (
  <Picker label={label} items={items} onValueChange={onChange} selectedValue={value} icon={icon} />
)

const SearchFilter = props => (
  <Dialog
    isOpen={props.isFilterOpen}
    title="Filter"
    onClose={props.onCloseFilter}
    onDone={props.handleSubmit(props.onDoneFilter)}
  >
    <Content>
      <Form>
        <Field name="country" component={FormPicker} props={{ label: 'Country', items: countries }} />
        <Field name="region" component={FormPicker} props={{
          label: regionLabel[props.country] || regionLabelDefault,
          items: regions[props.country] }}
        />
        <Field name="gender" component={FormPicker} props={{
          label: 'Gender',
          items: genders,
          icon: <IconBase active name="airplane" />
        }} />
        <Field name="picture" component={FormSwitch} props={{
          label: 'Profiles with picture',
          icon: <IconBase active name="airplane" />          
        }} />
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

export default reduxForm({
  form: 'searchFilterForm'
})(SearchFilter)