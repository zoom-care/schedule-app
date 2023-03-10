import { ClinicsDto, AppointmentsDto, AppointmentSlot } from "../zoomcare-api"
import { parseArrayToMap } from "./ParserService"

async function getData(url: string, token: string) {
  const response = fetch(url, {
    headers: {
      'Authorization': token
    }
  })
  return (await response).json()
}

async function getAppointments(token: string): Promise<AppointmentsDto> {
  return await getData('/api/appointments', token)
}

export async function getClinics(token: string): Promise<ClinicsDto> {
  return await getData('/api/clinics', token)
}

export async function getAppointmentsByClinic(token: string): Promise<Map<number, AppointmentSlot[]>> {
  const appointments = await getAppointments(token)
  const mapAppointments = parseArrayToMap(appointments.appointmentSlots, 'clinicId') as Map<number, AppointmentSlot[]>
  return mapAppointments
}
