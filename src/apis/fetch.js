import { AsyncStorage } from 'react-native';
import { AUTH_USER_KEY } from '../config/constants';

export default async function fetchApi(url, method = 'GET', body) {
  const token = await AsyncStorage.getItem(AUTH_USER_KEY);

  const response = await fetch(url, {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    ...(body && { body: JSON.stringify(body) }),
  });

  return await response.json();
}

export async function fetchApiJson(url, method = 'GET', body) {
  try {
    let response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      let data = await response.json();
      return data;
    }
    throw new Error(response._bodyText);
  } catch (err) {
    return {
      err: true,
      message: err,
    };
  }
}
