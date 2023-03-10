import { useEffect, useState } from "react"
import { AppointmentSlot, Provider } from "../../zoomcare-api"
import ProviderCard from "../provider-card/ProviderCard"

import './ClinicCard.css'

type ClinicCardProps = {
  name: string
  address: string
  city: string
  state: string
  zipcode: string
  appointments: AppointmentSlot[]
}

const ClinicCard = ({ name, address, city, state, zipcode, appointments }: ClinicCardProps) => {
  const [providers, setProviders] = useState<Provider[]>()

  const getProvidersWithAppointments = (): Provider[] => {
    const providers = appointments.reduce((providers, appointment) => {
      const key = appointment?.provider?.id
      if (key && !providers.has(key)) {
        providers.set(key, appointment.provider)
      }
      return providers
    }, new Map())
    return Array.from(providers.values())
  }

  const filterAppointmentsByProvider = (providerId: number) => {
    return appointments.filter(appointment => appointment.provider.id === providerId)
  }

  useEffect(() => {
    const providers = getProvidersWithAppointments()
    setProviders(providers)
  }, [appointments])

  return (
    <div className="clinic">
      <address className="clinic-address">
        <div className="clinic-title">{name}</div>
        <div>{address}</div>
        <div>{city}, {state} {zipcode}</div>
      </address>
      <div className="clinic-provider">
        {providers?.map(provider => <ProviderCard
          key={provider.id}
          name={provider.name}
          credentials={provider.credentials}
          phone={provider.phoneNumber}
          appointments={filterAppointmentsByProvider(provider.id)}
        />)}
      </div>
    </div>
  )
}

export default ClinicCard