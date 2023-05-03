import { Login, AppointmentsDto, AppointmentSlot, Clinic } from "./zoomcare-api";
import dayjs from "dayjs";

export type ProviderClinicKey = `${number}/${number}`

export const getAuthHeader = () => ({ headers: { Authorization: sessionStorage.getItem('authToken') || '' } })

export const getClinicsObj = async (appointments: AppointmentSlot[]): Promise<Record<number, Clinic>> => {
  const clinicIds = Array.from(new Set(appointments.map(it => it.clinicId)).values())
  const clinics = await Promise.all(clinicIds.map(id => fetch(`/api/clinics/${id}`, getAuthHeader())))
    .then(arrRes => Promise.all(arrRes.map(res => res.json())))
  return Object.assign({}, ...clinics.map((clinic, idx) => ({ [clinicIds[idx]]: clinic })))
}

export const getAppointments = async () => await fetch('/api/appointments', getAuthHeader())
  .then(res => res.json())
  .then((list: AppointmentsDto) => list.appointmentSlots)

export const groupAppointmentByProviderAndClinic = (appointments: AppointmentSlot[]) => {
  const groupsObj: Record<ProviderClinicKey, AppointmentSlot[]> = {}
  appointments.forEach(appointment => {
    const key: ProviderClinicKey = `${appointment.provider.id}/${appointment.clinicId}`
    groupsObj[key] = [...groupsObj[key] || [], appointment]
  });
  return groupsObj;
}

export const getAuthToken = (): Promise<string | undefined> => fetch('/api/login', { method: 'POST', body: JSON.stringify({ username: 'foo', password: 'bar' } as Login) })
  .then(res => res.json())
  .then(it => it.authToken)
  .catch(err => console.error("Error trying to login", err))

export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return ''
	const [prefix, number] = phoneNumber.split(' ');
	return `(${prefix.slice(1)}) ${number}`;
}

export const formatProviderTitle = (name: string, credentials?: string) => name + (credentials ? `, ${credentials}` : '')

export const formatStartTime = (startTime: string) => dayjs(startTime).format('hh:mm A');
