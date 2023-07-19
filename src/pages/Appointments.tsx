import React, { FC, useEffect, useState, useContext } from "react";
import useFetch from "use-http";
import AuthContext from "../store/auth-context";
import { AppointmentSlot } from "../zoomcare-api";
import AppointmentComponent from "../components/Appointment";
import "./Appointments.css";

const Appointments: FC = () => {
  const ctx = useContext(AuthContext);

  const [appointments, setAppointments] = useState<AppointmentSlot[]>([]);

  const { get, response, loading, error } = useFetch("api", {
    headers: { Authorization: ctx.token },
  });

  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    const { appointmentSlots } = await get(`/appointments`);
    console.log("appointments: ", appointmentSlots);
    if (response.ok) setAppointments(appointmentSlots);
  }
  return (
    <div className="appointments-container">
      {error && "Error!"}
      {loading && "Loading..."}
      {appointments.map((appointment) => (
        <AppointmentComponent key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default Appointments;
