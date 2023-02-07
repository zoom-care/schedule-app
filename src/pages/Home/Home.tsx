import React, { useEffect, useState } from "react";

import { Loading, Error } from "../../components";
import { useAuthContext } from "../../context/context";
import { getAppointment } from "../../services/apis";
import { ApiError, AppointmentsDto } from "../../zoomcare-api";
import AppointmentItem from "./components/AppointmentItem";

import "./styles.css";

const Home = () => {
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<AppointmentsDto>();
  const [isGetError, setIsGetError] = useState<boolean>(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const appointmentsResult: AppointmentsDto | ApiError =
        await getAppointment(token);
      if ("error" in appointmentsResult) {
        setIsGetError(true);
      } else {
        setAppointments(appointmentsResult);
      }
    } catch (error) {
      console.log("appointment api call error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="home">
      {isLoading && <Loading />}
      {isGetError ? (
        <Error />
      ) : (
        appointments?.appointmentSlots.map((appointmentSlot, index) => {
          return <AppointmentItem key={index} data={appointmentSlot} />;
        })
      )}
    </div>
  );
};

export default Home;
