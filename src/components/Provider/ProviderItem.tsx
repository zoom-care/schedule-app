import { AppointmentSlot, Provider } from '../../zoomcare-api';
import './ProviderItem.css';
import placeholder from '../../assets/provider.png';
import { timeSlot } from '../../utils/timeSlot';

interface Props {
  provider: Provider;
  appointments: AppointmentSlot[];
}

export const ProviderItem = ({ provider, appointments }: Props) => (
  <div className="provider-item">
    <div>
      <img className="provider-img" src={placeholder} alt="Provider" />
    </div>
    <div className="provider-details">
      <h6 className="provider-name">
        {provider.name}, {provider.credentials}
      </h6>
      <p className="provider-number">{provider.phoneNumber}</p>
      <div className="provider-slots">
        {appointments.map((app, i) => (
          <button className="app-slot" key={i}>
            {timeSlot(app.startTime)}
          </button>
        ))}
      </div>
    </div>
  </div>
);

