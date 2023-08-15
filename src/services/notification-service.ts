import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

class NotificationService {
  notifySuccess = async (message: string) => {
    toast.success(message);

  };
  notifyWarning = async (message: string) => {
    toast.warn(message);
  };

  notifyError = async (error: AxiosError | Error | string) => {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      const { method, url } = error.config as AxiosRequestConfig;
      const { statusText, status } = error.response as AxiosResponse ?? {};

      toast.error(`[API] ${method?.toUpperCase()} ${url} | Error ${status} ${message} | ${statusText}`);

    } else if (typeof(error) === "string") {
      toast.error(error);

    } else {
      toast.error(error?.message);
    }
  };
}

const notificationService = new NotificationService();
export default notificationService;


