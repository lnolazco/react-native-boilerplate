import { USERS_URL, token } from '../config/constants';
import { normalizeUsers } from '../config/normalizers';

export default page => {
  const url = `${USERS_URL}?city_number=37995,37996,37997,37998&iso=BE&page=${page}&per_page=40&radius=50&region_number=1,2&type=global`;

  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(response => response.json())
    .then(responseJson => normalizeUsers(responseJson));
};
