import { useQuery } from '@tanstack/react-query';
import { getAppointments } from '../apis';

const useAppointments = () =>
  useQuery({
    queryKey: ['Appointments'],
    queryFn: getAppointments,
  });

export default useAppointments;
