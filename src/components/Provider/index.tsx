import React from 'react';
import { use12HourFormat, usePhoneNumberFormatter } from '../../hooks';
import { Provider } from '../../zoomcare-api';

type Props = {
  img: string;
  name: string;
  startTime: string;
  provider: Provider;
};

export const ProviderItem = ({ img, name, provider, startTime }: Props) => {
  let { phoneNumber, credentials } = provider;
  let nDate = use12HourFormat(startTime);
  let formattedPhoneNumber = usePhoneNumberFormatter(phoneNumber ?? '');
  
  return (
    <div className="clinic__provider__container">
      <img className="clinic__provider__img" src={img} alt="img provider" />
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
  );
};
