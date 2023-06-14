import img from '../../assets/provider.png';
import './styles.css';
import {
  use12HourFormat,
  usePhoneNumberFormatter,
  useAddressFormatter,
} from '../../hooks';
import { Provider } from '../../zoomcare-api';

type Props = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  startTime: string;
  clinicId: number;
  phoneNumber: string;
  credentials: string;
  durationInMinutes: number;
  provider: Provider[];
};

export const Clinic = ({
  id,
  name,
  address,
  city,
  state,
  zipcode,
  startTime,
  provider,
  phoneNumber,
  credentials,
}: Props) => {
  let nDate = use12HourFormat(startTime);
  let formattedPhoneNumber = usePhoneNumberFormatter(phoneNumber ?? '');
  let formattedAddress = useAddressFormatter(state, city, zipcode);

  return (
    <div className="clinic-container">
      <h3 className="clinic__title__black">{name}</h3>
      <p>{address}</p>
      <p>{formattedAddress}</p>
      <div className="clinic__provider__container">
        <img className="clinic__provider__img" src={img} alt="img provider" />
        <div className="clinic__provider__info">
          <h3 className="clinic__provider__name">
            {name}, {credentials}
          </h3>
          <p>{formattedPhoneNumber}</p>
          <div className="clinic__provider__buttons">
            {provider.map(
              (pro) =>
                pro.id === id && (
                  <button className="clinic__provider__btn" type="button">
                    {nDate}
                  </button>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
