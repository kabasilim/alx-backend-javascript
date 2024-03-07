import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((data) => {
      const res = [];

      for (let i = 0; i < data.length; i += 1) {
        res.push({
          status: data[i].status,
          value: data[i].value ? data[i].value : `${data[i].reason}`,
        });
      }
      return res;
    });
}
