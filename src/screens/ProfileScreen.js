import React, { Component } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { Icon } from 'native-base';
import ImageSlider from '../components/ImageSlider';
import { Content, Card, CardItem, Text, Body } from 'native-base';

const data = {
  error: false,
  user: {
    cache: 'memory',
    inscID: 2846,
    pseudo: 'ALEXIA',
    age: 38,
    sign: 'Verseau',
    age2: false,
    sign2: false,
    title: 'Alexia mignonne et très câline',
    desc:
      "salut , moi c'est alexia. je suis infirmière dans les bouches du rhone et surtout celibataire ( y en a marre).\r\nje connais pas trop la région.(j'y suis depuis pas longtemps => enfin depuis l'annonce ca fait un peu plus de temps maintenant)\r\nà part travailler, je ne fais pas grd chose, alors ça serait génial que je puisse rencontrer un mec coquin qui vit dans le coin ou qui puisse me rendre visite :)\r\nje croise les doigts !\r\nPS: Les couples non merci",
    online: 1,
    picture: '1372673561-salut-moi-c-est-alexia-je-suis-infirmiere-alexia.jpg',
    picture_rep: '99',
    top: 0,
    adult: false,
    device: 4,
    gender: {
      id: 0,
      name: 'Femme',
      seoname: 'femme',
      mininame: 'F',
      explicit: 'femmes seules',
      prefix: 'de',
      spacing: ' ',
    },
    last_login: 1542971311,
    recent_reg: false,
    height: 165,
    height_feet: '5\' 4"',
    weight: 53,
    weightlbs: 116,
    geoinfos: {
      iso: 'FR',
      country: 'France',
      prefix: 'en',
      region_type: 'Département',
      region_number: '13',
      region_name: 'Bouches-du-Rhône',
      city_number: 4440,
      city_name: 'Marseille',
      latitude: '43.2967',
      longitude: '5.37639',
    },
    bgenders: false,
    bcountries: ['DZ', 'XX', 'MA'],
    bnotifs: false,
    is_suspended: false,
    more_options: false,
    favorite: false,
    blacklist: false,
    is_vip: false,
    is_vip_displ: false,
    need_vip: false,
    gallery: {
      '16490': {
        picture_id: 16490,
        picture_rep: '2e',
        picture: '6be8a9f4c86a87cda80fc2ede2edd2c91344512359.jpg',
        status: 2,
        date: 0,
      },
      '22743': {
        picture_id: 22743,
        picture_rep: '7f',
        picture: '89901d9e49250655ea94e99e2ef9a60e1359123273.jpg',
        status: 2,
        date: 0,
      },
      '24331': {
        picture_id: 24331,
        picture_rep: '6d',
        picture: '9cdf9f3787d783ab15092a1f58ed1cec1362854801.jpg',
        status: 2,
        date: 0,
      },
      '42142': {
        picture_id: 42142,
        picture_rep: '42',
        picture: '2ef821ea8acd184d7b5facc062c2b1551402438574.jpg',
        status: 2,
        date: 0,
      },
      '49097': {
        picture_id: 49097,
        picture_rep: '85',
        picture: '9fb288c5d61135093f78a83517665f0f1413369375.jpg',
        status: 2,
        date: 0,
      },
    },
  },
  gen: 7,
};

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
    const images = Object.keys(data.user.gallery).map(
      key =>
        `https://www.mignonneapi.com/galeries/${
          data.user.gallery[key].picture_rep
        }/${data.user.gallery[key].picture}`
    );

    return (
      <ScreenContainer title="Profile" navigation={this.props.navigation}>
        <Content>
          <ImageSlider heightPercentaje={50} images={images} />
          <Content padder>
            <Card>
              <CardItem
                header
                button
                onPress={() => alert('This is Card Header')}
              >
                <Text>{data.user.title}</Text>
              </CardItem>
              <CardItem button onPress={() => alert('This is Card Body')}>
                <Body>
                  <Text>{data.user.desc}</Text>
                </Body>
              </CardItem>
              <CardItem
                footer
                button
                onPress={() => alert('This is Card Footer')}
              >
                <Text>{data.user.gender.name}</Text>
              </CardItem>
            </Card>
          </Content>
        </Content>
      </ScreenContainer>
    );
  }
}
