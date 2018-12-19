import React from 'react';
import { Image } from 'react-native';

const ImageThumbs = ({ data }) => (
  <Image
    style={{ width: 70, height: 70 }}
    source={{
      uri:
        data.picture === '' || data.picture === null
          ? 'https://via.placeholder.com/70x70.jpg'
          : `https://www.mignonneapi.com/menu_thumbs/${data.picture_rep}/${
              data.picture
            }`,
    }}
  />
);

export default ImageThumbs;
