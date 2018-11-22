import React, { Component } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { Icon } from 'native-base';
import ImageSlider from '../components/ImageSlider';
import { Content, Card, CardItem, Text, Body } from 'native-base';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: () => (
      <Icon
        ios="ios-chatbubbles"
        android="chat"
        style={{ fontSize: 20, color: 'red' }}
      />
    ),
  };

  render() {
    return (
      <ScreenContainer title="Profile" navigation={this.props.navigation}>
        <ImageSlider heightPercentaje={50} />
        <Content padder>
          <Card>
            <CardItem
              header
              button
              onPress={() => alert('This is Card Header')}
            >
              <Text>Name of the user here</Text>
            </CardItem>
            <CardItem button onPress={() => alert('This is Card Body')}>
              <Body>
                <Text>
                  Pour premiere experience, ja recherche sune femme pour moment
                  tendre et calin, je ne souhaite pas d hommes merci
                </Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert('This is Card Footer')}
            >
              <Text>Femme</Text>
            </CardItem>
          </Card>
        </Content>
      </ScreenContainer>
    );
  }
}
