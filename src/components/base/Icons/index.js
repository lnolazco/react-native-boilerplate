import React from 'react';
import { Icon, Button } from 'native-base';

export const IconBase = (props) => (
  <Icon ios={`ios-${props.name}`} android={`md-${props.name}`} style={{ fontSize: 20 }} {...props} />
);

export const SearchIcon = ({ onPress }) => (
  <Button transparent onPress={onPress}>
    <IconBase name="search" />
  </Button>
);

export const CloseDialogIcon = ({ onPress }) => (
  <Button transparent onPress={onPress}>
    <IconBase name="arrow-down" />
  </Button>
);

export const DoneDialogIcon = ({ onPress }) => (
  <Button transparent onPress={onPress}>
    <IconBase name="checkmark-circle" />
  </Button>
);
