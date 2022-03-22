import { useEffect, useState } from 'react'
import { useAuth } from '../context/Auth';
import { useZoomCareApi } from '../hooks/useZoomCareApi';
import { AppointmentsDto, AppointmentSlot } from '../zoomcare-api';
import { AppointmentSlotCard } from './AppointmentSlotCard';

export const AppointmentsList = () => {
    const [ appointmentSlotsList, setAppointmentSlotsList ] = useState<AppointmentSlot[]>([]);
    const { onGetAppointmentsDto } = useZoomCareApi();
    const { authToken } = useAuth();

    useEffect(() => {
        onGetAppointmentsDto(authToken).then((appointment: AppointmentsDto) => {
            setAppointmentSlotsList(appointment.appointmentSlots);
        }).catch()
    },[authToken]);

    return (
        <div>
           {appointmentSlotsList.length > 0 && appointmentSlotsList?.map(slot => {
               return <AppointmentSlotCard key={slot.id} {...slot} />
           })}
        </div>
    )
}
