import React, { useMemo } from 'react';
import { IProviderProps } from '../../zoomcare-api';
import { getAppointmentSlots } from '../../utils';
import { parsePhoneNumber } from "awesome-phonenumber";
import Appointments from '../Appointments';

const Provider: React.FC<IProviderProps> = (props) => {
  const {
    appointmentSlots,
    clinicCity,
    clinicLocation,
    clinicName,
    clinicState,
    clinicZipCode,
    provider,
    durationInMinutes,
  } = props;
  const { name, credentials, phoneNumber } = provider;
  const formatPhoneNumber = useMemo(() => {
    const phone = parsePhoneNumber(phoneNumber || '');

    return phone?.number?.national;
}, [phoneNumber]);
  const appointments = getAppointmentSlots(appointmentSlots, durationInMinutes);

  return (
    // with simple --> border-x border-t border-solid border-gray-300 last:border-b
    <div className="flex flex-col w-full p-4 max-w-2xl text-secondary text-base shadow">
      <label className="font-bold text-xl">{clinicName}</label>
      {clinicLocation && (
        <p className="font-semibold">{clinicLocation}</p>
      )}
      {clinicState && clinicCity && clinicZipCode && (
        <p className="font-semibold">
          {`${clinicCity}, ${clinicState}, ${clinicZipCode}`}
        </p>
      )}
      <div className="flex mt-3">
        <div className="flex justify-center items-start w-full max-w-[100px] mt-4">
          <img className="w-24 h-24 rounded-full" src="provider.png" alt="Provider" />
        </div>
        <div className="flex flex-col h-full ml-4">
          <p className="font-bold text-xl text-primary">
            {`${name}, ${credentials}`}
          </p>
          <p className="my-1 font-medium">
            {formatPhoneNumber}
          </p>
          <div>

          </div>
          <Appointments appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default Provider;
