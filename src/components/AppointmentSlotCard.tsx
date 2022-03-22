import { AppointmentSlot } from '../zoomcare-api';
import { ProviderDetailCard } from './ProviderDetailCard';
import { useAppointmentSlot } from '../hooks/useAppointmentSlot';

export const AppointmentSlotCard = (props : AppointmentSlot) => {
  const { isNotExist, clinicDetail, clinicStateFormatted, providerProps} = useAppointmentSlot(props);

  return (
    <div className="w-full grid justify-start p-3 gap-4">
      { !isNotExist ? <div>
        <p className="font-bold">{clinicDetail?.name}</p>
        <p>{clinicDetail?.address}</p>
        <p>{clinicDetail?.city}, <span className="uppercase">{clinicStateFormatted}</span> {clinicDetail?.zipcode}</p>
      </div> : <div className="font-bold text-red-800">Clinic not found!</div>}
      <ProviderDetailCard  {...providerProps}/>
    </div>
  )
}
