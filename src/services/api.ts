import { IAppointmentsDto, IClinic, IClinicsDto, ILogin, ILoginResponse } from "../zoomcare-api";

function setToken(token: string) {
  localStorage.setItem('token', token);
}

function getToken(): string | null {
  return localStorage.getItem('token');
}

async function request<T>(endpoint: string, method: string = 'GET', body?: any): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = token;
  }

  const response = await fetch(`/api/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

async function login(username: string, password: string): Promise<string> {
  const loginData: ILogin = { username, password };
  const response = await request<ILoginResponse>('login', 'POST', loginData);
  setToken(response.authToken);
  return response.authToken;
}

async function getAppointments(): Promise<IAppointmentsDto> {
  return request<IAppointmentsDto>('appointments', 'GET');
}

async function getClinic(clinicId: number): Promise<IClinic> {
  return request<IClinic>(`clinics/${clinicId}`, 'GET');
}

async function getClinics(): Promise<IClinicsDto> {
  return request<IClinicsDto>('clinics', 'GET');
}

export {
  setToken,
  login,
  getAppointments,
  getClinic,
  getClinics,
};
