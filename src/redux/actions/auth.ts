//in useActions.ts file
import { SET_ERRORS, SET_AUTHENTICATED, LOG_OUT } from '../type';
import axios from 'axios';
export const loginUser = (userData: any) => (dispatch: any) => {
  axios.post('/api/login', userData)
    .then((res) => {
      console.log("login result", res.data);
      const token = `Bearer ${res.data.authToken}`;
      localStorage.setItem('token', `Bearer ${res.data.authToken}`);//setting token to local storage
      axios.defaults.headers.common['Authorization'] = token;//setting authorize token to header in axios
      dispatch({ type: SET_AUTHENTICATED });
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
}

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization']
  dispatch({
    type: LOG_OUT
  });
  window.location.href = '/login';//redirect to login page
};
