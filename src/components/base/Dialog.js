import React from 'react';
import { Modal, View } from 'react-native';
import { Container } from 'native-base';

import { CloseDialogIcon, DoneDialogIcon } from './Icons';
import NavHeader from './NavHeader';

const Dialog = props => (
  <View>
    <Modal animationType="slide" transparent={false} visible={props.isOpen}>
      <Container>
        <NavHeader
          title={props.title}
          leftButtons={[
            <CloseDialogIcon key="close-dialog" onPress={props.onClose} />,
          ]}
          rightButtons={[
            <DoneDialogIcon key="done-dialog" onPress={props.onDone} />,
          ]}
        />
        {props.children}
      </Container>
    </Modal>
  </View>
);

export default Dialog;
