import { AppointCardProps } from '../../types';
import ZCCard from '../ui/ZCCard';
import AppointmentCardBody from './AppointmentCardBody';
import AppointmentCardHeader from './AppointmentCardHeader';
import classes from './AppointmentCard.module.css';

const AppointmentCard = ({ slot, clinic }: AppointCardProps) => {
  return (
    <ZCCard>
      <div className={classes.spacer}>
        <AppointmentCardHeader clinic={clinic} />
      </div>
      <AppointmentCardBody slot={slot} />
    </ZCCard>
  );
};

export default AppointmentCard;
