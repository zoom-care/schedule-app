import React from "react";
import { AppointmentType, ClinicType, ProviderType } from "../types";
import './Clinic.css';
import Provider from "./Provider";

interface ClinicProps {
  clinic: ClinicType
  providers: ProviderType[]
  appointments: AppointmentType[]
}

const Clinic: React.FC<ClinicProps> = ({clinic, providers, appointments}) => {
  const getProviderList = () => {
    return providers.map((provider) => {
      const providerAppointments = appointments.filter((appointment: AppointmentType) => {
        return appointment.provider.id === provider.id;
      });
      return <Provider key={'provider' + provider.id} provider={provider} providerAppointments={providerAppointments} />
    });
  }
  return (
    <div className="Clinic-item">
      <div className="Clinic-name">
        {clinic.name}
      </div>
      <div>
        {clinic.address}
      </div>
      <div className="ProviderList">
        {getProviderList()}
      </div>
    </div>
  )
}

export default Clinic;
