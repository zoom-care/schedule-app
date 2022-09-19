import axios from "axios";
import { APPOINTMENTS_API } from "../utils/constants";
import { AppointmentsDto } from "../zoomcare-api";

export const fetchAppoitments = async (authCode: string): Promise<AppointmentsDto> => {
    return axios.get<AppointmentsDto>(APPOINTMENTS_API, { headers: { "Authorization": authCode } })
        .then(result => result.data)
        .catch(error => error.response.data);
};