interface IProvider {
    id: number;
    name: string;
    credentials: string; 
    language: string;
    phoneNumber: string;
}

export interface IAppointment {
    id: number;
    clinicId: number;
    durationInMinutes: number;
    provider: IProvider;
    startTime: string;
}
