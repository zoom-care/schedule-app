import React, { useEffect, useState } from 'react';
import { AppointmentType, ClinicType } from '../types';
import Clinic from './Clinic';
import { getClinics } from '../hooks/getClinics';
import { getAppointments } from '../hooks/getAppointments';

interface ClinicListProps {
  token: string
}

const ClinicList: React.FC<ClinicListProps> = ({ token }) => {
  const [clinics, setClinics] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    getClinics(token, setClinics);
    getAppointments(token, setAppointments);
    setBusy(false);
  }, []);

  const getClinicList = () => {
    return clinics.map((clinic: ClinicType) => {
      const clinicAppointments = appointments.filter((appointment: AppointmentType) => {
        return appointment.clinicId === clinic.id
      });

      const providers = getProviders(clinic.id);

      return <Clinic key={'clinic' + clinic.id} clinic={clinic} providers={providers} appointments={clinicAppointments} />
    });
  }

  const getProviders = (clinicId: number) => {
    const clinicAppointments: AppointmentType[] = appointments.filter((appointment: AppointmentType) => {
      if (appointment.clinicId === clinicId) return true;
      return false;
    });
    const providersFromAppointments = clinicAppointments.map((appointment) => {
      return JSON.stringify(appointment.provider);
    });
    const providers: string[] = [];
    for (let i = 0; i < providersFromAppointments.length; i++) {
      if (!providers.includes(providersFromAppointments[i])) {
        providers.push(providersFromAppointments[i]);
      }
    }
    const parsedProviders = providers.map((provider) => {
      return JSON.parse(provider);
    })
    return parsedProviders;
  }

  return (
    <>
      {
        !isBusy && (
          <div className="ClinicList">
            {getClinicList()}
          </div>
        )
      }
    </>
  );
}

export default ClinicList;
