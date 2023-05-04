import axios from 'axios';

export const UsersAPI = axios.create({
  baseURL: process.env.REACT_APP_APIURL_USERS,
  headers: {
    'Content-Type': 'application/json',
  }
});
