import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {
    photo: null,
    user: null,
    error: null,
  };
  await uploadPhoto().then((data) => {
    res.photo = data;
  }).catch((err) => {
    res.error = `${err.message}`;
  });
  await createUser().then((data) => {
    res.user = data;
  }).catch((err) => {
    res.error = `${err.message}`;
  });
  if (res.error) {
    return {
      photo: null,
      user: null,
    };
  }
  return {
    photo: res.photo,
    user: res.user,
  };
}
