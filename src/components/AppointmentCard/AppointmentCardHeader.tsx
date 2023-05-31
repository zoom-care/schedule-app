import { AppointCardHeaderProps } from '../../types';
import classes from './AppointmentCardHeader.module.css';

const AppointmentCardHeader = ({ clinic }: AppointCardHeaderProps) => {
  return (
    <>
      <div className={classes.title}>{clinic.name}</div>
      <div className={classes.lineHeight}>{clinic.address}</div>
      <div>
        {clinic.city}, {clinic.state} {clinic.zipcode}
      </div>
    </>
  );
};

export default AppointmentCardHeader;
