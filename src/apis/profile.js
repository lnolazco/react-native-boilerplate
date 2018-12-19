import { PROFILE_URL, token } from '../config';

export default id => {
  const url = `${PROFILE_URL}/${id}`;

  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  }).then(response => response.json());
};
