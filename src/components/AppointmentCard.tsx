import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { AppointmentSlot, Clinic } from "../zoomcare-api";
import axios from "axios";

const CustomCard = styled(Card)({
  margin: "auto",
  maxWidth: "100%",
  width: "100%",
  position: "relative",
  height: 200,
  border: '1px solid grey',
  borderRadius: 'unset'
});

const CustomCardContent = styled("div")(({
  paddingBlock: "0.75rem",
  paddingInline: "0.5rem",
  display: "flex",
  gap: "0.25em",
  flexDirection: "column",
  cursor: "pointer",
}));

function AppointmentCard({appointmentSlot, authToken}: {appointmentSlot: AppointmentSlot, authToken: string}) {
  const {
    id, startTime, clinicId, durationInMinutes, provider
  } = appointmentSlot;

  const [clinicData, setClinicData] = useState<Clinic>({
    id: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  });

  useEffect(() => {
    if (clinicId) {
      getClinicData(clinicId);
    }
  }, [clinicId]);

  const getClinicData = async (id: number) => {
    let result: Clinic = (await axios.get<Clinic>(`/api/clinics/${id}`, {
      headers: {Authorization: authToken}
    })).data;
    setClinicData(result);
  }

  return (
    <CustomCard>
      <CustomCardContent>

      </CustomCardContent>
    </CustomCard>
  );
}

export default AppointmentCard;
