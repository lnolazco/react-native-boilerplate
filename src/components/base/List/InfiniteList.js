// https://streetsmartdev.com/react-native-infinite-scroll-listview/
import React, { PureComponent } from 'react';
import { View, ListView, ActivityIndicator, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

export default class InfiniteListView extends PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  renderFooter = () =>
    this.props.isLoadingMore && (
      <View style={{ flex: 1, padding: 10 }}>
        <ActivityIndicator size="small" />
      </View>
    );

  render() {
    const { isLoading, dataSource, onEndReached, renderRow } = this.props;

    return isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <ListView
        dataSource={dataSource}
        renderRow={renderRow}
        onEndReached={onEndReached}
        renderFooter={this.renderFooter}
      />
    );
  }
}
