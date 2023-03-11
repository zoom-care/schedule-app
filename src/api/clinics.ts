import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiUrl, RequestMethod } from '../constants/api.constants';
import { ApiError, Clinic, ClinicsDto } from '../zoomcare-api';

const getList = (token: string): Promise<AxiosResponse<ClinicsDto, ApiError>> => {
	const options: AxiosRequestConfig = {
		method: RequestMethod.GET,
		url: apiUrl.CLINICS,
    headers: { Authorization: token },
	};
	return axios.request(options);
}

const getById = (token: string, id: string): Promise<AxiosResponse<Clinic, ApiError>> => {
	const options: AxiosRequestConfig = {
		method: RequestMethod.GET,
		url: `${apiUrl.CLINICS}/${id}`,
    headers: { Authorization: token },
	};
	return axios.request(options);
}

const clinics = { getList, getById };

export default clinics;