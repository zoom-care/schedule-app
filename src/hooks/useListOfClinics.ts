import { useState, useEffect } from 'react';
import { iClinic } from '../interfaces';
import { mockAppointmentSlots } from '../mocks/data/appointmentSlots';

export const useListOfClinics = () => {
  const [listOfClinics, setListOfClinics] = useState<iClinic[]>([]);

  const apiCall = async () => {
    const res = await mockAppointmentSlots;
    setListOfClinics(res);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return { listOfClinics };
};
