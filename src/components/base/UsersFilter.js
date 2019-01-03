import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

const UsersFilter = (props) => (
  <View style={{marginTop: 22}}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isFilterOpen}
    >
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight
            onPress={() => {
              props.onCloseFilter();
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
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
