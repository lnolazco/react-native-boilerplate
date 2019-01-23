import React from 'react';
import { Modal, View } from 'react-native';
import { Container, Button, Text } from 'native-base';

import NavHeader from './NavHeader';

const UsersFilter = props => (
  <View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isFilterOpen}
    >
      <Container>
        <NavHeader title="Home" />
        <Button
          onPress={() => {
            props.onCloseFilter();
          }}
        >
          <Text>Hide Modal</Text>
        </Button>
      </Container>
    </Modal>
  </View>
);

export default UsersFilter;
