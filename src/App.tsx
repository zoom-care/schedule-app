import React from 'react';
import './App.css';
import { AppointmentSlot, Clinic } from "./zoomcare-api";
import AppointmentDescription from './AppointmentDescription';
import { getAppointments, getAuthToken, getClinicsObj, groupAppointmentByProviderAndClinic, ProviderClinicKey } from './utils';

function App() {
  const [groupedAppointments, setGroupedAppointments] = React.useState<Record<ProviderClinicKey, AppointmentSlot[]>>({})
  const [clinicsObj, setClinicObj] = React.useState<Record<number, Clinic>>({})

  React.useEffect(() => {
    (async function request() {
      if (!await getAuthToken()) return
      const appointments = await getAppointments()
      setClinicObj(await getClinicsObj(appointments))
      setGroupedAppointments(groupAppointmentByProviderAndClinic(appointments))
    })()
  }, []);

  return (
    <div>
      {Object.values(groupedAppointments).map(([appointmentOne, ...others]) => (
        <AppointmentDescription 
          clinic={clinicsObj[appointmentOne.clinicId]} 
          provider={appointmentOne.provider} 
          startTimeArr={[appointmentOne.startTime, ...others.map(it => it.startTime)]}
        />
      ))}
    </div>
  );
}

export default App;
