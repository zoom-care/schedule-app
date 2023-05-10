import { useState } from "react";
import { AppointmentsDto } from "../../Core/zoomcare-api";
import { GetAppointments } from "../../Domain/UseCase/Appointments/GetAppointments";
import { AppointmentsRepositoryImpl } from "../../Data/Repository/AppointmentsRepositoryImpl";

export default function AppointmentsViewModel() {
  const [appointments, setAppointments] = useState<AppointmentsDto>();

  const UseCase = new GetAppointments(new AppointmentsRepositoryImpl());

  async function getAppointments() {
    setAppointments(await UseCase.invoke());
  }

  return {
    getAppointments,
    appointments,
  };
}
