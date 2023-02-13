import axios from 'axios';
import store from '../redux/store';
import { LOG_OUT } from '../redux/type';

// Create an instance of axios
const api = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json'
  }
});

// logout the user if the token has expired
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOG_OUT });
    }
    return Promise.reject(err);
  }
);

export default api;