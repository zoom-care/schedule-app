
import { useAppointmenList } from '../hooks/useAppointmenList';
import { AppointmentSlotCard } from './AppointmentSlotCard';

export const AppointmentsList = () => {
    const { appointmentSlotsList } = useAppointmenList();
    
    return (
        <div className="grid w-full gap-5 divide-y ">
           {appointmentSlotsList.length > 0 && appointmentSlotsList?.map(slot => {
               return <AppointmentSlotCard key={slot.id} {...slot} />
           })}
        </div>
    )
}
