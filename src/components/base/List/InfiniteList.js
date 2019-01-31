// https://streetsmartdev.com/react-native-infinite-scroll-listview/
import React, { PureComponent } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { List, Content, Spinner } from 'native-base';

const styles = StyleSheet.create({
  spinnerContent: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class InfiniteListView extends PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  renderFooter = () => this.props.isLoadingMore && <Spinner />;

  render() {
    const { isLoading, dataSource, onEndReached, renderRow } = this.props;

    return isLoading ? (
      <Content contentContainerStyle={styles.spinnerContent}>
        <Spinner />
      </Content>
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
