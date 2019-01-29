import React from 'react';
import Picker from './Picker';

import { IconBase } from '../Icons';
import { countries, regionLabel, regions } from '../../../config/constants';

/*
countrySelected
countries
regionLabel
regionSelected
regions
onCountryChange
onRegionChange
 */
const CountryRegionPicker = props => (
  <React.Fragment>
    <Picker
      label="Country"
      selectedValue={props.countrySelected}
      onValueChange={props.onCountryChange}
      items={props.countries}
    />
    <Picker
      label={props.regionLabel}
      selectedValue={props.regionSelected}
      onValueChange={props.onRegionChange}
      items={props.regions}
    />
    {/* <Picker
      mode="dropdown"
      iosIcon={<IconBase name="arrow-down" />}
      placeholder={`Select ${regionLabel[props.country]}`}
      placeholderStyle={{ color: '#bfc6ea' }}
      placeholderIconColor="#007aff"
      style={{ width: '100%' }}
      selectedValue={props.region}
      onValueChange={value => props.onRegionSelected(value)}
    >
      {props.country && regions[props.country]
        ? regions[props.country].map(region => (
            <Picker.Item label={region.label} value={region.value} />
          ))
        : null}
    </Picker> */}
  </React.Fragment>
);

export default CountryRegionPicker;
