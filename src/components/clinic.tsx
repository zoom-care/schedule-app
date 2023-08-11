import '../style/bootstrap.css';
import { AppointmentSlot, Provider, Clinic } from '../zoomcare-api';
import Appointment from './appointment';

interface Props {
    clinic: Clinic;
    provider: Provider;
    appointments: AppointmentSlot[];
  }

function ClinicComponent({ clinic, provider, appointments }: Props) {
    return (
        <>
            <div className='item'>
                <h5 className="card-header">{clinic.name}</h5>
                <h6 className="card-text">{clinic.address}</h6>
                <h6 className="card-text">
                {clinic.city}, {clinic.state.substring(0, 2).toUpperCase()}{' '}
                {clinic.zipcode}</h6>
                <Appointment provider={provider} appointments={appointments} />
            </div>
        </>
    );
  }
  
  export default ClinicComponent;