import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAppointments } from '../api';
import { Appointment } from '../types';
import Clinic from './Clinic';

type Slots = {
  [key: number]: Appointment[];
};

const ClinicList = ({ updateToken }: any) => {
  const [appointments, setAppointments] = useState<Slots>({});

  useEffect(() => {
    getAppointments()
      .then((response: any) => {
        const slots = response.appointmentSlots.reduce(
          (slots: Slots, item: Appointment) => {
            if (!slots[item.clinicId]) {
              slots[item.clinicId] = [item];
            } else {
              slots[item.clinicId].push(item);
            }
            return slots;
          },
          {}
        );
        setAppointments(slots);
      })
      .catch((response) => {
        updateToken({});
      });
  }, []);

  return (
    <Container>
      {Object.keys(appointments).map((clinicId: any) => (
        <Clinic id={clinicId} data={appointments[clinicId]} />
      ))}
    </Container>
  );
};

export default ClinicList;
