import { useState, useEffect } from 'react';
import { getAppointments, getClinic, login, setToken } from '../services/api';
import { IProviderProps } from '../zoomcare-api';

const useAppointmentProviders = () => {
  const [providers, setProviders] = useState<IProviderProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await login('username', 'password');
        setToken(token);

        const appointmentsData = await getAppointments();

        console.log('debug appointmentsData', appointmentsData);

        const providersData = [];

        for (const slot of appointmentsData?.appointmentSlots) {
          try {
            const clinicData = await getClinic(slot.clinicId);
            const clinic = clinicData;

            if (clinic) {
              const providerData = {
                provider: slot.provider,
                appointmentSlots: slot.startTime,
                clinicName: clinic.name,
                clinicLocation: clinic.address,
                clinicCity: clinic.city,
                clinicState: clinic.state,
                clinicZipCode: clinic.zipcode,
                durationInMinutes: slot.durationInMinutes,
              };
              providersData.push(providerData);
            }
          } catch (error) {
            console.error(`Error: ${error}`);
          }
        }
        setProviders(providersData);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    fetchData();
  }, []);

  return providers;
};

export default useAppointmentProviders;
