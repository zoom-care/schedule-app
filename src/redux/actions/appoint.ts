//in useActions.ts file
import { GET_ALL_APPOINTMENTS, GET_DETAIL_APPOINTMENT, LOG_OUT, SET_ERRORS } from '../type';
import axios from 'axios';
export const getAllAppointments = () => (dispatch: any) => {
  const token = localStorage.getItem('token');//setting token to local storage
  axios.defaults.headers.common['Authorization'] = token;
  axios.get('/api/appointments')
    .then((res) => {
      console.log("appointment all data", res.data);

      dispatch({
        type: GET_ALL_APPOINTMENTS,
        payload: res.data.appointmentSlots
      });
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

export const getAppointmentById = (clinicId: any) => (dispatch: any) => {
  const token = localStorage.getItem('token');//setting token to local storage
  axios.defaults.headers.common['Authorization'] = token;
  axios.get(`/api/clinics/${clinicId}`)
    .then((res) => {
      console.log("appointment active data", res.data);
      dispatch({
        type: GET_DETAIL_APPOINTMENT,
        payload: res.data
      });
      
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
}