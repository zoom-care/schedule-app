import { IProvider } from './Provider'
import { IClinic } from './Clinic'

export interface IAppointmentSlot {
    id: number;
    clinicId: number;
    durationInMinutes: number;
    provider: IProvider;
    startTime: string;
}

export interface IAppointmentsDto {
    appointmentSlots: IAppointmentSlot[];
}

export interface IAppointments {
    clinic: IClinic,
    provider: IProvider
}