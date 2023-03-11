import { AppointmentSlot, Clinic, LoginResponse, Provider } from '../zoomcare-api';

export type ClinicStore = {
  loading: boolean;
  clinics: Clinic[];
  appointments: AppointmentSlot[];
  authUser: LoginResponse;
  validAuth: boolean;
  error: string;
  appointmentsByProvider: clinicWithAppointments[];
  userLogin: (username: string, password: string) => Promise<void>;
  userLoout: () => void;
  getClinicsAppointments: () => Promise<void>;
};

export interface clinicWithAppointments extends Clinic {
  appointments: AppointmentsByProvider[]
}

export interface Appointments {
  id: number;
  startTime: string;
  clinicId: number;
  durationInMinutes: number;
  formatedTime: string;
}

export type AppointmentsByProvider = {
  provider: Provider;
  list: Appointments[];
};
