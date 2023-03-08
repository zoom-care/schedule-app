import { createSelector } from "reselect";

import { convertTimes } from "../../../utils";

const getAppointments = (state: any) => state.clinics.appointments;

const appointmentsSelector = createSelector(
  [getAppointments],
  (appointments) => {
    return appointments.map((appointment: any) => {
      return {
        startTimes: convertTimes(appointment.startTime),
        providerName: appointment.provider.name,
        clinicId: appointment.clinicId,
        credentials: appointment.provider.credentials,
        phoneNumber: appointment.provider.phoneNumber,
      };
    });
  }
);

export default appointmentsSelector;
