interface AppointmentsDto {
  appointmentSlots: AppointmentSlot[];
}

interface AppointmentSlot {
  id: number;
  startTime: string;
  clinicId: number;
  durationInMinutes: number;
  provider: Provider;
}

interface Clinic {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Provider {
  id: number;
  name: string;
  credentials?: string;
  language?: string;
  phoneNumber?: string;
}

interface ClinicsDto {
  clinics: Clinic[];
}

interface Login {
  username: string;
  password: string;
}

interface LoginResponse {
  username: string;
  authToken: string;
}

interface ApiError {
  error: string;
}
