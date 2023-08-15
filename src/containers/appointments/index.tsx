import React, { useEffect, useState } from 'react';
import appointmentService from '../../services/apointment-service';
import clinicService from '../../services/clinic-service';
import { ApointmentListItem } from '../../model/ApointmentListItem';
import AppointmentItem from './Apointment';
import { ClinicDto } from '../../model/ClinicDto';
import { AppointmentSlotDto } from '../../model/AppointmentSlot';

const Appointments: React.FC = () => {
  const [list, setList] = useState<ApointmentListItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const getAppointments = async () => {
      let localAppointments: AppointmentSlotDto[] = [];
      let localClinics: ClinicDto[] = [];
      if (isMounted) {
        localAppointments = (await appointmentService.getAll())?.appointmentSlots || [];
        localClinics = (await clinicService.getAll())?.clinics || [];
      }
      const localList: ApointmentListItem[] = [];
      localAppointments.forEach(element => {
        let item: ApointmentListItem | undefined = localList.find(item => item.clinicId === element.clinicId && item.providerId === element.provider.id);
        if (!item) {
          const clinic = localClinics.find(c => c.id === element.clinicId);
          item = {
            clinicId: element.clinicId,
            providerId: element.provider.id,
            clinicName: clinic?.name,
            clinicAddress: clinic?.address,
            clinicCity: clinic?.city,
            clinicZipcode: clinic?.zipcode,
            providerName: element.provider.name,
            providerCredentials: element.provider.credentials,
            providerPhoneNumber: element.provider.phoneNumber,
            appointments: [],
          };
          localList.push(item);
        };
        item.appointments.push({ id: element.id, startTime: element.startTime });
      });
      setList(localList || []);
    };

    getAppointments();

      // Clean-up:
      return () => {
        isMounted = false;
      }
    
  }, []);

  return (
    <div className='appointments appointments__wrapper'>
      <AppointmentItem items={list} ></AppointmentItem>
    </div>
  );
};

export default Appointments;
