import { AppointmentsDto, ClinicsDto, Clinic } from '../zoomcare-api';

const getAppointments = async (token: string): Promise<AppointmentsDto>=>{
    const data = await (await fetch('/api/appointments', { headers:{ 'Authorization': token } } )).json();
    return data;
}

const getClinics = async (token: string): Promise<ClinicsDto>=> {
    const data = await (await fetch('/api/clinics', { headers:{ 'Authorization': token } } )).json();
    return data;
}

const getClinicById = async (token: string, idClinic: number): Promise<Clinic>=>{
    const data = await (await fetch('/api/clinics/'+idClinic, { headers:{ 'Authorization': token } } )).json();
    return data;
}

const login = async ( username:string, password: string ): Promise<void> =>{
    await fetch('/api/login', 
    { 
        method: 'POST', 
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json',
        }, 
    });
}

export const services = {
    getAppointments,
    getClinics,
    getClinicById,
    login
}