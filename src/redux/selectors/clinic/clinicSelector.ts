import { createSelector } from "reselect";

import appointmentsSelector from "../appointments/appointmentsSelector";

const getClinics = (state: any) => state.clinics.providers;

const clinicSelector = createSelector(
  [getClinics, appointmentsSelector],
  (providers, appointments) => {
    const clinicsData = appointments.map((appointment: any) => {
      const provider = providers.find(
        (provider: any) => provider.id === appointment.clinicId
      );
      return {
        address: provider.address,
        city: provider.city,
        name: provider.name,
        state: provider.state,
        zipCode: provider.zipcode,
        ...appointment,
      };
    });

    return {
      clinicsData,
    };
  }
);

export default clinicSelector;
