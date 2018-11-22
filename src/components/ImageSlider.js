// Implement carousel
import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-looped-carousel';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get('window');
    const heightPct = (height * props.heightPercentaje) / 100;

    this.state = {
      size: { width, height: heightPct },
    };
  }

  onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <Carousel autoplay={false} style={this.state.size} pageInfo>
        <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
          <Text>1</Text>
        </View>
        <View style={[{ backgroundColor: 'red' }, this.state.size]}>
          <Text>2</Text>
        </View>
        <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Text>3</Text>
        </View>
      </Carousel>
    );
  }
}
