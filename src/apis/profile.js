import { PROFILE_URL, token } from '../config/constants';
import { normalizeUser } from '../config/normalizers';

export default id => {
  const url = `${PROFILE_URL}/${id}`;

  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(response => response.json())
    .then(responseJson => normalizeUser(responseJson));
};
