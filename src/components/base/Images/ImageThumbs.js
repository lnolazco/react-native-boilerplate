import React from 'react';
import { Image } from 'react-native';

const ImageThumbs = ({ src }) => (
  <Image
    style={{ width: 70, height: 70 }}
    source={{
      uri: src,
    }}
  />
);

export default ImageThumbs;
