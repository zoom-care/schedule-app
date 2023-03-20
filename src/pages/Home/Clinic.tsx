import React, { useMemo } from "react";
import { useClinicById } from "../../api/useRequest";
import { ProviderCard } from "./Provider";

type ClinicCardProps = {
  clinicId: number;
  appointments: AppointmentSlot[];
};

export const ClinicCard: React.FC<ClinicCardProps> = ({
  clinicId,
  appointments,
}) => {
  const clinicQuery = useClinicById(clinicId);
  const appointsGroupedByProvider = useMemo<[string, AppointmentSlot[]][]>(
    () =>
      appointments
        ? Object.entries(
            appointments.reduce<Record<string, AppointmentSlot[]>>(
              (res, appoint) => ({
                ...res,
                [appoint.provider.id]: [
                  ...(res[appoint.provider.id.toString()] ?? []),
                  appoint,
                ],
              }),
              {}
            )
          )
        : [],
    [appointments]
  );
  if (!clinicQuery.data) {
    return <></>;
  }
  return (
    <div className="card border-b-0 my-2">
      <div className="card-header border-0 bg-transparent">
        <h5 style={{ fontWeight: "800" }}>{clinicQuery.data.name}</h5>
        <label>{clinicQuery.data.address}</label>
        <br />
        <label>
          {clinicQuery.data.city}, {clinicQuery.data.state},{" "}
          {clinicQuery.data.zipcode}{" "}
        </label>
      </div>

      <div className="card-body d-flex flex-column">
        {appointsGroupedByProvider.map(([providerId, appointments]) => (
          <ProviderCard
            key={`provider-key-${providerId}`}
            appointments={appointments}
          />
        ))}
      </div>
    </div>
  );
};
