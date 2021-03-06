import React from 'react';
import { Container } from 'native-base';

import NavHeader from '../base/NavHeader';
import SearchConnector from '../../redux/connectors/Search.connector';
import SearchFilterConnector from '../../redux/connectors/SearchFilter.connector';
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
          <SearchFilterConnector
            render={propsFilter => <SearchFilter {...propsFilter} />}
          />
          <ListUsersView {...props.results} />
        </React.Fragment>
      )}
    />
  </Container>
);

export default SearchScreen;
