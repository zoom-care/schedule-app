import axios from 'axios';
import { Login } from '../../zoomcare-api';

//Service to request Login data
const LoginService = () => {

    const login = async (url: string, reqObj: Login) => {
        return await axios.post(url, reqObj).then(response => response.data);
    }

    return { login }
}

export default LoginService();