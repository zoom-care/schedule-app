import axios from 'axios';
import { useEffect, useState, VoidFunctionComponent } from 'react';
import { IAppointmentsData, IUserData } from '../../types';
import ZoomCareCard from '../zoomCareCard';

const ZoomCareCardList: VoidFunctionComponent<IUserData> = (props) => {

  const [scheduleData, setScheduleData] = useState<any>([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${props.authToken}` }
    };

    const fetchAppoinmentsData = async () => {
      const res = await axios.get('/api/appointments', config);
      return res.data.appointmentSlots
    }

    fetchAppoinmentsData().then((appointmentSlots)=>{
      appointmentSlots.map(async(appointment: IAppointmentsData) => {
        const res = await axios.get('/api/clinics/'+appointment.clinicId, config);     
        let schedule = {clinicData: res.data, appointmentsData: appointment}
        let tempSchedule  = [...scheduleData, schedule]
        setScheduleData(tempSchedule)
      });
    })
  }, []);

  return (
    <div>
      {scheduleData?.map((item:any, i:any) => {
        return <ZoomCareCard key={i} clinicData={item.clinicData} appointmentsData={item.appointmentsData}/>
      })}
    </div>
  );
}

export default ZoomCareCardList;