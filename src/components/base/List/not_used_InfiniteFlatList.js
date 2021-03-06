import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, List, ListItem, Icon, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class InfiniteFlatList extends Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false,
  };

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

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: '86%',
  //         backgroundColor: '#CED0CE',
  //         marginLeft: '14%',
  //       }}
  //     />
  //   );
  // };

  // renderHeader = () => {
  //   return <SearchBar placeholder="Type Here..." lightTheme round />;
  // };

  // renderFooter = () => {
  //   if (!this.state.loading) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: '#CED0CE',
  //       }}
  //     >
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: item.picture.thumbnail }} />
            </Left>
            <Body>
              <Text>{`${item.name.first} ${item.name.last}`}</Text>
              <Text note>Email: </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        )}
        keyExtractor={item => item.login.uuid}
        // ItemSeparatorComponent={this.renderSeparator}
        // ListHeaderComponent={this.renderHeader}
        // ListFooterComponent={this.renderFooter}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
      />
    );
  }
}
