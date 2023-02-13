import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentById } from "../redux/actions/appoint";
import Moment from "react-moment";

const Clinic = (props: any) => {
  const dispatch: any = useDispatch();
  console.log('appointment ', props.clinicId)
  const clinicData = useSelector((state: any) => state.appointment.activeAppointment)
  useEffect(() => {
    dispatch(getAppointmentById(props.clinicId));
  }, [])

  const maskPhoneNumber = (phoneNumber: string) => {
    var x = phoneNumber.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)!;
    phoneNumber = !x[2] ? x[1] : '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
    return phoneNumber;
  }
  return (
    <>
      <div className="card mb-3">
        <div className="card-header border-0 bg-transparent">
          <h5 style={{ 'fontWeight': '900' }}>{clinicData.name}</h5>
          <label>{clinicData.address}</label><br />
          <label>{clinicData.city}, {clinicData.state}, {clinicData.zipcode} </label>
        </div>
        <div className="card-body d-flex flex-row">
          <img className="me-3 rounded-circle" src="/provider.png" width={128} height={128} alt="Generic placeholder image" />
          <div className="">
            <h5 className="mt-0" style={{ 'color': '#1cb6e3', 'fontWeight': 700 }}>{props.provider.name}, {props.provider.credentials}</h5>
            <p>{maskPhoneNumber(props.provider.phoneNumber)}</p>
            <button className="btn btn-dark"><Moment format="HH:MM A">{props.startTime}</Moment></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clinic;