import { ClinicData } from './ClinicData'
import { AppointmentSlot, Provider } from '../zoomcare-api'
import Styles from './AppointmentCard.module.css'
import { phoneFormatter } from '../Helpers/phoneNumberFormatter'
import { startTimeFormatter } from '../Helpers/startTimeFormatter'

export const AppointmentCard = ({
  clinicId,
  provider,
  startTime,
}: AppointmentSlot) => {
  return (
    <article className={Styles.card}>
      <ClinicData clinicID={clinicId} />

      <main>
        <img src="provider.png" alt={provider.name} />
        <div className={Styles.info}>
          <ProviderData {...provider} />

          <AppointmentSlots startTime={startTime} />
        </div>
      </main>
    </article>
  )
}

const ProviderData = ({ name, phoneNumber, credentials }: Provider) => (
  <div>
    <h3>
      {name}, {credentials}
    </h3>
    <small>{phoneNumber && phoneFormatter(phoneNumber)}</small>
  </div>
)

const AppointmentSlots = ({
  startTime,
}: {
  startTime: AppointmentSlot['startTime']
}) => {
  const times = startTimeFormatter(startTime)

  return (
    <div className={Styles.hours}>
      {times.map(time => (
        <button key={time}>{time}</button>
      ))}
    </div>
  )
}
