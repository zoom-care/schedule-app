import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiUrl, RequestMethod } from '../constants/api.constants';
import { ApiError, AppointmentsDto } from '../zoomcare-api';

const getList = (token: string): Promise<AxiosResponse<AppointmentsDto, ApiError>> => {
	const options: AxiosRequestConfig = {
		method: RequestMethod.GET,
		url: apiUrl.APPOINTMENT,
    headers: { Authorization: token },
	};
	return axios.request(options);
}

const appointments = { getList };

export default appointments;