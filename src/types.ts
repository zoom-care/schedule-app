export interface ClinicType {
  id: number,
  name: string,
  address: string,
  city: string,
  state: string,
  zipcode: string
}

export interface AppointmentType {
  id: number,
  clinicId: number,
  durationInMinutes: number,
  provider: ProviderType,
  startTime: string
}

export interface ProviderType {
  id: number,
  name: string,
  credentials: string,
  language: string,
  phoneNumber: string
}
