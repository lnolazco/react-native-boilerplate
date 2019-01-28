import { GALLERIES_PATH, THUMB_NOT_FOUND, THUMBS_PATH } from './constants';

const toGallery = gallery =>
  gallery
    ? Object.keys(gallery).map(
        key =>
          `${GALLERIES_PATH}/${gallery[key].picture_rep}/${
            gallery[key].picture
          }`
      )
    : [];

const toImageThumb = user =>
  user.picture === '' || user.picture === null
    ? THUMB_NOT_FOUND
    : `${THUMBS_PATH}/${user.picture_rep}/${user.picture}`;

export const normalizeUser = data => ({
  ...data.user,
  gallery: toGallery(data.user.gallery),
});

export const normalizeSearchResponse = data => ({
  error: data.error,
  more: data.more,
  users: data.users
    ? data.users.map(user => ({
        ...user,
        imageThumb: toImageThumb(user),
      }))
    : [],
});
