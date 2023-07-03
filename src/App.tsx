import React, { useEffect, useState } from 'react';
import './App.css';
import API from './services/api';
import { Provider } from './zoomcare-api';
import ProviderComponent, { ProviderProps } from './components/providers';

function App() {
  const [providers, setProviders] = useState<ProviderProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await API.login('username', 'password');
        API.setToken(token);

        const appointmentsData = await API.getAppointments();
        const appointmentSlots = appointmentsData.appointmentSlots;

        const providersData = [];

        for (const slot of appointmentSlots) {
          try {
            const clinicData = await API.getClinic(slot.clinicId);
            const clinic = clinicData;

            if (clinic) {
              const providerData = {
                provider: slot.provider,
                appointmentSlots: [slot.startTime],
                clinicName: clinic.name,
                clinicLocation: clinic.address,
                clinicCity: clinic.city,
                clinicState: clinic.state,
                clinicZipCode: clinic.zipcode
              };
              providersData.push(providerData);
            }
          } catch (error) {
            console.error('Error al obtener la clínica:', error);
          }
        }
        setProviders(providersData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);


  console.log("🚀 ~ file: App.tsx:9 ~ App ~ providers:", providers)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Providers</h1>
        <div style={{ width: "50%" }}>
          {providers.map((provider, index) => (
            <ProviderComponent
              key={index}
              provider={provider.provider}
              clinicName={provider.clinicName || ''}
              clinicLocation={provider.clinicLocation}
              clinicCity={provider.clinicCity}
              clinicState={provider.clinicState}
              clinicZipCode={provider.clinicZipCode}
              appointmentSlots={provider.appointmentSlots}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
