import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';

import NavHeader from '../base/NavHeader';
import SearchConnector from '../../redux/connectors/Search.connector';
import SearchFilter from '../views/SearchFilter';
import ListUsersView from '../base/List/ListUsersView';
import { SearchIcon, SortIcon } from '../base/Icons';

const SearchScreen = () => (
  <Container>
    <SearchConnector
      render={props => (
        <React.Fragment>
          <NavHeader
            title="Search"
            rightButtons={[
              <SearchIcon
                key="search-button"
                onPress={props.filter.onOpenFilter}
              />,
              <SortIcon
                key="sort-button"
                onPress={props.filter.onOpenFilter}
              />,
            ]}
          />
          <SearchFilter {...props.filter} />
          <ListUsersView {...props.results} />
        </React.Fragment>
      )}
    />
  </Container>
);

export default SearchScreen;
