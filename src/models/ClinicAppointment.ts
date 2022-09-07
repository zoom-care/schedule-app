import { AppointmentSlot, Clinic } from '../zoomcare-api'

export interface Schedule {
  id: number
  time: Date
}

export interface GroupedAppointment extends Omit<AppointmentSlot, 'startTime'> {
  availableTimes: Schedule[]
}

export interface ExtendedGroupedAppointmentSlots extends Omit<GroupedAppointment, 'clinicId'> {
  clinic: Clinic | undefined
}

// id: number;
//     startTime: Date[];
//     durationInMinutes: number;
//     provider: Provider;
//     clinic: Clinic | undefined;
