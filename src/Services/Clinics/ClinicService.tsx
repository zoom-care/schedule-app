import axios from 'axios';
import { AppointmentsDto } from '../../zoomcare-api';

//Service to request appointments 
const ClinicService = () => {

    const getAll = async (url: string, headerObj: any) => {
        return await axios(url, { headers: headerObj }).then(response => response.data);
    }

    const getById = async (url: string, id: number, headerObj: any) => {
        return await axios(`${url}/${id}`, { headers: headerObj }).then(response => response.data);
    }

    return { getAll, getById }
}

export default ClinicService();