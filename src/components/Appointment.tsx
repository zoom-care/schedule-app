import React, { FC } from 'react';
import { AppointmentSlot } from '../zoomcare-api';
import ClinicComponent from './Clinic';
import ProviderComponent from './Provider';
import Schedule from './Schedule';
import './Appointment.css';

const AppointmentComponent:FC<{appointment:AppointmentSlot}> = ({appointment}) => {
    
    return (
        <div className="appointment-container">
            <ClinicComponent clinicId={appointment.clinicId}/>
            <ProviderComponent provider={appointment.provider}>
                <Schedule startTime={appointment.startTime} durationInMinutes={appointment.durationInMinutes}/>
            </ProviderComponent>
        </div>
    )
}

export default AppointmentComponent;