import { VoidFunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import estetoscopio from '../../assets/img/estetoscopio.jpeg';
import Button from '@mui/material/Button';
import { IScheduleData } from '../../types';
import moment from 'moment';

const ZoomCareCard: VoidFunctionComponent<IScheduleData> = (props) => {

  return (
    <Card sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex', alignItems: 'flex-start', flexDirection: 'column', p: 0, m: 0
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ alignItems: 'flex-start'}}>
            <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="left" color="black" component="div">
              {props.clinicData.name}
            </Typography>
            <Typography variant="subtitle1" align="left" color="black" component="div">
              {props.clinicData.address}
            </Typography>
            <Typography variant="subtitle1" align="left" color="black" component="div">
              {props.clinicData.city}, {props.clinicData.state} {props.clinicData.zipcode}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex', alignItems: 'flex-start', flexDirection: 'row', p: 0, m: 0
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ alignItems: 'flex-start'}}>
                <img style={{ height: 150, width: 150 }} src={estetoscopio} alt="Estetoscopio" />
              </CardContent>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ alignItems: 'flex-start'}}>
                <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="left" color="black" component="div">
                {props.appointmentsData.provider.name}
                </Typography>
                <Typography variant="subtitle1" align="left" color="black" component="div">
                  {props.appointmentsData.provider.phoneNumber}
                </Typography>
                <Button variant="contained">
                  {moment(props.appointmentsData.startTime).format("LT")}
                </Button>
              </CardContent>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default ZoomCareCard;
