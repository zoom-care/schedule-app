import { ProviderDto } from "./Provider";

export interface AppointmentSlotDto {
    id: number;
    startTime: string;
    clinicId: number;
    durationInMinutes: number;
    provider: ProviderDto;
}
