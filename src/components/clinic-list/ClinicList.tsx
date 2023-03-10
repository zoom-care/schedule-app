import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../App"
import { getAppointmentsByClinic, getClinics } from "../../services/ApiService"
import { AppointmentSlot, Clinic } from "../../zoomcare-api"
import ClinicCard from "../clinic-card/ClinicCard"
import Error from "../error/Error"

import './ClinicList.css'

type ClinicsAppointments = Map<number, AppointmentSlot[]>

const ClinicList = () => {
  const [error, setError] = useState<boolean>(false)
  const [appointments, setAppointments] = useState<ClinicsAppointments>()
  const [clinics, setClinics] = useState<Clinic[]>()
  const authToken = useContext(LoginContext)

  useEffect(() => {
    (async () => {
      try {
        const [appointmentsData, clinicsData] = await Promise.all([
          getAppointmentsByClinic(authToken),
          getClinics(authToken)
        ])
        setAppointments(appointmentsData)
        setClinics(clinicsData.clinics)
      } catch {
        setError(true)
      }
    })()
  }, [])

  if (error) {
    return <Error />
  }

  return (
    <div className="clinic-list">
      {appointments && clinics?.map(clinic => <ClinicCard
        name={clinic.name}
        address={clinic.address}
        key={clinic.id}
        city={clinic.city}
        state={clinic.state}
        zipcode={clinic.zipcode}
        appointments={appointments.get(clinic.id)!}
      />)}
    </div>
  )
}

export default ClinicList