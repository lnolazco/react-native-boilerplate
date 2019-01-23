import React from 'react';
import { Container } from 'native-base';

import HomeContainer from '../../redux/containers/Home.container';
import HomeView from '../views/HomeView';
import NavHeader from '../base/NavHeader';
import LoadingScreen from './LoadingScreen';

const HomeScreen = () => (
  <Container>
    <NavHeader title="Home" />
    <HomeContainer
      render={props =>
        props.isLoading ? <LoadingScreen /> : <HomeView {...props} />
      }
    />
  </Container>
);

export default HomeScreen;
