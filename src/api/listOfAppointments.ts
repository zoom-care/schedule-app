import { fetchData } from "./apiCall";
import { AppointmentsDto } from "../zoomcare-api";

export async function getAppointments(token: string): Promise<AppointmentsDto> {
    return fetchData('/api/appointments', token);  
}  