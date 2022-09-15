import { Card, CardContent, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getClinic } from '../api';
import { Appointment } from '../types';
import { formatTime } from '../utils';

interface ClinicProps {
  id: number;
  data: Appointment[];
}

type ClinicType = {
  id?: number;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
};

const Clinic = ({ id, data }: ClinicProps) => {
  const [clinic, setClinic] = useState<ClinicType | null>(null);

  useEffect(() => {
    getClinic(id)
      .then((response: ClinicType) => setClinic(response))
      .catch(console.error);
  }, []);

  return clinic ? (
    <Card>
      <CardContent>
        <Typography variant="h6">{clinic?.name}</Typography>
        <Typography variant="body1">{clinic?.address}</Typography>
        <Typography variant="body1">{`${clinic?.city}, ${clinic?.state} ${clinic?.zipcode}`}</Typography>
        {data.map((item) => (
          <>
            <Typography color="primary" variant="h6">
              {`${item.provider.name}, ${item.provider.credentials}`}
            </Typography>
            <Typography>{item.provider.phoneNumber}</Typography>
            <Chip color="primary" label={formatTime(item.startTime)} />
          </>
        ))}
      </CardContent>
    </Card>
  ) : null;
};

export default Clinic;
