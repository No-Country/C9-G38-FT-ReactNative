// export const BASE_URL =
//   'https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/';
// export const BASE_URL = 'https://appsports.onrender.com/api/v1/';
export const BASE_URL = 'http://192.168.1.2:3000/api/v1/';

export const GOOGLE_LOGIN_AUTH = 'https://www.googleapis.com/userinfo/v2/me';

const URL = {
  AUTH_ME: {
    path: 'auth/me',
    method: 'GET',
  },
  LOGIN: {
    path: 'auth/login',
    method: 'POST',
  },
  REGISTER: {
    path: 'auth/register',
    method: 'POST',
  },
  GET_USERS: {
    path: 'users',
    method: 'GET',
  },
  GET_SPORTS: {
    path: 'sports',
    method: 'GET',
  },
  SEARCH_USERS: {
    path: 'users/search',
    method: 'POST',
  },
  GET_FOLLOWERS: {
    path: 'follows/:id',
    method: 'GET',
  },
  UPDATE_PROFILE: {
    path: 'users',
    method: 'PUT',
  },
  GET_USER: {
    path: 'users/search',
    method: 'POST',
  },
};

export default URL;
