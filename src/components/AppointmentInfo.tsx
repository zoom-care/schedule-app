import { useState } from 'react'
import type { AppointmentsDto, Clinic } from '../zoomcare-api'

const AppointmentInfo = ({clinic}: {clinic: (Clinic & AppointmentsDto)}) => {
  const [selectedSlot, setSelectedSlot] = useState(clinic.appointmentSlots[0])
  
  return (

    <div className='appointment-info'>
      <div>
        <h4>{clinic?.name}</h4>
        <span>
          {clinic.address} <br />
          {clinic.city}, {clinic.state} {clinic.zipcode}
        </span>
      </div>

      <div className='appointment-provider'>
        <img src="./provider.png" alt="img" className='provider-image'/>

        <div>
          <h4 className='provider-name'>
            {selectedSlot.provider.name}, {selectedSlot.provider.credentials}
          </h4>
          <span>{selectedSlot.provider.phoneNumber}</span>

          <div style={{ display: 'flex' }}>
          {clinic.appointmentSlots.map(appointmentSlot => (
            
            <div className='time-slots' onClick={() => setSelectedSlot(appointmentSlot)}>
              {new Date(appointmentSlot.startTime)
              .toLocaleTimeString('en-US', { hour12: true, minute: 'numeric', hour: 'numeric' })}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentInfo