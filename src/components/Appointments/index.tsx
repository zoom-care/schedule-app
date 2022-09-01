import Appointment from 'components/Appointment';
import { useAppointments } from 'hooks/useAppointments';

const Appointments = ({authToken}:any) => {
  const appointments = useAppointments(authToken);

  return (
    <div>
      {appointments?.map((item:any, idx:number) => {
        return <Appointment key={idx} clinic={item.clinic} appointment={item.appointment}/>
      })}
    </div>
  )
}

export default Appointments