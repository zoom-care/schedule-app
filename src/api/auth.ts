import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiUrl, RequestMethod } from '../constants/api.constants';
import { ApiError, LoginResponse } from '../zoomcare-api';

const login = (username: string, password: string): Promise<AxiosResponse<LoginResponse, ApiError>> => {
  const options: AxiosRequestConfig = {
    method: RequestMethod.POST,
    url: apiUrl.LOGIN,
    data: { username, password },
  };
  return axios
    .request(options)
};

const logout = () => {};

const auth = { login, logout };

export default auth;
