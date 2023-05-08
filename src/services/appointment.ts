import { AppointmentsDto } from "../zoomcare-api";
import { fetchData } from "./api";

export async function getAppointments(token: string): Promise<AppointmentsDto> {
    return fetchData('/api/appointments', token);  
}  