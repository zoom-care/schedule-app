import './ProviderCard.css';

type Props = {
  providerName: string
  credentials: string
  day: string
  allTimes: string[]
  clinicName: string
  phoneNumber: string
  address: string
  city: string
  state: string
  zipcode: string
}

function ProviderCard(props: Props): JSX.Element {
  const { day, providerName, credentials, allTimes, clinicName, phoneNumber, address, city, state, zipcode } = props

  const bookAppointment = () => alert("Appointment booked")

  const buttons = allTimes.map((t) => (
    <button key={t} onClick={bookAppointment}>{t}</button>
  ))

  return (
      <div className="card">
        <h2>{day}</h2>
        <div className="clinic-name">{clinicName}</div>
        <div>{address}</div>
        <div>{city}, {state} {zipcode}</div>
        <div className="card-bottom">
          <div><img src='../provider.png' className="dr-icon" alt="provider" /></div>
          <div className="card-bottom-right">
            <div className="dr-title">{providerName}, {credentials}</div>  
            <div>{phoneNumber}</div>
            <div className="time-buttons">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ProviderCard;
