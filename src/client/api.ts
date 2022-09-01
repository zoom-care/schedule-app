import axios from "axios";

export const fetchAppointments = async (config?:Object) => {
  const res = await axios.get('/api/appointments', config);
  return res.data.appointmentSlots
}

export const fetchClinics = async (config?:Object) => {
  const res = await axios.get('/api/clinics', config);
  return res?.data?.clinics
}

export const fetchClinic = async (config?:Object, clinicId?:Number) => {
  return await axios.get('/api/clinics/'+clinicId, config);
}