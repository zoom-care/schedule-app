import { Provider } from '../zoomcare-api';
import ClinicPanel from './ClinicPanel';
import ProviderPanel from './ProviderPanel';
import SlotsPanel from './SlotsPanel';
import './Appointment.css';

export interface AppointmentProps {
  clinicProviderKey: string;
  clinicId: number;
  provider: Provider;
  startTimes: string[];
}

function Appointment({ clinicId, provider, startTimes }: AppointmentProps) {
  return (
    <div className="appointment">
      <ClinicPanel id={clinicId} />
      <div className="provider-starttimes">
        <img src="provider.png" alt={provider.name} />
        <div className="info">
          <ProviderPanel {...provider} />
          <SlotsPanel startTimes={startTimes} />
        </div>
      </div>
    </div>
  );
}

export default Appointment;
