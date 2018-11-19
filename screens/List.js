import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import { List, ListItem, SearchBar } from 'react-native-elements';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  // renderHeader = () => {
  //   return <SearchBar placeholder="Type Here..." lightTheme round />;
  // };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  // <ListItem
  //   roundAvatar
  //   title={`${item.name.first} ${item.name.last}`}
  //   subtitle={item.email}
  //   avatar={{ uri: item.picture.thumbnail }}
  //   containerStyle={{ borderBottomWidth: 0 }}
  // />

  render() {
    return (
      // <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View>
              <Text>{`${item.name.first} ${item.name.last}`}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

export default FlatListDemo;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   h2text: {
//     marginTop: 10,
//     fontFamily: 'Helvetica',
//     fontSize: 36,
//     fontWeight: 'bold',
//   },
//   flatview: {
//     justifyContent: 'center',
//     paddingTop: 30,
//     borderRadius: 2,
//   },
//   name: {
//     fontFamily: 'Verdana',
//     fontSize: 18
//   },
//   email: {
//     color: 'red'
//   }

// });
