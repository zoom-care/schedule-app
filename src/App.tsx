import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import AppointmentCard from "./components/AppointmentCard";
import {LoginResponse, Login, AppointmentsDto, AppointmentSlot} from './zoomcare-api';

const CardListGrid = styled("div")({
  display: "grid",
  background: "#eeeeee",
  padding: 30,
});

function App() {

  const [authToken, setAuthToken] = useState('');
  const [appointmentSlots, setAppointmentSlots] = useState<AppointmentSlot[]>([]);

  useEffect(() => {
    getAuthToken();
  }, [])

  const getAuthToken = async () => {
    const requestBody: Login = {
      username: 'username',
      password: 'password'
    };

    let result: LoginResponse = (await axios.post<LoginResponse>('/api/login', requestBody)).data;
    setAuthToken(result.authToken);
  }

  useEffect(() => {
    if (authToken) {
      getAppointments();
    }
  }, [authToken]);

  const getAppointments = async () => {
    let result: AppointmentsDto = (await axios.get<AppointmentsDto>('/api/appointments', {
      headers: {Authorization: authToken}
    })).data;
    setAppointmentSlots(result.appointmentSlots);
  }

  return (
    <Box
      sx={{
        margin: "2em",
      }}
    >
      <CardListGrid>
        {
          appointmentSlots.map((appointmentSlot, index) => {
            return (
              <AppointmentCard
                appointmentSlots={appointmentSlots}
                appointmentSlot={appointmentSlot}
                authToken={authToken}
                key={index}
              />
            );
          })
        }
      </CardListGrid>
    </Box>
  );
}

export default App;
