import { apiSlice } from '../../app/api/apiSlice';
import { AppointmentsDto } from '../../zoomcare-api';

export const appointmentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query<AppointmentsDto, void>({
      query: () => ({
        url: '/api/appointments',
      }),
    }),
  }),
});

export const { useGetAppointmentsQuery } = appointmentsApiSlice;
