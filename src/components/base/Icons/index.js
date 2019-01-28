import React from 'react';
import { Icon, Button } from 'native-base';

export const SearchIcon = ({ onPress }) => (
  <Button transparent onPress={onPress}>
    <Icon ios="ios-search" android="md-search" style={{ fontSize: 20 }} />
  </Button>
);

export const CloseDialogIcon = ({ onPress }) => (
  <Button transparent onPress={onPress}>
    <Icon
      ios="ios-arrow-down"
      android="md-arrow-down"
      style={{ fontSize: 20 }}
    />
  </Button>
);
