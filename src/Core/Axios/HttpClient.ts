import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { BASE_URL } from "../constants";

export abstract class HttpClient {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.initializeResponseInterceptor();
    return this.instance;
  }

  private initializeResponseInterceptor = () => {
    this.instance!.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
    const token = sessionStorage.getItem("authToken");
    this.instance!.interceptors.request.use((config) => {
      if (!config.url?.includes("login")) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      }

      return config;
    });
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  private handleError = (error: any) => Promise.reject(error);
}
