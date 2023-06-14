import { useState, useEffect } from 'react';
import { getAllClinics } from '../api/clinicList';
import { getAppointments } from '../api/listOfAppointments';
import { Clinic, AppointmentSlot } from '../zoomcare-api';

export const useListOfProviders = (authToken: string) => {
  const [clinics, setClincs] = useState<Clinic[]>([]);
  const [appointments, setAppointments] = useState<AppointmentSlot[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [clinicDto, appointmentDto] = await Promise.all([
          getAllClinics(authToken),
          getAppointments(authToken),
        ]);
        setClincs(clinicDto.clinics);
        setAppointments(appointmentDto.appointmentSlots);
      } catch (error: any) {
        console.error(error.message);
      }
    })();
  }, [authToken]);

  const appointmentsByClinic = (clinicId: number) =>
    appointments.filter((app: AppointmentSlot) => app.clinicId === clinicId);

  return {
    clinics,
    appointmentsByClinic,
  };
};
