import { useContext, useEffect, useState } from 'react';
import { getAllClinics } from '../../services/clinic';
import { getAppointments } from '../../services/appointment';
import { AppointmentSlot, Clinic, LoginResponse } from '../../zoomcare-api';
import { ClinicItem } from '../Clinic/Clinic';
import { UserContext } from '../../context/UserContext';

export const ClinicList = () => {
  const [clinics, setClincs] = useState<Clinic[]>([]);
  const [appointments, setAppointments] = useState<AppointmentSlot[]>([]);
  const [error, setError] = useState<string>('');

  const user: LoginResponse = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const [clinicDto, appointmentDto] = await Promise.all([
          getAllClinics(user.authToken),
          getAppointments(user.authToken),
        ]);
        setClincs(clinicDto.clinics);
        setAppointments(appointmentDto.appointmentSlots);
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, [user.authToken]);

  const appointmentsByClinic = (clinicId: number) =>
    appointments.filter((app: AppointmentSlot) => app.clinicId === clinicId);

  if (error) {
    return <p>{error}</p>;
  }

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

