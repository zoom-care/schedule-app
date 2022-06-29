import axios from 'axios';
import { AppointmentsDto } from '../../zoomcare-api';

//Service to request appointments 
const AppointmentService = () => {

    const getAll = async (url: string, headerObj: any) => {
        return await axios(url, {headers: headerObj}).then(response => response.data);
    }

    return { getAll }
}

export default AppointmentService();