import { useEffect, useState } from "react";
import { AppointmentData, AppointmentSlot, Clinic } from "zoomcare-api";
import { fetchAppointments, fetchClinic, fetchClinics } from 'client/api';

// const states = require("us-state-converter");

export const useAppointments = (token:any) => {
  const [config,setConfig] = useState<Object>();
  const [appointmentSlots, setAppointmentSlots] = useState<AppointmentSlot[]>([]);
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [appointmentDataList, setAppointmentDataList] = useState<AppointmentData[]>([]);

  useEffect(() => {
    setConfig({headers: { Authorization: `Bearer ${token}` }});
  },[]);

  useEffect(() => {
    if (!config) return;
    fetchAppointments(config).then(data => setAppointmentSlots(data));
    fetchClinics(config).then(data => setClinics(data));
  },[config]);

  useEffect(() => {
    console.log(clinics);
  },[clinics]);

  useEffect(() => {
    console.log(appointmentSlots);
    appointmentSlots.map(async(slot: AppointmentSlot,idx:number) => {
      fetchClinic(config, slot.clinicId)
      .then(res =>{
        setAppointmentDataList(appointmentDataList => [...appointmentDataList, { clinic: res?.data, appointment: slot}])
      })
      .catch(err => console.log(err));

  });
  },[appointmentSlots]);

  useEffect(() => {
    console.log(appointmentDataList)
  },[appointmentDataList]);

  return appointmentDataList;
};