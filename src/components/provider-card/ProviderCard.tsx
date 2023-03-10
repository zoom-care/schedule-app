import { parseDateStringToLocaleTime, parseIntPhoneToLocalePhone } from "../../services/ParserService"
import { AppointmentSlot } from "../../zoomcare-api"
import "./ProviderCard.css"

type ProviderCardProps = {
  name: string
  credentials?: string
  phone?: string
  appointments: AppointmentSlot[]
}

const ProviderCard = ({ name, credentials, phone, appointments }: ProviderCardProps) => (
  <div className="provider">
    <img className="provider-avatar" src="/provider.png" alt="Provider" />
    <div>
      <div className="provider-name">{name}{credentials && <span>, </span>} {credentials}</div>
      {phone && <div>{parseIntPhoneToLocalePhone(phone)}</div>}
      <div className="provider-slots">
        {appointments.map(appointment => (
          <button key={appointment.id} className="provider-appointment">{parseDateStringToLocaleTime(appointment.startTime)}</button>
        ))}
      </div>
    </div>
  </div>
)

export default ProviderCard