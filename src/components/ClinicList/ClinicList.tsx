import { useEffect, useState } from 'react';
import { getAllClinics } from '../../services/clinic';
import { getAppointments } from '../../services/appointment';
import { AppointmentSlot, Clinic } from '../../zoomcare-api';
import { ClinicItem } from '../Clinic/Clinic';

export const ClinicList = () => {
  const [clinics, setClincs] = useState<Clinic[]>([]);
  const [appointments, setAppointments] = useState<AppointmentSlot[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [clinicDto, appointmentDto] = await Promise.all([
          getAllClinics(),
          getAppointments(),
        ]);
        setClincs(clinicDto.clinics);
        setAppointments(appointmentDto.appointmentSlots);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const appointmentsByClinic = (clinicId: number) =>
    appointments.filter((app: AppointmentSlot) => app.clinicId === clinicId);

  return (
    <div>
      {clinics.map((clinic, i) => (
        <ClinicItem
          key={i}
          clinic={clinic}
          appointments={appointmentsByClinic(clinic.id)}
        />
      ))}
    </div>
  );
};

