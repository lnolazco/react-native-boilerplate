import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

import { Container } from 'native-base';
import NavHeader from './NavHeader';

const UsersFilter = (props) => (
  <View style={{marginTop: 22}}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isFilterOpen}
    >
      <Container>
        <NavHeader title="Home" />
         <TouchableHighlight
            onPress={() => {
              props.onCloseFilter();
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
      </Container>

         
    </Modal>

    <TouchableHighlight
      onPress={() => {
        props.onOpenFilter();
      }}>
      <Text>Show Modal</Text>
    </TouchableHighlight>
  </View>
);

export default UsersFilter;
