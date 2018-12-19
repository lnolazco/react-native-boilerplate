import React, { Component } from 'react';
import ImageSlider from '../components/Images/ImageSlider';
import { Content, Card, CardItem, Text, Body } from 'native-base';

export default class ProfileView extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    const images = Object.keys(user.gallery).map(
      key =>
        `https://www.mignonneapi.com/galeries/${
          user.gallery[key].picture_rep
        }/${user.gallery[key].picture}`
    );

    return (
      <Content>
        {images && images.length ? (
          <ImageSlider heightPercentaje={50} images={images} />
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
        </Content>
      </Content>
    );
  }
}
