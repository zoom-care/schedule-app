import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { AppointmentSlot } from '../../zoomcare-api';
import { useGetClinicsQuery } from '../clinicalProviders/clinicsApiSlice';
import { useGetAppointmentsQuery } from './appointmentsApiSlice';

const GetAllClinics = () => {
  const { data } = useGetClinicsQuery();
  if (data) {
    return [...data.clinics];
  }
};

const AppointmentsScreen = () => {
  // Get all Appointments
  const { data, error, isLoading } = useGetAppointmentsQuery();
  // Get all Clinics
  const allClinics = GetAllClinics();

  // Create an Appointment Card
  const createAppointmentCards = () => {
    return data?.appointmentSlots.map((slot: AppointmentSlot) => {
      let clinic = allClinics?.find((clinic) => clinic.id === slot.clinicId);
      if (clinic) {
        return <AppointmentCard key={slot.id} slot={slot} clinic={clinic} />;
      }
      return null;
    });
  };

  let content;
  if (isLoading) {
    content = <div>Loading....</div>;
  } else if (error) {
    content = <div>Error {error}</div>;
  } else if (data && allClinics) {
    content = createAppointmentCards();
  } else {
    content = <div>Something went wrong...</div>;
  }

  return <>{content}</>;
};

export default AppointmentsScreen;
