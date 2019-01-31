import React from 'react';
import { Picker, Body, Text, ListItem, Left, Right } from 'native-base';

import { IconBase } from '../Icons';

/*
label
selectedValue
items
onValueChange
 */
export default props => (
  <ListItem icon>
    <Left>{props.icon ? props.icon : null}</Left>
    <Body>
      <Text>{props.label}</Text>
    </Body>
    <Right>
      <Picker
        mode="dropdown"
        iosIcon={<IconBase active name="arrow-forward" />}
        placeholder="Select"
        selectedValue={props.selectedValue}
        onValueChange={value => props.onValueChange(value)}
      >
        {props.items
          ? props.items.map(item => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))
          : null}
      </Picker>
    </Right>
  </ListItem>
);
