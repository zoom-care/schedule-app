import React from "react";
import { AppointmentType } from "../types";
import './AppointmentSlot.css';

interface AppointmentSlotProps {
  appointment: AppointmentType
}

const AppointmentSlot: React.FC<AppointmentSlotProps> = ({appointment}) => {

  return (
    <div className="AppointmentSlot">
      <div className="AppointmentSlot-button">{appointment.startTime}</div>
    </div>
  )
}

export default AppointmentSlot;
