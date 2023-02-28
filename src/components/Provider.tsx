import React from "react";
import { AppointmentType, ProviderType } from "../types";
import AppointmentSlot from "./AppointmentSlot";
import './Provider.css';

interface ProviderProps {
  provider: ProviderType
  providerAppointments: AppointmentType[]
}

const Provider: React.FC<ProviderProps> = ({provider, providerAppointments}) => {
  const getProviderAppointmentList = () => {
    return providerAppointments.map((appointment) => {
      return <AppointmentSlot key={'appointment' + appointment.startTime} appointment={appointment} />
    });
  }
  return (
    <div className="Provider-item">
      <span>
        <img className="Provider-image" src={require('../images/provider.png')}></img>
      </span>
      <span>
        <div className="Provider-name-title">
          {provider.name}, {provider.credentials}
        </div>
        <div>
          {provider.phoneNumber}
        </div>
        <div className="ProviderAppointments">
          {getProviderAppointmentList()}
        </div>
      </span>
    </div>
  )
}

export default Provider;
