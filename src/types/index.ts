export interface IUserData {
    username: string;
    authToken: string;
}

export interface IProviderData{
    credentials: string;
    id: Number;
    language: string;
    name: string;
    phoneNumber: string;
}

export interface IAppointmentsData{
    clinicId: number;
    durationInMinutes: number;
    provider: IProviderData;
    startTime: string;
}

export interface IClinicData{
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
}

export interface IScheduleData {
    clinicData: IClinicData;
    appointmentsData: IAppointmentsData;
}