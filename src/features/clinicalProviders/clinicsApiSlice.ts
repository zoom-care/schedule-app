import { apiSlice } from '../../app/api/apiSlice';
import { ClinicsDto } from '../../zoomcare-api';

export const clinicsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClinics: builder.query<ClinicsDto, void>({
      query: () => ({
        url: '/api/clinics',
      }),
    }),
  }),
});

export const { useGetClinicsQuery } = clinicsApiSlice;
