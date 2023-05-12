import axios from 'axios'
import { AppointmentsDto, Clinic, Login, LoginResponse } from '../zoomcare-api'

const baseURL = process.env.REACT_APP_API_URL ?? '/api'

export const API = axios.create({
  baseURL,
})

export const setNewToken = (token?: string) => {
  API.defaults.headers.common.Authorization = token
}

export const validateCredentials = (credentials: Login) =>
  API.post<LoginResponse>('/login', credentials).then(({ data }) => {
    setNewToken(data.authToken)
    return data
  })

export const getAppointments = () =>
  API.get<AppointmentsDto>('/appointments').then(
    ({ data }) => data.appointmentSlots
  )
export const getClinic = (clinicId: number) =>
  API.get<Clinic>(`/clinics/${clinicId}`).then(({ data }) => data)
