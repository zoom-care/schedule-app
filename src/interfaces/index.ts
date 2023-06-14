export interface iProvider {
  id: number;
  name: string;
  credentials: string;
  language: string;
  phoneNumber: string;
}

export interface iClinic {
  id: number;
  clinicId: number;
  durationInMinutes: number;
  provider: iProvider;
  startTime: string;
}

export interface iClinicInfo {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}
