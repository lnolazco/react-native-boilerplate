import { ApiUrls } from '../config/constants';
import { normalizeSearchResponse } from '../config/normalizers';
import fetchApi from './fetch';

export default async ({
  page,
  gender,
  country,
  region,
  minimumAge,
  maximumAge,
}) => {
  console.log('users api page param', page);

  const params = [
    'per_page=15',
    'radius=50',
    'city_number=37995,37996,37997,37998',
    'type=global',
  ];

  params.push(`page=${page}`);
  gender && params.push(`&gender=${gender}`);
  params.push(`&iso=${gender || 'BE'}`);
  params.push(`&region_number=${region || '1,2'}`);
  minimumAge && params.push(`&age_min=${minimumAge}`);
  maximumAge && params.push(`&age_max=${age_max}`);

  const url = `${ApiUrls.users}?${params.join('&')}`;
  //const url = `${ApiUrls.users}?city_number=37995,37996,37997,37998&iso=BE&page=${page}&per_page=40&radius=50&region_number=1,2&type=global`;
  console.log('url page', url);
  const response = await fetchApi(url);
  console.log('USERS response ', response);
  return await normalizeSearchResponse(response);
};
