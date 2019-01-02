import { ApiUrls } from '../config/constants';
import fetchApi, { fetchApiJson } from './fetch';

export async function fetchSignIn(user_email, user_password) {
  const body = { user_email, user_password };

  return await fetchApiJson(ApiUrls.login, 'POST', body);
}

export async function fetchLogOut() {
  return await fetchApi(ApiUrls.logout);
}
