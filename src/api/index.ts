import axios, { AxiosResponse } from 'axios'
import { IAppointmentsDto, ILoginResponse, IClinicsDto, IClinic, ApiError } from '../models'

// TODO: handle not found (Clinic for id: 2 is not found return friendly.)
const handleError = (error: any) => {
    console.error(error)
}

// : Promise<IAppointmentsDto>
export const fetchAppointments = async(): Promise<IAppointmentsDto | undefined> => {
    try {
        const authToken  = await login()
        const response: AxiosResponse = await axios('api/appointments', {        
            headers: {
                'Authorization': `Token ${authToken}`, 
            },  
        })
        return response?.data
    } catch (error) {
        handleError(error)
    }
}

// export const fetchClinics = async(): Promise<IClinicsDto>  => {
//     const { authToken } = await login()
//     const response = await axios.get('api/clinics', {        
//         headers: {
//             'Authorization': `Token ${authToken}`, 
//         }, 
//     })
//     return response
// }

export const fetchClinic = async(clinicId: string): Promise<IClinic | undefined>  => {
    try {
        const authToken  = await login()
        const response: AxiosResponse = await axios.get(`/api/clinics/${clinicId}`, {        
            headers: {
                'Authorization': `Token ${authToken}`, 
            },  
        })
        return response?.data
    } catch (error) {
        handleError(error)   
    }
}

const login = async(): Promise<ILoginResponse | undefined>  => {
    try {
        const response: AxiosResponse = await axios({
            method: 'POST',
            url: 'api/login',
            data: {
                username: 'mimohstha',
                password: 'mimohstha',
            }
        })
        const { authToken } = response?.data
        return authToken
    } catch (error) {
        handleError(error)
    }
}

