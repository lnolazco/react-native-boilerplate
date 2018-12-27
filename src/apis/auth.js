import { ApiUrls } from '../config/constants';
import { normalizeUser } from '../config/normalizers';
import fetchApi from './fetch';

export async function fetchSignIn(user_email, user_password) {
  const body = { user_email, user_password };
  
  return fetchApi(ApiUrls.login, 'POST', body);
};

export async function fetchLogout() {
  return fetchApi(ApiUrls.logout);
};
