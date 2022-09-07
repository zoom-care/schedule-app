import React, { PropsWithChildren } from 'react'
import { Clinic } from '../../zoomcare-api'

export interface WithClinicDataProps extends PropsWithChildren<{ clinic: Clinic }> {
  clinicId: number
}

export default function WithClinicData (): React.ReactElement {
  return (
    <>
    </>
  )
}
