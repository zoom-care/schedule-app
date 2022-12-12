import React, { useEffect, useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { AppointmentSlot, Clinic } from "../zoomcare-api";
import axios from "axios";

const CustomCard = styled(Card)({
  margin: "auto",
  maxWidth: "100%",
  width: "100%",
  position: "relative",
  height: 260,
  border: '1px solid grey',
  borderRadius: 'unset'
});

const ClinicContent = styled("div")(({
  paddingBlock: "0.75rem",
  paddingInline: "0.5rem",
  display: "flex",
  gap: "0.25em",
  flexDirection: "column",
}));

const ProviderContent = styled("div")(({
  paddingBlock: "0.75rem",
  paddingInline: "0.5rem",
  display: "flex",
  gap: "0.25em",
  flexDirection: "row",
  alignItems: 'center'
}));

const ProviderImage = styled('img')(({src: imagePath}) => ({
  width: 100,
  height: 100,
  borderRadius: '50%',
  background: `url(${imagePath})`
}));

const ProviderDetail = styled("div")(({
  paddingBlock: "0.75rem",
  paddingInline: "0.5rem",
  display: "flex",
  flexDirection: "column",
}));

const TimeButtonList = styled("div")(({
  paddingBlock: "0.75rem",
  paddingInline: "0.5rem",
  display: "flex",
  gap: "0.25em",
  flexDirection: "row",
  alignItems: 'center'
}));

function AppointmentCard({appointmentSlot, authToken, appointmentSlots}: {appointmentSlot: AppointmentSlot, authToken: string, appointmentSlots: AppointmentSlot[]}) {
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

  const convertTimeFormat = (dateTime: string) => {
    let tmpDateTimeArr = dateTime.split(" ");
    let timeRange = tmpDateTimeArr[1];
    let time = timeRange.split("-")[0];
    let tmpTimeArr = time.split(":");
    let mark = "AM";

    if (Number(tmpTimeArr[0]) < 12) {
    } else if (Number(tmpTimeArr[0]) < 24) {
      let tmpEndTime = Number(tmpTimeArr[0]) - 12;
      tmpTimeArr[0] = tmpEndTime.toString();
      mark = "PM";
    }

    return tmpTimeArr.join(":") + mark;
  }

  const handleClick = (time: string) => {
    alert(time);
  }

  return (
    <CustomCard>
      <ClinicContent>
        <Typography variant="h6" component="h6" align="left">
          {clinicData.name}
        </Typography>
        <Typography variant="body1" component="h5" align="left">
          {clinicData.address}
        </Typography>
        <Typography variant="body1" component="h6" align="left">
          {clinicData.city}, {clinicData.state} {clinicData.zipcode}
        </Typography>
      </ClinicContent>
      <ProviderContent>
        <ProviderImage src="/provider.png"/>
        <ProviderDetail>
        <Typography variant="h6" component="h6" align="left" color='blue'>
          {provider.name}, {provider.credentials}
        </Typography>
        <Typography variant="body1" component="h5" align="left">
          {provider.phoneNumber}
        </Typography>
        <TimeButtonList>
        {
          appointmentSlots.map((slot, index) => {
            if (slot.provider.id === provider.id) {
              return (
                <Button key={index} variant='contained' style={{background: 'cadetblue'}} onClick={() => handleClick(convertTimeFormat(slot.startTime))}>
                  {convertTimeFormat(slot.startTime)}
                </Button>
              )
            }
          })
        }
        </TimeButtonList>
        </ProviderDetail>
      </ProviderContent>
    </CustomCard>
  );
}

export default AppointmentCard;
