import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';

import NavHeader from '../base/NavHeader';
import SearchConnector from '../../redux/connectors/Search.connector';
import SearchFilter from '../views/SearchFilter';
import ListUsersView from '../views/ListUsersView';
import { SearchIcon } from '../base/Icons';

const SearchScreen = () => (
  <Container>
    <SearchConnector
      render={props => (
        <View>
          <NavHeader
            title="Search"
            buttonsRight={[
              <SearchIcon
                key="search-icon"
                onPress={props.filter.onOpenFilter}
              />,
            ]}
          />
          <SearchFilter {...props.filter} />
          <ListUsersView {...props.results} />
        </View>
      )}
    />
  </Container>
);

export default SearchScreen;
