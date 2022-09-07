import { getAuthToken } from '../context/Auth'
import { AppointmentsDto, AppointmentSlot, Clinic, Login, LoginResponse } from '../zoomcare-api'

const endpoints = {
  LOGIN: '/api/login',
  APPOINTMENTS: '/api/appointments',
  CLINICS: 'api/clinics',
  CLINIC: (id: number) => `/api/clinics/${id}`
}

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
}

export interface useFetchParams {
  url: string
  method: HTTPMethod
  body?: { [key: string]: any }
  withAuth?: boolean
}

function withAuth (headers: { [key: string]: string }): { [key: string]: string } {
  return {
    ...headers,
    Authorization: getAuthToken() ?? ''
  }
}

export async function login ({ username, password }: Login): Promise<LoginResponse> {
  const response = await fetch(endpoints.LOGIN, {
    method: HTTPMethod.POST,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  return await response.json()
}

export async function getClinic (id: number): Promise<Clinic> {
  const response = await fetch(
    endpoints.CLINIC(id),
    {
      method: HTTPMethod.GET,
      headers: withAuth({
        'Content-Type': 'application/json'
      })
    }
  )

  return await response.json()
}

export async function getAppointments (): Promise<AppointmentSlot[]> {
  const response = await fetch(
    endpoints.APPOINTMENTS,
    {
      method: HTTPMethod.GET,
      headers: withAuth({
        'Content-Type': 'application/json'
      })
    }
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return (await response.json() as AppointmentsDto).appointmentSlots
}
