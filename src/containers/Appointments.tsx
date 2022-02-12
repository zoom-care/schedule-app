import React, { useState, useEffect } from 'react'

import { AppointmentCard } from '../components/AppointmentCard'
import { IAppointmentSlot, IAppointments, IClinic } from '../models'
import { fetchAppointments, fetchClinic } from '../api'
import { getTimeSlots } from '../utils'

interface Props {

}

const Appointments: React.FC<Props> = (): any => {

    const [appointmentSlots, setAppointmentSlots] = useState<IAppointmentSlot[]>([])
    const [appointments, setAppointments] = useState<IAppointments[]>([])

    useEffect(() => {
        (async() => {
            const response = await fetchAppointments()
            response?.appointmentSlots?.length && 
            setAppointmentSlots(response.appointmentSlots)
        })()
    }, [])

    useEffect(() => {
        if (appointmentSlots.length) {            
            (async() => {
                const aptmnts = await getAppointments(appointmentSlots)
                setAppointments(aptmnts)
                console.log('aptmnts: ', aptmnts)
            })()
        }
    }, [appointmentSlots])

    const getAppointments = async(appointmentSlots: IAppointmentSlot[]) => {
        const aptmnts = await Promise.all(appointmentSlots.map(async(
            { clinicId, provider, startTime, durationInMinutes }) => {
            const [ date, _ ] = startTime.split(' ')
            return {
                clinic: await fetchClinic(`${clinicId}`),
                provider,
                date: new Date(date),
                timeSlots: getTimeSlots(startTime, durationInMinutes),
            }
        }))
        return aptmnts
    }

    return (
        appointments?.length 
        ?   <>{
                appointments.map(
                    ({date, clinic, provider, timeSlots}) => clinic && provider && 
                <AppointmentCard key={`${clinic.id}-${provider.id}`} date={date} clinic={clinic} provider={provider} timeSlots={timeSlots} />)
            }</>
        :   <>No Appointments Found!</>
    )
}

export default Appointments