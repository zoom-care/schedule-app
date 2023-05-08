import { AppointmentSlot, Clinic, Provider } from '../../zoomcare-api';
import { ProviderItem } from '../Provider/ProviderItem';
import './Clinic.css';

interface Props {
  clinic: Clinic;
  appointments: AppointmentSlot[];
}

export const ClinicItem = ({ clinic, appointments }: Props) => {
  const providers = appointments.map((app) => app.provider);

  // remove duplicated providers
  const uniqueProviders = providers.filter(
    (provider: Provider, index) =>
      providers.findIndex((prov: Provider) => prov.id === provider.id) === index
  );

  const providerAppointments = (providerId: number) =>
    appointments.filter((app) => app.provider.id === providerId);

  return (
    <div className="clinic-item">
      <h5 className="clinic-name">{clinic.name}</h5>
      <p className="clinic-address">{clinic.address}</p>
      <p className="clinic-address">
        {clinic.city}, {clinic.state.substring(0, 2).toUpperCase()}{' '}
        {clinic.zipcode}
      </p>
      <div className="clinic-providers">
        {uniqueProviders.map((provider, i) => (
          <ProviderItem
            key={i}
            provider={provider}
            appointments={providerAppointments(provider.id)}
          />
        ))}
      </div>
    </div>
  );
};

