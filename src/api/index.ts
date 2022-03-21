
import { AppointmentsDto, ClinicsDto, ApiError, LoginResponse } from 'zoomcare-api';

export const getAppointmentSlots = async (): Promise<AppointmentsDto | undefined> => {
    const { authToken } = await login();
    try {
        const url = '/api/appointments';
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Token ${authToken}`,
            },
        };
        const rawResponse = await fetch(url, options);
        const response = await rawResponse.json();
        if (rawResponse.ok) {
            return response;
        }
    } catch (error) {

    }
}

export const getClinic = async (clinicId: number): Promise<ClinicsDto | undefined> => {
    const { authToken } = await login();
    try {
        const url = `/api/clinics/${clinicId}`;
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Token ${authToken}`,
            },
        };
        const rawResponse = await fetch(url, options);
        const response = await rawResponse.json();
        if (rawResponse.ok) {
            return response;
        }
    } catch (error) {
        console.log('ERROR')
    }

}

const login = async (): Promise<any | undefined> => {
    try {
        const url = '/api/login'
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                username: 'kyle',
                password: 'kylepassword',
            }),
        };

        const rawResponse = await fetch(url, options);
        const response = await rawResponse.json();
        if (rawResponse.ok) {
            const { username, authToken } = response;
            return { username, authToken };
        }

    } catch (error) {
        console.log('ERROR')
    }

}




