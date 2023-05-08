import { AppointmentsDto } from "../zoomcare-api";

export async function getAppointments(): Promise<AppointmentsDto> {
    const response = await fetch('/api/appointments', { method: 'GET', headers: {'Authorization': sessionStorage.getItem('authToken') as string } })
    return await response.json();
}  