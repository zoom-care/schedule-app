import axios from 'axios';
import { Login, LoginResponse, AppointmentsDto, Clinic } from '../zoomcare-api';

const baseURL = process.env.REACT_APP_API_BASE_URL ?? '/api';

export const ApiClient = axios.create({ baseURL });

export const login = async (credentials: Login) => {
  const { data } = await ApiClient.post<LoginResponse>('/login', credentials);
  ApiClient.defaults.headers.common.Authorization = data.authToken;

  return data;
};

export const logout = () => {
  ApiClient.defaults.headers.common.Authorization = undefined;
};

export const getAppointments = async () => {
  const { data } = await ApiClient.get<AppointmentsDto>('/appointments');

  return data.appointmentSlots;
};

export const getClinic = async (clinicId: number) => {
  const { data } = await ApiClient.get<Clinic>(`/clinics/${clinicId}`);

  return data;
};
