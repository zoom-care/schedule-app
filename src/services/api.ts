// services/api.ts
import { AppointmentsDto, Clinic, ClinicsDto, Login, LoginResponse } from "../zoomcare-api";

class API {
  private port = 3001; // This should be on .ENV File
  private baseURL = `http://localhost:${this.port}/api`;
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(endpoint: string, method: string = 'GET', body?: any): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = this.token;
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error('Error al realizar la solicitud a la API');
    }

    return response.json() as Promise<T>;
  }

  async login(username: string, password: string): Promise<string> {
    const loginData: Login = { username, password };
    const response = await this.request<LoginResponse>('/login', 'POST', loginData);
    return response.authToken;
  }

  async getAppointments(): Promise<AppointmentsDto> {
    return this.request<AppointmentsDto>('/appointments', 'GET');
  }

  async getClinic(clinicId: number): Promise<Clinic> {
    return this.request<Clinic>(`/clinics/${clinicId}`, 'GET');
  }

  async getClinics(): Promise<ClinicsDto> {
    return this.request<ClinicsDto>(`/clinics`, 'GET');
  }
}

export default new API();
