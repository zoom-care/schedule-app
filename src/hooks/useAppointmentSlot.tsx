import { useState, useEffect } from 'react';
import { useAuth } from '../context/Auth';
import { useZoomCareApi } from './useZoomCareApi';

import { AppointmentSlot, Clinic } from '../zoomcare-api';

export const useAppointmentSlot = (props : AppointmentSlot) => {
    const { startTime, clinicId, provider} = props;

    const [ clinicDetail, setClinicDetail ] = useState<Clinic>();
    const [ isNotExist, setIsNotExist ] = useState<boolean>(false);
  
    const [ startTimeFormatted, setStartTimeFormatted ] = useState<any>();
    const [ clinicStateFormatted, setClinicStateFormatted ] = useState<any>();
  
    const { authToken } = useAuth();
    const { onGetClinicDetail } = useZoomCareApi();
  
    const providerProps = {provider, isNotExist, startTimeFormatted};
  
    useEffect(() => {
      getFormatTime(startTime);
      
      
      onGetClinicDetail({ clinicId, authToken}).then((clinic : Clinic) => {
        setClinicDetail(clinic);
        getInitialsWords(clinic.state)
        setIsNotExist(false);
      }).catch((err) => {
        setIsNotExist(true);
      })
    },[]);
  
  
    const getFormatTime = (time : string) => {
      const dateTime = new Date(time);
      const dateTimeFormated = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      setStartTimeFormatted(dateTimeFormated)
    }
  
    const getInitialsWords = (name: any) => {
      const initials = name[0] + name[1];
      setClinicStateFormatted(initials);
    }

  return {
    isNotExist,
    clinicDetail,
    clinicStateFormatted,
    providerProps
  }
}
