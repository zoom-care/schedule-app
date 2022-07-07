//Interfaces
import { AppointmentSlot, Clinic, MainModel } from '../zoomcare-api';
import { services } from '../services/services';
import moment from 'moment';

//Return an array of clinics from the clinicId of some appointments
const getClinicsWithDetails = async (token:string, appointments: AppointmentSlot[])=> {
  const clinicsPromises: Promise<Clinic>[] = [];
  appointments.forEach( appointment =>{
    clinicsPromises.push( services.getClinicById(token, appointment.clinicId) );
  });
  return await Promise.all(clinicsPromises);
}

// Charge de initial data
export const getInitialData = async(): Promise<MainModel[]>=> {
  //Getting authToken
  const user = 'username';
  const password = 'password'
  await services.login(user, password);  
  //Set the token from the sessionStorage
  const token = sessionStorage.getItem('authToken');
  //Getting appointments... 
  const appointments = await services.getAppointments(token as string);  
  //Getting clinics... 
  const clinics = await getClinicsWithDetails(token as string, appointments.appointmentSlots); 
  //Building new model with the info....
  const data: MainModel[] = []; 
  appointments.appointmentSlots.forEach( appointment =>{
    //Fortmatting the date to hours
    appointment.startTime = moment(appointment.startTime).format('HH:mm');
    let mainModel: MainModel = {
      appointment,
      clinic: clinics.find( item => item.id === appointment.clinicId ) as Clinic,
    }
    //Clinic 2 does not exist, we do not send it to the component
    if(mainModel.clinic){
      data.push(mainModel);
    }
  });
  return data;
};
