import { create } from 'zustand';
import { format } from 'date-fns';
import { ApiError } from '../zoomcare-api';
import { AppointmentsByProvider, ClinicStore, clinicWithAppointments } from '../types/store.types';
import api from '../api';

import { DATE_FORMAT } from '../constants/store.constants';

export const clinicStore = create<ClinicStore>((set, get) => ({
  loading: false,
  clinics: [],
  appointments: [],
  appointmentsByProvider: [],
  error: '',
  authUser: { username: '', authToken: '' },
  validAuth: false,
  userLogin: async (username: string, password: string) => {
    try {
      set({ loading: true });
      const authResponse = await api.auth.login(username, password);
      const authUser = authResponse.data;
      localStorage.setItem('token', JSON.stringify(authUser.authToken));
      set({ authUser, loading: false, validAuth: true });
    } catch (err) {
      const response = err as ApiError;
      set({ error: response.error, loading: false });
    }
  },
  userLoout: () => {
    set({ validAuth: false, authUser: { username: '', authToken: '' } });
    localStorage.removeItem('token');
  },
  getClinicsAppointments: async () => {
    try {
      set({ loading: true });
      const { authUser } = get();
      const clinicsResponse = await api.clinics.getList(authUser.authToken);
      set({ clinics: clinicsResponse.data.clinics });

      const clinicList = new Map<number, clinicWithAppointments>(
        clinicsResponse.data.clinics.map((clinic) => [clinic.id, { ...clinic, appointments: [] }])
      );

      const appointmentsResponse = await api.appointments.getList(authUser.authToken);
      set({ appointments: appointmentsResponse.data.appointmentSlots });

      appointmentsResponse.data.appointmentSlots.forEach((appointment) => {
        const currentClinic = clinicList.get(appointment.clinicId);
        const { provider, ...currentAppointment } = appointment;
        const formatedTime = format(new Date(appointment.startTime), DATE_FORMAT);

        if (currentClinic) {
          const providerIndex = currentClinic?.appointments.findIndex(
            (appointment) => appointment.provider.id === provider.id
          );

          if (providerIndex >= 0) {
            currentClinic.appointments[providerIndex].list.push({ ...currentAppointment, formatedTime });
            clinicList.set(appointment.clinicId, currentClinic);
          } else {
            const appointments: AppointmentsByProvider = { provider, list: [{ ...currentAppointment, formatedTime }] };
            currentClinic.appointments.push(appointments);
            clinicList.set(appointment.clinicId, currentClinic);
          }
        }
      });

      set({ appointmentsByProvider: [...clinicList.values()], loading: false });
    } catch (err) {
      const response = err as ApiError;
      set({ error: response.error });
    }
  },
}));
