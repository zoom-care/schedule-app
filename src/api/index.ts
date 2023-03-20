import axios, { InternalAxiosRequestConfig } from "axios";
import { getAuthToken } from "../reduxStore/auth/auth.storage";

declare module "axios" {
  interface AxiosRequestConfig {
    isGuestRequest?: boolean; // Request which is not required authentication
    token?: string;
  }
}

const zoomApiUrl = "";

export const Api = axios.create({
  baseURL: `${zoomApiUrl}`,
});

Api.interceptors.request.use(
  async (request): Promise<InternalAxiosRequestConfig> => {
    const cancelSource = axios.CancelToken.source();

    const { isGuestRequest } = request;
    let { token } = request;
    if (!isGuestRequest && !token) {
      try {
        const authToken = await getAuthToken();
        token = authToken;
      } catch {
        cancelSource.cancel();
      }
    }
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    } else if (!isGuestRequest) {
      //Authentication Required
      cancelSource.cancel();
    }

    return {
      ...request,
      cancelToken: cancelSource.token,
    };
  }
);

Api.interceptors.response.use(async (response) => {
  const { data } = response;
  //TODO: Cutomize Response Data Parsing
  return Promise.resolve(data);
});

export const loginUserApi = (
  email: string,
  password: string
): Promise<LoginResponse> =>
  Api.post<unknown, LoginResponse>(
    "/api/login",
    {
      username: email,
      password,
    },
    {
      isGuestRequest: true,
    }
  );

export const getAllAppointments = (): Promise<AppointmentsDto> =>
  Api.get<unknown, AppointmentsDto>("/api/appointments");

export const getClinicById = (clinicId: number): Promise<Clinic> =>
  Api.get<unknown, Clinic>(`/api/clinics/${clinicId}`);
