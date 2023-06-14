import { iClinic } from '../../interfaces';
import img from '../../assets/provider.png';
import './styles.css';
import { use12HourFormat, usePhoneNumberFormatter } from '../../hooks';

type Props = {
  clinic: iClinic;
};

export const Clinics = ({ clinic }: Props) => {
  let { clinicId, provider, startTime } = clinic;
  let { name, credentials, phoneNumber, id } = provider;

  let nDate = use12HourFormat(startTime);
  let formattedPhoneNumber = usePhoneNumberFormatter(phoneNumber);

  return (
    <>
      {id === clinicId && (
        <div className="clinic-container">
          <h3 className="clinic__title__black">Clinic A{}</h3>
          <p>123 fffff{}</p>
          <p>ffffff{}</p>
          <div className="clinic__provider__container">
            <img
              className="clinic__provider__img"
              src={img}
              alt="img provider"
            />
            <div className="clinic__provider__info">
              <h3 className="clinic__provider__name">
                {name}, {credentials}
              </h3>
              <p>{formattedPhoneNumber}</p>
              <button className="clinic__provider__btn" type="button">
                {nDate}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
