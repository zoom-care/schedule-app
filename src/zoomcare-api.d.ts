export interface IAppointmentsDto {
    appointmentSlots: IAppointmentSlot[];
}

export interface IAppointmentSlot {
    id: number;
    startTime: string;
    clinicId: number;
    durationInMinutes: number;
    provider: IProvider;
}

export interface IClinic {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
}

export interface IProvider {
    id: number;
    name: string;
    credentials?: string;
    language?: string;
    phoneNumber?: string;
}

export interface IClinicsDto {
    clinics: IClinic[];
}

export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginResponse {
    username: string;
    authToken: string;
}

export interface IApiError {
    error: string;
}

export interface IProviderProps {
    appointmentSlots: string;
    clinicCity: string;
    clinicLocation: string;
    clinicName: string;
    clinicState: string;
    clinicZipCode: string;
    provider: IProvider;
    durationInMinutes: number;
  }
