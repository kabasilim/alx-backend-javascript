import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const res = Object.assign({}, ...data);
    console.log(`${res.body} ${res.firstName} ${res.lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
