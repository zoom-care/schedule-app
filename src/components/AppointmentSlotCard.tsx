import { useEffect, useState } from 'react';
import { AppointmentSlot, Clinic } from '../zoomcare-api';

import { useAuth } from '../context/Auth';
import { useZoomCareApi } from '../hooks/useZoomCareApi';

export const AppointmentSlotCard = (props : AppointmentSlot) => {
  const { id, startTime, clinicId, durationInMinutes, provider} = props;

  console.log(provider);
  const [ clinicDetail, seClinicDetail ] = useState<Clinic>()
  const { authToken } = useAuth();
  const { onGetClinicDetail } = useZoomCareApi();
  
  // console.log('props', props);


  useEffect(() => {
    console.log('clinicId:', clinicId)
    onGetClinicDetail({ clinicId, authToken}).then((clinic : Clinic) => {
      seClinicDetail(clinic);
    }).catch((err) => {
      console.log('error: ', err)
    })
  },[authToken]);

  return (
    <div>
      {clinicDetail?.name}
      {clinicDetail?.address}
      {clinicDetail?.state}
      {clinicDetail?.zipcode}

      <div>
        {provider.name}
        {provider.credentials}
        {provider.phoneNumber}
        {startTime}
      </div>
    </div>
  )
}
