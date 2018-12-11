// https://streetsmartdev.com/react-native-infinite-scroll-listview/
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

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.fetchMore = this._fetchMore.bind(this);
    this.fetchData = this._fetchData.bind(this);
    this.state = {
      dataSource: null,
      isLoading: true,
      isLoadingMore: false,
      _data: null,
      // _dataAfter: '',
      page: 1,
    };
  }

  _fetchData(callback) {
    // const params =
    //   this.state._dataAfter !== '' ? `&after=${this.state._dataAfter}` : '';
    // //Limits fetches to 15 so there's lesser items from the get go
    // fetch(`https://www.reddit.com/subreddits/popular/.json?limit=15${params}`)
    //   .then(response => response.json())
    //   .then(callback)
    //   .catch(error => {
    //     console.error(error);
    //   });

    const page = this.state.page;
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3Lm1pZ25vbm5lLmNvbSIsImlhdCI6MTU0MjM1Njg4NSwiZXhwIjoxNTU3OTkxNjg1LCJpZCI6IjU5MzkxMCIsInRva2VuaWQiOiI1YmVlN2Y5NWVmZGE1In0.PTKPVCSahzE-yNBzhu-E4ApEN71FXv3QzS4Kz--HPrw';
    const url = `https://www.mignonneapi.com/private/users?city_number=37995,37996,37997,37998&iso=BE&page=${page}&per_page=40&radius=50&region_number=1,2&type=global`;
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then(response => response.json())
      .then(callback)
      .catch(error => {
        console.error(error);
      });
  }

  _fetchMore() {
    this.fetchData(responseJson => {
      const data = this.state._data.concat(responseJson.data.children);
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
    //Start getting the first batch of data from reddit
    this.fetchData(responseJson => {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });
      const data = responseJson.data.users; // responseJson.data.children;
      this.setState({
        dataSource: ds.cloneWithRows(data),
        isLoading: false,
        _data: data,
        page: 1,
        // _dataAfter: responseJson.data.after,
      });
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
                        rowData.data.icon_img === '' ||
                        rowData.data.icon_img === null
                          ? 'https://via.placeholder.com/70x70.jpg'
                          : rowData.data.icon_img,
                    }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{rowData.data.display_name}</Text>
                  <Text style={styles.subtitle}>
                    {rowData.data.public_description}
                  </Text>
                </View>
              </View>
            );
          }}
          onEndReached={() =>
            this.setState({ isLoadingMore: true }, () => this.fetchMore())
          }
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
