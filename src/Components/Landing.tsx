import ClinicCard from './ClinicCard';
import {Slot} from '../zoomcare-api'

interface Props {
  slots: Slot[]
}

const Landing: React.FC<Props> = ({slots}) => {
    const clinicCardArr = slots.map((slot:any, index:number) => <ClinicCard key={index} slot={slot}/>)

  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      {clinicCardArr}
    </div>
  );
};

export default Landing;
