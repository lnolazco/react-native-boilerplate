import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './screens/Chat';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
