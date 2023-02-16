import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing'
import { AppointmentSlot, LoginResponse, Slot, ClinicReq } from './zoomcare-api'


function App(): JSX.Element {
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    const loginObject: RequestInit = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'micheal', password: 'password' })
    }

    const setup = async (): Promise<void> => {
      const login: LoginResponse = await (await fetch('/api/login', loginObject)).json();
      const getObject: RequestInit = {
        headers: { 'Authorization': `${login.authToken}` }
      }

      const { appointmentSlots }: { appointmentSlots: AppointmentSlot[] } = await (await fetch('/api/appointments', getObject)).json();
      const data: Slot[] = [];

      for (let i = 0; i < appointmentSlots.length; i++) {
        const currSlot = appointmentSlots[i]
        const clinic: ClinicReq = await (await fetch(`/api/clinics/${currSlot.clinicId}`, getObject)).json()

        if (clinic.error === undefined) {
          data[currSlot.provider.id - 1] ?
            data[currSlot.provider.id - 1].appointmentSlots.push(currSlot) :
            data[currSlot.provider.id - 1] = { clinic, appointmentSlots: [currSlot], provider: currSlot.provider }
        }
      }

      setSlots(data);
    }

    if (!slots.length) {
      setup();
    }
  }, [slots]);

  return (
    <div className="h-[900px] w-screen bg-white">
      <Routes>
        <Route path="/" element={<Landing slots={slots} />} />
      </Routes>
    </div>
  );
}

export default App;
