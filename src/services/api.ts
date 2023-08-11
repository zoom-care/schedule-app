import { AppointmentsDto, ClinicsDto, LoginResponse } from "../zoomcare-api";

export async function getData(url: string, token: string) {
    const response = await fetch(url, { method: 'GET', headers: {'Authorization': token} })
    if (!response.ok) {
        throw new Error((await response.json()).error);
    }
    return await response.json();
}


export async function getAppointments(token: string): Promise<AppointmentsDto> {
    return getData('/api/appointments', token);  
}  


export async function getClinics(token: string): Promise<ClinicsDto> {
    return getData('/api/clinics', token); 
} 

export async function loginAuth(username: string, password: string): Promise<LoginResponse> {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }