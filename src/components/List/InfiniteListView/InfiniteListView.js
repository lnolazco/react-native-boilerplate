// https://streetsmartdev.com/react-native-infinite-scroll-listview/
import React, { PureComponent } from 'react';
import {
  Text,
  View,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import ImageThumbs from '../../Images/ImageThumbs';
import styles from './styles';

export default class InfiniteListView extends PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  onSelectRow = inscID => () => {
    this.props.onSelectRow(inscID);
  };

  renderRow = rowData => {
    !rowData && console.log(rowData);
    return (
      <View>
        <TouchableHighlight onPress={this.onSelectRow(rowData.inscID)}>
          <View style={styles.listItem}>
            <View style={styles.imageWrapper}>
              <ImageThumbs data={rowData} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{rowData.pseudo}</Text>
              <Text style={styles.subtitle}>{rowData.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  renderFooter = () =>
    this.props.isLoadingMore && (
      <View style={{ flex: 1, padding: 10 }}>
        <ActivityIndicator size="small" />
      </View>
    );

  render() {
    const { isLoading, dataSource, onEndReached } = this.props;

    return isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        onEndReached={onEndReached}
        renderFooter={this.renderFooter}
      />
    );
  }
}
