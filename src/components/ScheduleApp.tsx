import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { AppointmentSlot, AppointmentsDto, Clinic } from '../zoomcare-api';
import AppointmentInfo from './AppointmentInfo';

interface Clinics extends Clinic {
  appointmentSlots: AppointmentSlot[]
}

const ScheduleApp = () => {

  const navigate = useNavigate();
  const [clinics, setClinics] = useState<Array<Clinics>>([]);

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info")

    async function fetchAppointments() {

      const { username, password } = JSON.parse(userInfo as string)
      const { authToken } = await fetch('/api/login', {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(re => re.json());

      const headers= {
        'Authorization': authToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      } as HeadersInit & { 'Authorization': string }

      const data: AppointmentsDto = await fetch('/api/appointments', {
        headers: headers,
      }).then(re => re.json());

      const newClinics: Clinics[] = [];
      const availableSlot: {[key: string]: AppointmentSlot[]} = {};

      for (const slot of data.appointmentSlots) {
        if (slot.clinicId in availableSlot) {
          availableSlot[slot.clinicId].push(slot)
        } else {
          availableSlot[slot.clinicId] = [slot]
        }
      };

      for (const key in availableSlot) {
        const clinicData: Clinic = await fetch('/api/clinics/' + key, {
          headers: headers,
        })
        .then(re => re.json())
        
        if (clinicData.id)
          newClinics.push({
            ...clinicData,
            appointmentSlots: availableSlot[key]
          })
      }

      setClinics(newClinics)
    }

    if (userInfo) {
      fetchAppointments();
    } else {
      return navigate('/login')
    }
  }, [navigate])
  
  return (
    <div className='appointment-info'>
      {clinics.map(clinic => (
        <AppointmentInfo key={clinic.id} clinic={clinic} />
      ))}
    </div>
  )
}

export default ScheduleApp