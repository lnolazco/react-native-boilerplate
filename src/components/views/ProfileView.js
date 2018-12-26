import React, { Component } from 'react';
import ImageSlider from '../base/Images/ImageSlider';
import { Content, Card, CardItem, Text, Body } from 'native-base';

export default class ProfileView extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return (
      <Content>
        {user.gallery.length ? (
          <ImageSlider heightPercentaje={50} images={user.gallery} />
        ) : null}
        <Content padder>
          <Card>
            <CardItem
              header
              button
              onPress={() => alert('This is Card Header')}
            >
              <Text>{user.title}</Text>
            </CardItem>
            <CardItem button onPress={() => alert('This is Card Body')}>
              <Body>
                <Text>{user.desc}</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert('This is Card Footer')}
            >
              <Text>{user.gender.name}</Text>
            </CardItem>
          </Card>
            <CardItem>
              <Text>Information</Text>
            </CardItem>
            <CardItem>
              <Text>Sexe {user.gender.explicit}</Text>
              <Text>Age {user.age}</Text>
              <Text>Pays {user.geoinfos.country}</Text>
              <Text>Departament {user.geoinfos.region_name}</Text>
              <Text>Age {user.age}</Text>
              <Text>Age {user.age}</Text>
              <Text>Age {user.age}</Text>
            </CardItem>
          <Card>
          </Card>
        </Content>
      </Content>
    );
  }
}
