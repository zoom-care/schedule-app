import React, { useState, useEffect } from 'react';
import { getAppointmentSlots, getClinic } from 'api/index';
import styled, { css } from 'styled-components';
import { AppointmentsDto, AppointmentSlot } from 'zoomcare-api';

// TODO: Get appointmentSlots(/api/appointments) then match them with clinics(/api/clinics/:clinicId:)

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardClinicName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardClinicAddress = styled.h5`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;


export default function AppointmentList() {

    const [appointmentSlots, setAppointmentSlots] = useState<AppointmentSlot[]>([]);

    const [appointments, setAppointments] = useState<any[]>([]);

    //this useEffect is for the initial call.
    useEffect(() => {
        fetchAppointmentSlots()
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (appointmentSlots.length) {
            buildAppointments(appointmentSlots);
        }
    }, [appointmentSlots]);

    const fetchAppointmentSlots = async () => {
        const getAppointmentSlotsResult = await getAppointmentSlots();
        const { appointmentSlots } = getAppointmentSlotsResult as AppointmentsDto;
        setAppointmentSlots(appointmentSlots);
    };

    const buildAppointments = async (appointmentSlots: AppointmentSlot[]) => {
        async function getClinics(appointment: any) {
            const clinic = await getClinic(appointment.clinicId);
            return {
                clinic,
                appointment
            }
        }

        const builtAppointments = await Promise.all(
            appointmentSlots.map(getClinics)
        )

        setAppointments(builtAppointments)
    }

    const AppointmentCard = (aptObject: any) => {
        // console.log(aptObject)
        const { appointment, clinic } = aptObject.appointment
        return (<div>
            <CardWrapper>
                <CardHeader>
                    <CardClinicName>{clinic?.name ? clinic?.name : 'No Name'}</CardClinicName>
                    <CardClinicAddress>{clinic?.address ? clinic?.address : 'No Address'}</CardClinicAddress>
                </CardHeader>
            </CardWrapper>
        </div>)
    }

    return (
        appointments.length
            ? <> {
                appointments.map((appointment, index) => {
                    console.log(appointment)
                    return <AppointmentCard appointment={appointment} />
                })
            }</>
            : <>No Appointments </>
    )

}