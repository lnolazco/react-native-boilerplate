import React from 'react';
import { Picker, Form } from 'native-base';

import { IconBase } from '../base/Icons';
import { countries, regionLabel, regions } from '../../config/constants';

/*
country
region
onCountrySelect
onRegionSelect
 */
const CountryRegionPicker = props => (
  <React.Fragment>
    <Picker
      mode="dropdown"
      iosIcon={<IconBase name="arrow-down" />}
      placeholder="Select country"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      style={{ width: '100%' }}
      selectedValue={props.country}
      onValueChange={(value) => props.onCountrySelected(value)}
    >
    {
      countries.map(country => (
        <Picker.Item label={country.label} value={country.value} />
      ))
    }
    </Picker>
    <Picker
      mode="dropdown"
      iosIcon={<IconBase name="arrow-down" />}
      placeholder={`Select ${regionLabel[props.country]}`}
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      style={{ width: '100%' }}
      selectedValue={props.region}
      onValueChange={(value) => props.onRegionSelected(value)}
    >
    {
      props.country && regions[props.country] ?
      regions[props.country].map(region => (
        <Picker.Item label={region.label} value={region.value} />
      ))
      : null
    }
    </Picker>
  </React.Fragment>
);

export default CountryRegionPicker;
