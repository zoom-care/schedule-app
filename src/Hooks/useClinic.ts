import { useQuery } from '@tanstack/react-query'
import { getClinic } from '../Adapters/api'

export const useClinic = (clinicId: number) =>
  useQuery({
    queryKey: ['Clinic', clinicId],
    queryFn: () => getClinic(clinicId),
    enabled: !!clinicId,
  })
