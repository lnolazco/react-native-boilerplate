import React from 'react';
import { Container } from 'native-base';

import NavHeader from '../base/NavHeader';
import ProfileContainer from '../../redux/containers/Profile.container';
import ProfileView from '../views/ProfileView';
import LoadingScreen from './LoadingScreen';

const ProfileScreen = () => (
  <Container>
    <NavHeader title="Profile" backButton={true} />
    <ProfileContainer
      render={props =>
        props.isLoading ? <LoadingScreen /> : <ProfileView {...props} />
      }
    />
  </Container>
);

export default ProfileScreen;
