import axios from "axios";
import { API } from "../constants/constants";
import {
  ApiError,
  AppointmentsDto,
  Clinic,
  LoginResponse,
} from "../zoomcare-api";

export const userLogin = async (
  username: string,
  password: string
): Promise<LoginResponse | ApiError> => {
  return axios
    .post<LoginResponse | ApiError>(API.LOGIN, {
      username: username,
      password: password,
    })
    .then((result) => result.data)
    .catch((error) => error.response.data);
};

export const getAppointment = async (
  authrize: string
): Promise<AppointmentsDto | ApiError> => {
  return axios
    .get<AppointmentsDto | ApiError>(API.APPOINTMENTS, {
      headers: { Authorization: authrize },
    })
    .then((result) => result.data)
    .catch((error) => error.response.data);
};

export const getClinics = async (
  id: number,
  authrize: string
): Promise<Clinic | ApiError> => {
  return axios
    .get<Clinic | ApiError>(`${API.CLINICS}/${id}`, {
      headers: { Authorization: authrize },
    })
    .then((result) => result.data)
    .catch((error) => error.response.data);
};
