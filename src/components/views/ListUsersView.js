// https://streetsmartdev.com/react-native-infinite-scroll-listview/
import React, { PureComponent } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import InfiniteList from '../base/List/InfiniteList';
import ImageThumbs from '../base/Images/ImageThumbs';

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 6,
  },
  imageWrapper: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    margin: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    margin: 6,
  },
});

export default class ListUsersView extends PureComponent {
  onSelectRow = inscID => () => {
    this.props.onSelectRow(inscID);
  };

  renderRow = rowData => (
    <View>
      <TouchableHighlight onPress={this.onSelectRow(rowData.inscID)}>
        <View style={styles.listItem}>
          <View style={styles.imageWrapper}>
            <ImageThumbs src={rowData.imageThumb} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{rowData.pseudo}</Text>
            <Text style={styles.subtitle}>{rowData.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );

  render() {
    const {
      onLoad,
      isLoading,
      isLoadingMore,
      dataSource,
      onEndReached,
    } = this.props;

    return (
      <InfiniteList
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        dataSource={dataSource}
        onLoad={onLoad}
        renderRow={this.renderRow}
        onEndReached={onEndReached}
      />
    );
  }
}
