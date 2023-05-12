import { useQuery } from '@tanstack/react-query'
import { getAppointments } from '../Adapters/api'

export const useAppointments = () => {
  const queryKey = ['Appointments list']

  const { data: appointments, ...rest } = useQuery({
    queryKey,
    queryFn: getAppointments,
  })

  return { appointments, ...rest }
}
