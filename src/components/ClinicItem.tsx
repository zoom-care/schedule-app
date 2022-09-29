import { useState } from 'react'
import type { AppointmentsDto, Clinic } from '../zoomcare-api'

const ClinicItem = ({clinic}: {clinic: (Clinic & AppointmentsDto)}) => {
  const [selectedSlot, setSelectedSlot] = useState(clinic.appointmentSlots[0])
  
  return (
    <div className='clinic-item'>
      <div>
        <h4>{clinic?.name}</h4>
        <span>
          {clinic.address} <br />
          {clinic.city}, {clinic.state} {clinic.zipcode}
        </span>
      </div>
      <div className='clinic-provider'>
        <img src="./provider.png" alt="img" className='clinic-item-image'/>
        <div>
          <h4 className='clinic-title'>
            {selectedSlot.provider.name}, {selectedSlot.provider.credentials}
          </h4>
          <span>{selectedSlot.provider.phoneNumber}</span>
          <div style={{ display: 'flex' }}>
          {clinic.appointmentSlots.map(appointmentSlot => (
            <div className='clinic-time' onClick={() => setSelectedSlot(appointmentSlot)}>
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

export default ClinicItem