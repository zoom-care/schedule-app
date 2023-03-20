import React from "react";
import { getFormattedDate, getLocalFormattedPhoneNumber } from "../../utils";

type ProviderCardProps = {
  appointments: AppointmentSlot[];
};

export const ProviderCard: React.FC<ProviderCardProps> = ({ appointments }) => {
  if (appointments.length === 0) {
    return <></>;
  }
  const provider = appointments[0].provider;
  return (
    <div className="d-flex flex-row my-2">
      <img
        className="me-3 rounded-circle"
        src="/provider.png"
        width={128}
        height={128}
        alt="Provider"
      />
      <div className="">
        <h5 className="mt-0" style={{ color: "#1cb6e3", fontWeight: 700 }}>
          {provider.name}, {provider.credentials}
        </h5>
        {provider.phoneNumber && (
          <p>{getLocalFormattedPhoneNumber(provider.phoneNumber)}</p>
        )}
        <div className="d-flex flex-row">
          {appointments.map((appointment) => (
            <button
              key={`slot-key-${appointment.id}`}
              className="btn btn-dark me-2"
            >
              {getFormattedDate(appointment.startTime)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
