import axios from "axios";
import { LoginRequest } from "../model/LoginRequest";

const apiBaseUrl = '/api/login/';

class LoginService {
    loginUser = async (credentials: LoginRequest): Promise<string> => {
        var response = await axios.post(apiBaseUrl, credentials);
        return response.data.authToken;
    }
}

const loginService = new LoginService();
export default loginService;


