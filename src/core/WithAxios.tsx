import { useContext } from 'react'
import MainContext from './MainContext';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const WithAxios: React.FC = ({ children }) => {
    const { token } = useContext(MainContext);


        const onRequest = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
                if (token) {
                    config.headers!.Authorization = `Bearer ${token}`;
                }
                config.headers!.Pragma = 'no-cache';
                return config;
          
        };

        const onResponse = (response: AxiosResponse): AxiosResponse => response;

        const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
            // if (axios.isAxiosError(error)) {
            //     debugger;
            //     // eslint-disable-next-line eqeqeq
            //     if (error?.response?.status == 401) {

            //     }
            //     if (!error?.response?.status || error?.response?.status >= 400) {
            //         notificationService.notifyError(error);
            //     }
            // } else {
            //     notificationService.notifyError(error);
            // }

            return Promise.reject(error);
        }

        axios.interceptors.request.use(onRequest, onErrorResponse);
        axios.interceptors.response.use(onResponse, onErrorResponse);
    //     // Clean-up:
    //     return () => {
    //         isMounted = false;
    //     }


    // }, [setToken, token])

    return (
        <>
            {children}
        </>
    )
}

export default WithAxios
