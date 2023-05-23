import { useClinic } from '../hooks';
import './ClinicPanel.css';

export interface ClinicPanelProps {
  id: number;
}

function ClinicPanel({ id }: ClinicPanelProps) {
  const { data, isLoading } = useClinic(id);
  const {
    name = '<Unknown Clinic>',
    address = '<Cannot find the clinic address info>',
    city,
    state,
    zipcode,
  } = data ?? {};

  if (isLoading) return <p>Loading Clinic...</p>;

  return (
    <div className="clinic-panel">
      <h3>{name}</h3>
      <div>{address}</div>
      {data && (
        <div>
          {city}, {state} {zipcode}
        </div>
      )}
    </div>
  );
}

export default ClinicPanel;
