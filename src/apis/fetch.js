import { AsyncStorage } from 'react-native';
import { AUTH_USER_KEY, token } from '../config/constants';

export default async function fetchApi(url, method: 'GET', body) {
  // const token = await AsyncStorage.getItem(AUTH_USER_KEY);

  const response = await fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    ...body && { body: JSON.stringify(body)}
  });

  return await response.json();
};