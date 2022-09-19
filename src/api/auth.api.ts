import axios from "axios";
import { LOGIN_API } from "../utils/constants";
import { LoginResponse } from "../zoomcare-api";

export const mockLogin = async (): Promise<LoginResponse> => {
    return axios.post<LoginResponse>(LOGIN_API, { username: "test", password: "test" })
        .then(result => result.data)
        .catch(error => error.response.data);
};