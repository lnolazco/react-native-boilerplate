import React from 'react';
import { Icon, Button } from 'native-base';

export const SearchIcon = ({ onPress }) => (
  <Button transparent onPress={onPress}>
    <Icon ios="ios-search" android="md-search" style={{ fontSize: 20 }} />
  </Button>
);
