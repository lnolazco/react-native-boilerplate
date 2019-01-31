// https://streetsmartdev.com/react-native-infinite-scroll-listview/
import React, { PureComponent } from 'react';
// import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import InfiniteList from './InfiniteList';
// import ImageThumbs from '../base/Images/ImageThumbs';

import {
  // List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  // Button,
} from 'native-base';

// const styles = StyleSheet.create({
//   listItem: {
//     flex: 1,
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#d6d7da',
//     padding: 6,
//   },
//   imageWrapper: {
//     padding: 5,
//   },
//   title: {
//     fontSize: 16,
//     textAlign: 'left',
//     margin: 6,
//   },
//   subtitle: {
//     fontSize: 14,
//     textAlign: 'left',
//     margin: 6,
//   },
// });

export default class ListUsersView extends PureComponent {
  // onSelectRow = inscID => () => {
  //   this.props.onSelectRow(inscID);
  // };

  // _old_renderRow = rowData => (
  //   <View>
  //     <TouchableHighlight onPress={this.onSelectRow(rowData.inscID)}>
  //       <View style={styles.listItem}>
  //         <View style={styles.imageWrapper}>
  //           <ImageThumbs src={rowData.imageThumb} />
  //         </View>
  //         <View style={{ flex: 1 }}>
  //           <Text style={styles.title}>{rowData.pseudo}</Text>
  //           <Text style={styles.subtitle}>{rowData.title}</Text>
  //         </View>
  //       </View>
  //     </TouchableHighlight>
  //   </View>
  // );

  renderRow = rowData => (
    <ListItem thumbnail onPress={() => this.props.onSelectRow(rowData.inscID)}>
      <Left>
        <Thumbnail square source={{ uri: rowData.imageThumb }} />
      </Left>
      <Body>
        <Text>{rowData.pseudo}</Text>
        <Text note numberOfLines={1}>
          {rowData.title}
        </Text>
      </Body>
      <Right>
        <Text>View</Text>
      </Right>
    </ListItem>
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
