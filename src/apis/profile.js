import { ApiUrls } from '../config/constants';
import { normalizeUser } from '../config/normalizers';
import fetchApi from './fetch';

export default async id => {
  const url = `${ApiUrls.userProfile}/${id}`;

  const response = await fetchApi(url);
  return await normalizeUser(response);
};
