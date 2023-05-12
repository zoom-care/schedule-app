import React from 'react'
import { useClinic } from '../Hooks/useClinic'

export const ClinicData = ({ clinicID }: { clinicID: number }) => {
  const { data, isLoading } = useClinic(clinicID)

  if (isLoading) return <header>Loading clinic...</header>

  const {
    name = 'Unknown Clinic',
    city,
    state,
    zipcode,
    address = `Sorry, we can't find this clinic address`,
  } = data ?? {}
  return (
    <header>
      <h3>{name}</h3>
      <div>{address}</div>
      {data && (
        <div>
          {city}, {state} {zipcode}
        </div>
      )}
    </header>
  )
}
