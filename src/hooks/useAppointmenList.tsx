import { useEffect, useState } from 'react'
import { useAuth } from '../context/Auth';
import { useZoomCareApi } from './useZoomCareApi';

import { AppointmentsDto, AppointmentSlot } from '../zoomcare-api';

export const useAppointmenList = () => {

    const [ appointmentSlotsList, setAppointmentSlotsList ] = useState<AppointmentSlot[]>([]);
    const { onGetAppointmentsDto } = useZoomCareApi();
    const { authToken } = useAuth();

    useEffect(() => {
        onGetAppointmentsDto(authToken).then((appointment: AppointmentsDto) => {
            setAppointmentSlotsList(appointment.appointmentSlots);
        }).catch()
    },[authToken]);

  return  {
    appointmentSlotsList
  }
}
