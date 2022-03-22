import { Clinic, Login } from '../zoomcare-api';
const API_URL = '/api';

export const useZoomCareApi = () => {
    
    const onSignIn = async ({ username, password }: Login) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const authData = await response.json();
        return authData;
    }

    const onGetAppointmentsDto = async (authToken: string) => {
        const response = await fetch(`${API_URL}/appointments`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : authToken
            },
        });

        const appointmentsData = await response.json();
        return appointmentsData;
    }

    const onGetClinicDetail = async ({ clinicId, authToken } : any) => {
        const response = await fetch(`${API_URL}/clinics/${clinicId}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : authToken
            },
        });

        const clinicData = await response.json();
        return clinicData;
    }

    return {
        onSignIn,
        onGetAppointmentsDto,
        onGetClinicDetail
    }
}