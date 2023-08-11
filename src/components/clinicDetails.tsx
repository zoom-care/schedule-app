import ClinicComponent from './clinic';
import { AppointmentSlot, Clinic, LoginResponse } from '../zoomcare-api';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/appContext';
import { getClinics, getAppointments } from '../services/api';

function ClinicDetails() {

    const [clinics, setClincs] = useState<Clinic[]>([]);
    const [appointment, setAppointments] = useState<AppointmentSlot[]>([]);
    const [error, setError] = useState<string>('');

    const login: LoginResponse = useContext(AppContext);

    useEffect(() => {
        (async () => {
          try {
            const [cliniList, appointmentList] = await Promise.all([
              getClinics(login.authToken),
              getAppointments(login.authToken),
            ]);
            setClincs(cliniList.clinics);
            setAppointments(appointmentList.appointmentSlots);
          } catch (error: any) {
            setError(error.message);
          }
        })();
      }, [login.authToken]);

    const getAppointmentsByProvider = (clinicId: number, providerId: number) =>
    appointment.filter((app: AppointmentSlot) => app.provider.id === providerId && app.clinicId === clinicId);

    const getAppointmentsByClinic = (clinicId: number) =>
    appointment.filter((app: AppointmentSlot) => app.clinicId === clinicId);
    

    if (error) {
        return <p>{error}</p>;
      }

    return (
        <>
            <div>
                {clinics.map((cli) => (
                    getAppointmentsByClinic(cli.id).map((app, id) => (
                        <ClinicComponent
                        key={id}
                        provider={app.provider}
                        clinic={cli}
                        appointments={getAppointmentsByProvider(cli.id, app.provider.id)}
                        />
                        ))
                ))}
            </div>
        </>
    );
  }
  
  export default ClinicDetails;