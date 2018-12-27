import { ApiUrls, token } from '../config/constants';
import { normalizeUsers } from '../config/normalizers';
import fetchApi from './fetch';

export default async page => {
  const url = `${ApiUrls.users}?city_number=37995,37996,37997,37998&iso=BE&page=${page}&per_page=40&radius=50&region_number=1,2&type=global`;
  console.log('url page', url);
  const response = await fetchApi(url);
  return await normalizeUsers(response);
};
