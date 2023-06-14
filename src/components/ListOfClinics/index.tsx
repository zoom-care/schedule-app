import {
  AppointmentSlot,
  Provider,
  Clinic as iClinic,
} from '../../zoomcare-api';
import { Clinic } from '../Clinic';

type Props = {
  clinic: iClinic;
  appointments: AppointmentSlot[];
};

export const ListOfClinics = ({ clinic, appointments }: Props) => {
  let nProvider: Provider[] = [];
  return (
    <>
      {appointments.map((appointment) => {
        nProvider.push(appointment.provider);
        return (
          clinic.id === appointment.id && (
            <Clinic
              key={appointment.id + appointment.startTime}
              {...appointment}
              {...clinic}
              phoneNumber={appointment.provider.phoneNumber ?? ''}
              credentials={appointment.provider.credentials ?? ''}
              provider={nProvider}
            />
          )
        );
      })}
    </>
  );
};
