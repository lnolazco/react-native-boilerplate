import React from 'react';
import { Icon, Button } from 'native-base';

// Icon props + onPress
export const IconBase = props => (
  <Button transparent onPress={props.onPress}>
    <Icon
      ios={`ios-${props.name}`}
      android={`md-${props.name}`}
      style={{ fontSize: 20 }}
      {...props}
    />
  </Button>
);

export const SearchIcon = props => <IconBase name="search" {...props} />;

export const SortIcon = props => <IconBase name="flash" {...props} />;

export const CloseDialogIcon = props => (
  <IconBase name="arrow-down" {...props} />
);

export const DoneDialogIcon = props => (
  <IconBase name="checkmark-circle" {...props} />
);
