import { ApiUrls } from '../config/constants';
import { normalizeSearchResponse } from '../config/normalizers';
import fetchApi from './fetch';

export default async (filter) => {
  const {
  page,
  gender,
  country,
  region,
  city,
  picture,
  minimumAge,
  maximumAge,
} = filter;
  console.log('users api page params', filter);

  const params = [
    'per_page=15',
    'radius=50',
    'type=global',
  ];

  params.push(`page=${page}`);
  gender && params.push(`gender=${gender}`);
  params.push(`iso=${country || 'BE'}`);
  params.push(`region_number=${region || '1,2'}`);
  city && params.push('city_number=37995,37996,37997,37998');
  picture && params.push('onlypic=1');

  minimumAge && params.push(`&age_min=${minimumAge}`);
  maximumAge && params.push(`&age_max=${age_max}`);

  const url = `${ApiUrls.users}?${params.join('&')}`;
  //const url = `${ApiUrls.users}?city_number=37995,37996,37997,37998&iso=BE&page=${page}&per_page=40&radius=50&region_number=1,2&type=global`;
  console.log('url page', url);
  const response = await fetchApi(url);
  console.log('USERS response ', response);
  return await normalizeSearchResponse(response);
};
