import { AppointCardBodyProps } from '../../types';
import classes from './AppointmentCardBody.module.css';

const AppointmentCardBody = ({ slot }: AppointCardBodyProps) => {
  const startTime = new Date(slot.startTime).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <div className={classes.container}>
      <div className={classes.providerImgContainer}>
        <img
          src={process.env.PUBLIC_URL + '/provider.png'}
          alt="A provider"
          width="125"
        />
      </div>
      <div>
        <div className={classes.providerTitle}>{slot.provider.name}</div>
        <div>{slot.provider.phoneNumber}</div>
        <button className={classes.buttonStyle}>{startTime}</button>
      </div>
    </div>
  );
};

export default AppointmentCardBody;
