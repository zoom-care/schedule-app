import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { CardContent } from '@mui/material';
import { Card } from '@mui/material';
import moment from 'moment';
import Estetoscopio from 'assets/imgs/logo_clinic.png';
import { styled } from '@mui/material';
import { AppointmentData } from 'zoomcare-api';
import { Stack } from '@mui/material';

const VBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const HBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
})

const VBoxLeft = styled(VBox)({
  padding: 0,
  margin: 0,
  alignItems: 'flex-start'
})

const VBoxCenter = styled(VBoxLeft)({
  justifyContent: 'center'
})

const HBoxLeft = styled(HBox)({
  padding: 0,
  margin: 0,
  alignItems: 'flex-start'
})

const Subtitle = styled(Typography)({
  textAlign:"left",
  color:"black",
})

const SubtitleBold = styled(Subtitle)({
  fontWeight: 'bold',
})

const SubtitleBoldCyan = styled(SubtitleBold)({
  fontWeight: 'bold',
  color: "cyan",
})

const StyledButton = ({children}:any) => {
  return (
    <Button variant="contained" sx={{display: "flex", px:4, background:"black"}}>
      {children}
    </Button>
  );
}

const Appointment = ({clinic,appointment}:AppointmentData) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <VBoxLeft>
        <VBox>
          <CardContent sx={{ alignItems: 'flex-start'}}>
            <SubtitleBold>
              {clinic.name}
            </SubtitleBold>
            <Subtitle>
              {clinic.address}
            </Subtitle>
            <Subtitle>
              {clinic.city}, {clinic.state} {clinic.zipcode}
            </Subtitle>
          </CardContent>
        </VBox>
        <VBox>
          <HBoxLeft>
            <VBox>
              <CardContent>
                <img style={{ height: 150, width: 170 }} src={Estetoscopio} alt="Estetoscopio" />
              </CardContent>
            </VBox>
            <VBoxCenter>
              <Stack sx={{mt:4}}>
                <SubtitleBoldCyan>
                {`${appointment.provider.name}, ${appointment.provider.credentials?.replace(/\./g,"")}`}
                </SubtitleBoldCyan>
                <Subtitle>
                  {appointment.provider.phoneNumber}
                </Subtitle>
                <StyledButton>
                  {moment (appointment.startTime).format("LT")}
                </StyledButton>
              </Stack>
            </VBoxCenter>
          </HBoxLeft>
        </VBox>
      </VBoxLeft>
    </Card>
  );
}

export default Appointment;