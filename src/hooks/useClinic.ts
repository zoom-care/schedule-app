import { useQuery } from '@tanstack/react-query';
import { getClinic } from '../apis';

const useClinic = (id: number) =>
  useQuery({
    queryKey: ['Clinic', id],
    queryFn: () => getClinic(id),
    enabled: !!id,
  });

export default useClinic;
