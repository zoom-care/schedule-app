import { useAppointments } from '../Hooks/usaAppointments'
import { AppointmentCard } from './AppointmentCard'

export const AppointmentsList = () => {
  const { appointments, isLoading } = useAppointments()

  if (isLoading) return <p>Loading...</p>
  return (
    <section>
      {appointments?.map(item => (
        <AppointmentCard {...item} key={item.id} />
      ))}
    </section>
  )
}
