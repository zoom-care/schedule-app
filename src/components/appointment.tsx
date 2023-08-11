import '../style/bootstrap.css';
import { AppointmentSlot, Provider } from '../zoomcare-api';
import providerImage from '../resources/provider.png';

interface Props {
    provider: Provider;
    appointments: AppointmentSlot[];
  }

function Appointment({ provider, appointments }: Props) {

    const getTimeFromDate = (date: string) =>
    new Date(date.substring(0,16)).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});

    return (
      <>
        <div className='card-item'>
            <img className="img" src={providerImage} alt="Provider" />
            <div className='details'>
                <span className="badge rounded-pill bg-info">{provider.name}</span>
                <p className="card-text">{provider.phoneNumber}</p>
                <div>
                    {appointments.map((appointment, id) => (
                    <button className="btn btn-primary" key={id}>
                        {getTimeFromDate(appointment.startTime)}
                    </button>
                ))}
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Appointment;