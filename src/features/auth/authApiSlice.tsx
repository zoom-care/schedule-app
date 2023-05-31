import { apiSlice } from '../../app/api/apiSlice';
import { LoginResponse, Login } from '../../zoomcare-api';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Login>({
      query: (credentials) => ({
        url: '/api/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
