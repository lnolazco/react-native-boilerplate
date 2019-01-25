import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
} from 'react-native';
import { Constants } from 'expo';
import fetchUsersApi from '../../apis/users';

export default class DemoList extends Component {
  constructor(props) {
    super(props);
    this.fetchMore = this._fetchMore.bind(this);
    this.fetchData = this._fetchData.bind(this);
    this.state = {
      dataSource: null,
      isLoading: true,
      isLoadingMore: false,
      _data: null,
      _dataAfter: '',
      page: 1,
    };
  }

  _fetchData(callback) {
    const page = this.state.page;
    console.log('Fech page', page);
    fetchUsersApi({ page })
      .then(callback)
      .catch(error => {
        console.error(error);
      });
  }

  _fetchDataOld(callback) {
    const params =
      this.state._dataAfter !== '' ? `&after=${this.state._dataAfter}` : '';
    //Limits fetches to 15 so there's lesser items from the get go
    const url = `https://www.reddit.com/subreddits/popular/.json?limit=15${params}`;
    console.log('URL >>>> ', url);
    fetch(url)
      .then(response => response.json())
      .then(callback)
      .catch(error => {
        console.error(error);
      });
  }

  _fetchMore() {
    console.log('FETCH MORE');
    this.fetchData(responseJson => {
      const data = this.state._data.concat(responseJson);
      this.setState(prevState => ({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoadingMore: false,
        _data: data,
        // _dataAfter: responseJson.data.after,
        page: prevState.page + 1,
      }));
    });
  }

  componentDidMount() {
    console.log('FETCH INIT');
    //Start getting the first batch of data from reddit
    this.fetchData(responseJson => {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });
      const data = responseJson; // .data.children;
      this.setState(prevState => ({
        dataSource: ds.cloneWithRows(data),
        isLoading: false,
        _data: data,
        //_dataAfter: responseJson.data.after,
        page: prevState.page + 1,
      }));
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => {
            return (
              <View style={styles.listItem}>
                <View style={styles.imageWrapper}>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{
                      uri:
                        rowData.imageThumb === '' || rowData.imageThumb === null
                          ? 'https://via.placeholder.com/70x70.jpg'
                          : rowData.imageThumb,
                    }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{rowData.pseudo}</Text>
                  <Text style={styles.subtitle}>{rowData.title}</Text>
                </View>
              </View>
            );
          }}
          onEndReached={() => {
            if (this.state.isLoading || this.state.isLoadingMore) {
              return;
            }
            this.setState({ isLoadingMore: true }, () => this.fetchMore());
          }}
          renderFooter={() => {
            return (
              this.state.isLoadingMore && (
                <View style={{ flex: 1, padding: 10 }}>
                  <ActivityIndicator size="small" />
                </View>
              )
            );
          }}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
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
    fontSize: 20,
    textAlign: 'left',
    margin: 6,
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'left',
    margin: 6,
  },
});
