import React from 'react';
import { Picker, Body, Text, ListItem, Right } from 'native-base';

import { IconBase } from '../Icons';

/*
label
selectedValue
items
onValueChange
 */
export default props => (
  <ListItem icon>
    <Body>
      <Text>{props.label}</Text>
    </Body>
    <Right>
      <Picker
        mode="dropdown"
        iosIcon={<IconBase name="arrow-forward" />}
        placeholder="Select"
        placeholderStyle={{ color: '#bfc6ea' }}
        placeholderIconColor="#007aff"
        // style={{ width: '100%' }}
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
