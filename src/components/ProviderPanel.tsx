import { Provider } from '../zoomcare-api';
import { formatPhone } from '../utils';
import './ProviderPanel.css';

function ProviderPanel({ name, phoneNumber, credentials }: Provider) {
  return (
    <div className="provider-panel">
      <h3>
        {name}, {credentials}
      </h3>
      {phoneNumber && <div>{formatPhone(phoneNumber)}</div>}
    </div>
  );
}

export default ProviderPanel;
