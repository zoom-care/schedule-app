import { useAppointments } from '../hooks';
import { AppointmentSlot } from '../zoomcare-api';
import Appointment, { AppointmentProps } from './Appointment';
import './AppointmentList.css';

interface AppointmentsMap {
  [key: string]: AppointmentProps;
}

function AppointmentList() {
  const { data: appointments, isLoading } = useAppointments();
  const transformedAppointments: AppointmentsMap = appointments
    ? appointments.reduce((acc: AppointmentsMap, cur: AppointmentSlot) => {
        const key = `${cur.clinicId}-${cur.provider.id}`;

        return {
          ...acc,
          [key]: {
            clinicProviderKey: key,
            clinicId: cur.clinicId,
            provider: cur.provider,
            startTimes: [
              ...(acc[key] || { startTimes: [] }).startTimes,
              cur.startTime,
            ],
          },
        };
      }, {})
    : {};

  if (isLoading) return <p>Loading AppointmentList...</p>;

  return (
    <div className="appointment-list">
      {Object.keys(transformedAppointments).map((key: string) => (
        <Appointment key={key} {...transformedAppointments[key]} />
      ))}
    </div>
  );
}

export default AppointmentList;
