import { createSelector } from "reselect";

import { parseTimes } from "../../../helpers/providersHelper";

const getAppointments = (state: any) => state.clinics.appointments;

const appointmentsSelector = createSelector(
  [getAppointments],
  (appointments) => {
    return appointments.map((appointment: any) => {
      return {
        startTimes: parseTimes(appointment.startTime),
        providerName: appointment.provider.name,
        clinicId: appointment.clinicId,
        credentials: appointment.provider.credentials,
        phoneNumber: appointment.provider.phoneNumber,
      };
    });
  }
);

export default appointmentsSelector;
